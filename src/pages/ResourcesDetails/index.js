import React, {useEffect, useState} from "react";
import HeaderPage from "../../components/Header";
import {Content, HeaderTitle, Resource} from './styles'
import api from "../../services/api";
import {useParams, useHistory} from 'react-router-dom';

const ResourcesDetails = () => {

    const {id} = useParams();

    const history = useHistory();


    const [user, setUser] = useState('');

    useEffect(() => {

        api.get(`/resource/id/${id}`).then(({data}) => {
            setUser(data)
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function Return(){
        history.goBack();
    };

    return (
        <Content>
            <HeaderPage name="Sair"/>

            <HeaderTitle>
                <h1>{user.title}</h1>
            </HeaderTitle>

            <Resource>
                <span>{user.description}</span>
                <img src="https://www.michaeloliveira.com.br/wp-content/webp-express/webp-images/uploads/2016/10/miniatura-800x500.jpg.webp" alt="File"></img>
                <p>
                   {user.content}
                </p>

                <button onClick = {Return} >Voltar</button>
            </Resource>
            
        </ Content>
    );
}

export default ResourcesDetails;