import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Button from '@material-ui/core/Button';
import Messages from "./Messages";
import Paper from '@material-ui/core/Paper';
import FormularioComponent from '../formulario/formulario';
import { ButtonGroup } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import rtc_connection from '../webrtc_connector/chino_test';


class Chat extends Component {

  state = {
    classes: this.props.classes,
    messages: [
      {
        text: "Conexión establecida",
        type: true,
        member: {
          color: "blue",
          username: "Cliente"
        }
      }

    ],
    messagesO: [
      {
        text: "Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad ",
        type: true,
        member: {
          color: "blue",
          username: "Admin"
        }
      },
      {
        text: "Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad",
        type: false,
        member: {
          color: "blue",
          username: "Asesor"
        }
      },

    ],
    member: {
      username: "Admin",
      color: "blue"
    },
    open: false,
    open2: false,
    mobileOpen: false,
    color: this.props.color,
    record: false
  }


  startRecording = () => {
    this.setState({ record: true });
  }

  stopRecording = () => {
    this.setState({ record: false });
  }

  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
  }
  setMobileOpen(e) {

    this.setState({ mobileOpen: e });
  }

  setOpen(e) {
    this.setState({ open: e });
  }
  setOpen2(e) {
    this.setState({ open2: e });
  }

  handleClickOpen = () => {
    this.setOpen(true);
  };
  handleClickOpen2 = () => {
    this.setOpen2(true);
  };
  handleClose = () => {
    this.setOpen(false);
  }
  handleClose2 = () => {
    this.setOpen2(false);
  }
  sendMessage() {

    var txt = document.getElementById("exampleFormControlTextarea1").value;
    document.getElementById("exampleFormControlTextarea1").value = "";
    var messages = this.state.messages;
    messages.push({
      text: txt,
      type: false,
      member: {
        color: "blue",
        username: "Asesor"
      }
    });
    console.log(txt);
    this.setState({ messages: messages });
    this.props.rtc.sendData(txt);
  }
  sendMessageFrecuente(txt) {

    var messages = this.state.messages;
    messages.push({
      text: txt,
      type: false,
      member: {
        color: "blue",
        username: "Asesor"
      }
    });
    console.log(txt);
    this.setState({ messages: messages });
    this.props.rtc.sendData(txt);
  }

  renderMsgFrecuente(msg) {
    return (
      <Button variant="contained" style={{ backgroundColor: "grey" }} onClick={() => this.sendMessageFrecuente(msg)}>[{msg}]</Button>
    )
  }

  render() {

    return (
      <main className={this.state.classes.content}>
        <h3>Chat</h3>
        <div className={this.state.classes.divText} >
          <div className="row">
            <div className="col-6">

              <div className="row">
                <video id="remoteVideo" autoplay playsinline controls="false" />
              </div>
              <div className="row" style={{ paddingTop: "10%" }}>
                <div className="col-12">
                  <h6>Respuestas frecuentes</h6>
                  <div className="row">
                    {this.renderMsgFrecuente("Hello and welcome, press enter to continue")}
                    {this.renderMsgFrecuente("Please state your name and last name")}
                    {this.renderMsgFrecuente("Please state your license plate")}
                    {this.renderMsgFrecuente("Thank you.")}
                    {this.renderMsgFrecuente("Now, please show me your id card from the front")}
                    {this.renderMsgFrecuente("Now, please show me the back of your id card")}
                    {this.renderMsgFrecuente("Thank you, please wait while we check your data")}
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className={"col-12"} style={{ paddingTop: "2%" }}>

                <div className="col-12" >
                  <Paper style={{ width: '100%', height: "40%" }}>

                    <div className="row" >
                      <div className="col-12" >
                        <Paper className={(this.state.open) ? this.state.classes.paperChat : this.state.classes.paperChatActive}>


                          <Messages
                            messages={this.state.messages}
                            currentMember={this.state.member}
                            color={"#314A5E"}
                          />
                        </Paper>
                        <div className="row" style={{ width: "100%" }}>
                          <div className="col-10">
                            <div class="form-group" style={{ width: "100%" }}>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                          </div>
                          <div className="col-2" >
                            <div className="row"  >
                              <div className="col-12" style={{ backgroundColor: "#314A5E" }}><Button onClick={() => this.sendMessage()} style={{ padding: "5%", width: "100%" }}>
                                <SendIcon fontSize="large" style={{ color: "white" }} />
                              </Button></div>

                            </div>


                          </div>
                        </div>
                      </div>

                    </div>


                  </Paper>


                </div>
              </div>
            </div>

          </div>

        </div>
        <ButtonGroup>
          <IconButton id="previous" onClick={() => this.sendMessageFrecuente('control:::previousScreen')}
            style={{ width: "60px", height: "60px", borderRadius: "150px", backgroundColor: "black", border: "solid white", color: "white", marginTop: "50%" }}>
            {'<-'}
          </IconButton>
          <IconButton id="next" onClick={() => this.sendMessageFrecuente('control:::nextScreen')}
            style={{ width: "60px", height: "60px", borderRadius: "150px", backgroundColor: "black", border: "solid white", color: "white", marginTop: "50%" }}>
            {'->'}
          </IconButton>

        </ButtonGroup>
        <div>

        </div>
        <div class="row">
          <FormularioComponent rtc={this.props.rtc} />
        </div>
      </main>

    );
  }

  prevPage() {
    this.props.rtc.sendData('control:::previousScreen');
  }

  nextPage() {
    this.props.rtc.sendData('control:::nextScreen');
  }
}


export default Chat;
