import React, { useState } from "react";
import api from "../../services/api";
import { Content, FormArea, Form } from './styles';
import HeaderPage from "../../components/Header";

const CreateUser = () => {

    const [nameForm, setNameForm] = useState('');
    const [emailForm, setEmailForm] = useState('');
    const [userForm, setUserForm] = useState('');
    const [passwordForm, setPasswordForm] = useState('')

    const handleSubmitForm = async () => {
        try {
            const payload = {
                name: nameForm,
                email: emailForm,
                user: userForm,
                password: passwordForm
            }

            await api.post('/user', payload);

        }catch(err){
            alert(err);
        }
    }

    return (
        <Content>
            <HeaderPage name="Login"/>

            <FormArea>
                <h1>Cadatre-se</h1>
                <span>Preencha as informações abaixo!</span>
                <Form>
                    <input type="text" placeholder="Nome" value={nameForm} onChange={e => setNameForm(e.target.value)}/>
                    <input type="text" placeholder="Email" value={emailForm} onChange={e => setEmailForm(e.target.value)}/>
                    <input type="text" placeholder="User" value={userForm} onChange={e => setUserForm(e.target.value)}/>
                    <input type="password" placeholder="Password" value={passwordForm} onChange={e => setPasswordForm(e.target.value)}/>

                    <button onClick={handleSubmitForm}>Cadastrar</button>
                </Form>
            </FormArea>
        </Content>
    );
}

export default CreateUser;


