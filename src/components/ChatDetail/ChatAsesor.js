import React, {Component}  from 'react';
import { ReactMic } from 'react-mic';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Button from '@material-ui/core/Button';
import Messages from "./Messages";
import Paper from '@material-ui/core/Paper';


  class Chat extends Component {

    state = {
    classes: this.props.classes,
    messages: [
      {
        text: "Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad ",
        type: true,
        member: {
          color: "blue",
          username: "Cliente"
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
      {
        text: "Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad ",
        type: true,
        member: {
          color: "blue",
          username: "Cliente"
        }
      },
      {
        text: "Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidadAcuerdo de confidencialidad Acuerdo de confidencialidad Acuerdo de confidencialidad",
        type: false,
        member: {
          color: "blue",
          username: "Asesor"
        }
      }
      
    ],
  messagesO:[
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
  setMobileOpen(e){

    this.setState({mobileOpen:e});
  }

  setOpen(e){
    this.setState({open:e});
  }
  setOpen2(e){
    this.setState({open2:e});
  }

  handleClickOpen=() =>{
    this.setOpen(true);
  };
  handleClickOpen2=() =>{
    this.setOpen2(true);
  };
  handleClose=() =>{
    this.setOpen(false);
  }
  handleClose2=() =>{
    this.setOpen2(false);
  }
  sendMessage(){
    var txt= document.getElementById("exampleFormControlTextarea1").value;
    var messages= this.state.messages;
    messages.push({
      text: txt,
      type: false,
      member: {
        color: "blue",
        username: "Asesor"
      }
    });
    console.log(txt);
    this.setState({messages:messages});
  }
  render() {
    
  return (
    <main className={this.state.classes.content}>
        <h3>Chat</h3>
        <div className={this.state.classes.divText} >

<div className="row">
<div className={"col-12"} style={{paddingTop: "2%"}}>

          <div className="col-12" >
<Paper style={{ width: '100%' }}>
          
          <div className="row" >
          <div className="col-12" >
          <Paper className={(this.state.open)?this.state.classes.paperChat:this.state.classes.paperChatActive}>
         
        
          <Messages
        messages={this.state.messages}
        currentMember={this.state.member}
        color={"#314A5E"}
       />
       </Paper>
       <div className="row" style={{width: "100%"}}>
         <div className="col-10">
         <div class="form-group" style={{width: "100%"}}>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
         </div>
         <div className="col-2" >
         <div className="row"  >
         <div className="col-6" style={{backgroundColor: "#314A5E"}}><Button  style={{padding: "5%",  width: "100%"}}>
            <AttachFileIcon  fontSize="medium" style={{color: "white"}}/>
          </Button></div>
         <div className="col-6" style={{backgroundColor: "#707070"}}><Button  onClick={()=>this.sendMessage()}style={{padding: "5%", width: "100%"}}>
            <SendIcon fontSize="medium" style={{color: "white"}}/>
          </Button></div>
         
         </div>
         <div className="row" style={{backgroundColor: "#838383"}}>
         <Button  style={{padding: "5%", paddingRight: "2%", width: "100%"}}>
            <OpenInNewIcon fontSize="medium" style={{color: "white"}}/>
          </Button>
         </div>

         </div>
       </div>
          </div>
            
</div>
<div>
  <h3>Audio</h3>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#ffffff" />
          <div className="row justify-content-center">
        <Button onClick={this.startRecording} type="button">Start</Button>
        <Button onClick={this.stopRecording} type="button">Stop</Button>
        </div>
        </div>
        
          </Paper>
          
 
</div>
</div>

      
  </div>
  
</div>
      </main>
      
  );
}
}


export default Chat;
