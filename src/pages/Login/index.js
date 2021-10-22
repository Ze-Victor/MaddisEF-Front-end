import React, { useState } from "react";
import {Content, BoxLogin, FormLogin} from './styles';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';
import HeaderPage from "../../components/Header";
import {toast} from 'react-toastify';

const Login = () => {

    const [userForm, setUserForm] = useState('');
    const [passwordForm, setPasswordForm] = useState('');

    const history = useHistory();

    const handleSubmitForm = async (event) => {

        event.preventDefault();

        try{
            const payload = {
                user: userForm,
                password: passwordForm
            }
        
            const { data } = await api.post('/user/login', payload);

            api.defaults.headers.authorization = `Bearer ${data.token}`
            localStorage.setItem("@token", data.token);

            toast.success('Usuário autenticado!');

            history.push('/resource');

        }catch(error){
            toast.error('Falha na autenticação. Usuário ou senha inválidos!');
        }
    };

    return (
        <>
        <Content>
            <HeaderPage name="Cadastrar"/>
            <BoxLogin>
                <h1>Login</h1>
                <FormLogin>
                    <input type="text" placeholder="User" value={userForm} onChange={e=>setUserForm(e.target.value)}/>
                    <input type="password" placeholder="Password" value={passwordForm} onChange={e=>setPasswordForm(e.target.value)}/>

                    <button onClick={handleSubmitForm}>Entrar</button>
                </FormLogin>
            </BoxLogin>
        </Content>
        </>
    );
}

export default Login;