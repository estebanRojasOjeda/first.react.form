import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const UserForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="firstName">Nombre</Label>
                    <Input type="text" name="firstName" id="firstName"
                        placeholder="ingrese..." onChange={(e) => setFirstName(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label for="lastName">Apellido</Label>
                    <Input type="text" name="lastName" id="lastName"
                        placeholder="ingrese..." onChange={(e) => setLastName(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail"
                        placeholder="ingrese..." onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label for="pass">Contraseña</Label>
                    <Input type="password" name="pass" id="pass"
                        placeholder="inhgrese..." onChange={(e) => setPass(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label for="confirmPass">Confirmar contraseña</Label>
                    <Input type="password" name="confirmPass" id="confirmPass"
                        placeholder="ingrese..." onChange={(e) => setConfirmPass(e.target.value)} />
                </FormGroup>

                <Button>Enviar</Button>
            </Form>
            <br/>
            <h1>Datos Ingresados</h1>
            <p>Nombre: {firstName}</p>
            <p>Apellido: {lastName}</p>
            <p>Correo: {email}</p>
            <p>Contraseña: {pass}</p>
            <p>Confirmar contraseña: {confirmPass}</p>
        </>
    );
};

export default UserForm;
