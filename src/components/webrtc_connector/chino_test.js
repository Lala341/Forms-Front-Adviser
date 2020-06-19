
require('webrtc-adapter')




export default class rtc_connection {

    constructor() {
        this.messages = [];
        this.io = require('socket.io-client');
        this.socket = this.io('http://localhost:4000', {
            path: '/chino'
        });

        const configuration = {
            'iceServers': [
                {
                    urls: 'stun:stun.l.google.com:19302'
                },
                {
                    urls: 'turn:192.168.192.5:3478?transport=tcp',
                    username: 'zamba',
                    credential: '3284'
                },
                {
                    urls: 'turn:192.168.192.5:3478?transport=udp',
                    username: 'zamba',
                    credential: '3284'
                },
                {
                    urls: 'turn:192.168.192.5:3478',
                    username: 'zamba',
                    credential: '3284'
                }
            ]
        }

        this.peerConnection = new RTCPeerConnection(configuration);

        this.peerConnection.addEventListener('datachannel', event => {
            console.log("Created Data Channel");
            this.dataChannel = event.channel;
            this.dataChannel.addEventListener('msg', (msg) => {
                this.messages.push(msg);
                console.log(this.messages);
            })

        });



        this.remoteStream = new MediaStream();

        this.peerConnection.addEventListener('track', async (event) => {
            console.log("Track Added: " + event);
            this.remoteStream.addTrack(event.track, this.remoteStream);
        });



        this.peerConnection.onicecandidate = event => {
            // console.log('iceCandidate on local Peer');
            if (event.candidate) {
                console.log("Candidate SENT");
                this.sendMSG('new-ice-candidate', event.candidate);
            }
        }

        this.peerConnection.addEventListener('connectionstatechange', event => {
            if (this.peerConnection.connectionState === 'connected') {
                console.log("CONNECTED YAAAAY");
                this.connectVideoToNode('remoteVideo');
            }
        });


        //on connections
        this.socket.on('new-ice-candidate', async (msg) => {
            // console.log('iceCandidate on REMOTE Peer');
            try {
                await this.peerConnection.addIceCandidate(msg);
            } catch (e) {
                console.error('Error adding received ice candidate', e);
            }

        });


        this.socket.on('connection', (socket) => {
            console.log("Socket.io>> CONNECTED");
        })
        console.log('WebRTC Created');

        this.socket.on('offer', async (msg) => {
            console.log("offer received!");
            this.peerConnection.setRemoteDescription(new RTCSessionDescription(msg.offer));
            const answer = await this.peerConnection.createAnswer();
            await this.peerConnection.setLocalDescription(answer);
            this.sendMSG('answer', answer);
        });
    }


    sendData(msg) {
        if (this.dataChannel) {
            console.log("Sending: " + msg);
            this.dataChannel.send(msg);
        }
    }

    async sendMSG(event, msg) {
        this.socket.emit(event, msg);
    }



    async makeCall() {
        console.log("WebRTC>> makeCall()");

        const offer = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(offer);
        // signalingChannel.send({ 'offer': offer });
        if (this.socket.connected) {
            this.sendMSG('offer', { offer: offer })
            return true;
        } else {
            return false;
        }
    }

    connectVideoToNode(nodeId) {
        const remoteVideo = document.querySelector('#' + nodeId);
                remoteVideo.srcObject = this.remoteStream;
    }

    registrarCallbackMensajes(funcion) {
        if (this.dataChannel) {
            this.dataChannel.addEventListener('message', funcion);
        }
    }

}