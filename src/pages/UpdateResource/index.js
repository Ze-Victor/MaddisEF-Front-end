import React, { useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
import { Content, FormArea, Form } from './styles';
import api from '../../services/api'
import HeaderPage from "../../components/Header";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

const UpdateResource = () => {

    const [titleForm, setTitleForm] = useState('');
    const [descriptionForm, setDescriptionForm] = useState('');
    const [contentForm, setContentForm] = useState('');

    const [user, setUser] = useState([]);

    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {

        const token = localStorage.getItem("@token");
        api.defaults.headers.authorization = `Bearer ${token}`;

        const decode = jwt_decode(token);
        setUser(decode);

        api.get(`/resource/id/${id}`).then(({data}) => {
            setTitleForm(data.title);
            setContentForm(data.content);
            setDescriptionForm(data.description);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmitForm = async (event) => {

        event.preventDefault();

        try {
            const payload = {
                title: titleForm,
                description: descriptionForm,
                content: contentForm,
                user_id: user.sub
            }

            api.put(`/resource/${id}`, payload);
            toast.success('Recurso Atualizado!');
        
            history.push('/resource');    

        }catch(err){
            toast.error('Erro ao atualizar recurso!');
        }
    } 

    return (

        <Content>
            <HeaderPage name="Sair"/>
            <FormArea>
                <h1>Atualize o recurso</h1>
    
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

export default UpdateResource;