import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class FormularioComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formulario: new Formulario(),
            rtc: props.rtc,
        }
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
        )
    }

    render() {
        return (
            <div>
                <Form>
                    {this.renderAllFields()}
                </Form>
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