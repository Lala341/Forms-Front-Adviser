import React, {useEffect, useState} from 'react';
import Webcam from "react-webcam";
import { Form, Button, Row, Col } from 'react-bootstrap';


export default function Video(props){
    const [screenshot, setscreenshot] = useState(null);
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
       
      const WebcamCapture = () => {
        const webcamRef = React.useRef(null);
       
        const capture = React.useCallback(
          () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setscreenshot(imageSrc);
            props.setscreenshot(imageSrc);
          },
          [webcamRef]
        );
       
        return (
          <div className="col-12" style={{paddingTop:"20%"}}>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={580}
              videoConstraints={videoConstraints}
            />
            <br/>
            <div className="col-12">
            <Button onClick={capture}>Capture photo</Button>
            
            </div>
            <br/>
            <br/>
            </div>
        );
        }
        return WebcamCapture();
}