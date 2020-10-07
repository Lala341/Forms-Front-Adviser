import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class FormularioComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formulario: new Formulario(),
            rtc: props.rtc,
            data:{}
        }
    }
    sendData() {

        var data={
                 'placa1': 'XZY',
                 'placa2': '321',
                 'marca': 'NISSAN',
                 'linea': 'X-TRAIL T32',
                 'tipoCombustible': 'GAS',
                 'color': 'GRIS',
                 'modelo': '2017',
                 'cilidraje': '2488',
                 'pasajerosSentados': '7 Psj.',
                 'carroceria': 'WAGON',
                 'noMotor': 'QR25774843L',
                 'esRegrabadoMotor': 'NO',
                 'noChasis': 'JN1JBNT32Z0007266',
                 'esRegrabadoChasis': 'SI',
                 'noSerie': 'JN1JBNT32Z0007266',
                 'esRegrabadoSerie': 'NO',
                 'noVin': 'JN1JBNT32Z0007266',
                 'nombresVendedor': 'Lewis José',
                 'primerApellidoVendedor': 'Yuburi',
                 'segundoApellidoVendedor': 'Medina',
                 'tipoDocumentoVendedor': 'CC',
                 'noDocumentoVendedor': '35456963',
                 'direccionVendedor': 'Carrera 5D este 104A-24',
                 'ciudadVendedor': 'Bogotá',
                 'telefonoVendedor': '0987654321',
                 'nombresComprador': 'Lewis José',
                 'primerApellidoComprador': 'Yuburi',
                 'segundoApellidoComprador': 'Medina',
                 'tipoDocumentoComprador': 'CC',
                 'noDocumentoComprador': '35456963',
                 'direccionComprador': 'Carrera 5D este 104A-24',
                 'ciudadComprador': 'Bogotá',
                 'telefonoComprador': '0987654321',
                 'tramite': 'TRASPASO',
                 'tipoServicio': 'Particular',
                 'claseVehiculo': 'BUS',
             
            'owner_fullname': "nombresVendedor",
            'owner_id_type': "owner_id_type",
            'owner_id': "noDocumento",
            'owner_city': "ciudad",
            'owner_holder_name': "owner_holder_name",
            'owner_holder_id_type': "owner_holder_id_type",
            'owner_holder_id': "owner_holder_id",
            'buyer_fullname': "buyer_fullname",
            'buyer_id_type': "buyer_id_type",
            'buyer_id': "buyer_id",
            'buyer_city':"buyer_city",
            'buyer_holder_name': "buyer_holder_name",
            'buyer_holder_id_type': "buyer_holder_id_type",
            'buyer_holder_id': "buyer_holder_id",
            'vechicle_brand': "vechicle_brand",
            'vechicle_model': "vechicle_model",
            'vehicle_series': "vehicle_series",
            'vechicle_plate': "vechicle_plate",
            'vechicle_engine': "vechicle_engine",
            'vechicle_serie': "vechicle_serie",
            'vechicle_chassis': "vechicle_chassis",
            'vehicle_color': "vehicle_color",
            'vehicle_city': "vehicle_city",
            'vehicle_pricing': "vehicle_pricing",
            'payment_method': '______________________',
            'vehicle_classification': "vehicle_classification",
        
            'id': "noDocumento",
            "image": this.props.image
        }

        fetch("http://127.0.0.1:8000/api/v1/documents", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }
          }).then((res)=>{});
    }


    sendDataMsg(key) {
        let value = this.state.formulario[key];
        let msg = "data:::" + key + ":" + value;
        console.log(msg);
        this.state.rtc.sendData(msg);
    }

    handleChange = (e) => {
        let form = this.state.formulario;
        form['nombres'] = e.target.value;
        this.setState({
            formulario: this.state.formulario,
        });
        console.log(this.state.formulario);
    }

    renderAllFields() {
        const fields = Object.keys(this.state.formulario);

        return fields.map(field => (
            <Col key={field}>{this.renderField(field)}</Col>
        ));
    }

    renderField(fieldName) {
        return (
            <div>
            <Form.Group controlId={fieldName}>
                <Form.Row>
                    <Col>
                        <Form.Label>{fieldName}:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type="text" onChange={(e) => {
                            this.state.formulario[fieldName] = e.target.value;
                        }} 
                        placeholder={this.state.formulario[fieldName]}
                        />
                    </Col>
                    <Col>
                        <Button id={fieldName} variant="primary"
                            onClick={(e) => {
                                this.sendDataMsg(fieldName);
                            }}>enviar</Button>
                    </Col>
                </Form.Row>
            </Form.Group>
            
            </div>
        )
    }

    render() {
        return (
            <div className="col-12">
                
                <div>
           


{ this.props.image? <div className="row" id="datafinal" style={{paddingTop:"10%"}}>
<div className="col-8"><img src={this.props.image} width={580}/></div>
                        <div className="col-4"><h6>{JSON.stringify({
                 'placa1': 'XZY',
                 'placa2': '321',
                 'marca': 'NISSAN',
                 'linea': 'X-TRAIL T32',
                 'tipoCombustible': 'GAS',
                 'color': 'GRIS',
                 'modelo': '2017',
                 'cilidraje': '2488',
                 'pasajerosSentados': '7 Psj.',
                 'carroceria': 'WAGON',
                 'noMotor': 'QR25774843L',
                 'esRegrabadoMotor': 'NO',
                 'noChasis': 'JN1JBNT32Z0007266',
                 'esRegrabadoChasis': 'SI',
                 'noSerie': 'JN1JBNT32Z0007266',
                 'esRegrabadoSerie': 'NO',
                 'noVin': 'JN1JBNT32Z0007266',
                 'nombresVendedor': 'Lewis José',
                 'primerApellidoVendedor': 'Yuburi',
                 'segundoApellidoVendedor': 'Medina',
                 'tipoDocumentoVendedor': 'CC',
                 'noDocumentoVendedor': '35456963',
                 'direccionVendedor': 'Carrera 5D este 104A-24',
                 'ciudadVendedor': 'Bogotá',
                 'telefonoVendedor': '0987654321',
                 'nombresComprador': 'Lewis José',
                 'primerApellidoComprador': 'Yuburi',
                 'segundoApellidoComprador': 'Medina',
                 'tipoDocumentoComprador': 'CC',
                 'noDocumentoComprador': '35456963',
                 'direccionComprador': 'Carrera 5D este 104A-24',
                 'ciudadComprador': 'Bogotá',
                 'telefonoComprador': '0987654321',
                 'tramite': 'TRASPASO',
                 'tipoServicio': 'Particular',
                 'claseVehiculo': 'BUS',
             
            'owner_fullname': "nombresVendedor",
            'owner_id_type': "owner_id_type",
            'owner_id': "noDocumento",
            'owner_city': "ciudad",
            'owner_holder_name': "owner_holder_name",
            'owner_holder_id_type': "owner_holder_id_type",
            'owner_holder_id': "owner_holder_id",
            'buyer_fullname': "buyer_fullname",
            'buyer_id_type': "buyer_id_type",
            'buyer_id': "buyer_id",
            'buyer_city':"buyer_city",
            'buyer_holder_name': "buyer_holder_name",
            'buyer_holder_id_type': "buyer_holder_id_type",
            'buyer_holder_id': "buyer_holder_id",
            'vechicle_brand': "vechicle_brand",
            'vechicle_model': "vechicle_model",
            'vehicle_series': "vehicle_series",
            'vechicle_plate': "vechicle_plate",
            'vechicle_engine': "vechicle_engine",
            'vechicle_serie': "vechicle_serie",
            'vechicle_chassis': "vechicle_chassis",
            'vehicle_color': "vehicle_color",
            'vehicle_city': "vehicle_city",
            'vehicle_pricing': "vehicle_pricing",
            'payment_method': '______________________',
            'vehicle_classification': "vehicle_classification",
        })}</h6></div>
      </div>: null }
            
            </div>
            </div>
        );
    }
}
export default FormularioComponent;

function Formulario() {
    this.nombres = 'Juan David';
    this.apellidos = 'Zambrano';
    this.cedula = '1020827364';
    this.placa = 'ABC 123';
    this.nombresContraparte = '';
    this.apellidosContraparte = '';
    this.cedulaContraparte = '';
    this.numCarroceria = 'AX919123JS';
    this.tipoCarroceria = 'Hatchback';
    this.numMotor = 'AX919123JS';
    this.numSerie = 'AX919123JS';
    this.combustible = 'Gasolina';
    this.colores = 'Plata Sirius Metálico';
    this.cilindrada = '1598cc';
    this.potencia = '99hp';
    this.capacidad = '1500kg';
    this.clase = 'Particular';
    this.vin = 'AX919123JS';
    this.marca = 'Volkswagen';
    this.linea = 'Gol Trendline MT';
    this.modelo = '2017';
    this.blindaje = 'N/A';
    this.desmonteBlindaje = 'N/A';
}