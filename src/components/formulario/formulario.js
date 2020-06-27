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
            <Col>{this.renderField(field)}</Col>
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
                        }}/>
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
    this.nombres = '';
    this.apellidos = '';
    this.cedula = '';
    this.placa = '';
    this.numCarroceria = '';
    this.tipoCarroceria = '';
    this.numMotor = '';
    this.numSerie = '';
    this.combustible = '';
    this.colores = '';
    this.cilindrada = '';
    this.potencia = '';
    this.capacidad = '';
    this.clase = '';
    this.vin = '';
    this.marca = '';
    this.linea = '';
    this.modelo = '';
    this.blindaje = '';
    this.desmonteBlindaje = '';
}