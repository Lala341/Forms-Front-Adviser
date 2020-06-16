import React, {Component} from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class Messages extends Component {

    renderMessage(message) {
      const {member, text, type} = message;
        return (
          
            <div className={(type)?"row":"row justify-content-end"}>

<div className="col-6" >
  <div className="row" style={{border: "2px solid #314A5E", borderRadius: "0.7em"}} >
  <div className="col-2" >
              <AccountCircleIcon style={{color: "#314A5E", fontSize: 40}}></AccountCircleIcon>
              </div>
              <div className="col-6" style={{textAlign: "left"}}>
             
            <div className="Message-content" >


              <div className="username">
                <b>{member.username}</b>
                <p style={{marginBottom:"0"}}> 2019-10-20 20:36:00</p>
              </div>
              

            </div>

           
              </div>
              <div className="col-4" style={{textAlign: "left"}}>
<p style={{marginBottom:"0"}}>Estado: <b>Abierto</b></p>
</div>
  </div>
  <div className="text" style={{textAlign: "left"}}>{text}</div>
</div>
              
            </div>


            
          
        );
      }
  render() {
    const {messages} = this.props;
    return (
      <div >
        {messages.map(m => this.renderMessage(m))}
      
      </div>
      
      
      
    );
  }
}

export default Messages;