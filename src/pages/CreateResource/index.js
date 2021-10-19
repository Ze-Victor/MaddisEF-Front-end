import React, { useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
import { Content, FormArea, Form } from './styles';
import api from '../../services/api'
import HeaderPage from "../../components/Header";

const CreateResource = () => {

    const [titleForm, setTitleForm] = useState('');
    const [descriptionForm, setDescriptionForm] = useState('');
    const [contentForm, setContentForm] = useState('');

    const [user, setUser] = useState([]);

    useEffect(() => {

        const token = localStorage.getItem("@token");
        api.defaults.headers.authorization = `Bearer ${token}`;

        const decode = jwt_decode(token);
        setUser(decode)

    }, []);

    const handleSubmitForm = async () => {
        try {
            const payload = {
                title: titleForm,
                description: descriptionForm,
                content: contentForm,
                user_id: user.sub
            }

            await api.post('/resource', payload);

            alert('Recurso inserido!');

        }catch(err){
            alert(err);
        }
    } 

    return (

        <Content>
            <HeaderPage name="Sair"/>
            <FormArea>
                <h1>Insira um novo recurso</h1>
                <span>Preencha os campos abaixo!</span>
                <Form>
                    <input type="text" placeholder="Title" value={titleForm} onChange={e => setTitleForm(e.target.value)}/>
                    <input type="text" placeholder="Description" value={descriptionForm} onChange={e => setDescriptionForm(e.target.value)}/>
                    <input type="text" placeholder="Content" value={contentForm} onChange={e => setContentForm(e.target.value)}/>

                    <button onClick={handleSubmitForm}>Cadastrar</button>
                </Form>
            </FormArea>
        </Content>

    );
}

export default CreateResource;