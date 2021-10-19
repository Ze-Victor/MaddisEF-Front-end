import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Content, BoxArea, Resource, NewResource } from "./styles";
import HeaderPage from "../../components/Header";
//import jwt_decode from 'jwt-decode';

const Resources = () => {

    const [resources, setResources] = useState([]);
    //const [user, setUser] = useState('');

    useEffect(() => {

        const token = localStorage.getItem("@token");
        api.defaults.headers.authorization = `Bearer ${token}`;

        // const decode = jwt_decode(token);
        // setUser(decode.sub);

        if(token){
            api.get(`/resource`).then(({data}) => {
                setResources(data);
            }).catch(error => {
            console.log(error)
            })
        }else {
            alert('Não foi possível carregar a página! Usuário não autorizado...');
        } 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    
    },[]);

    return (
        <>
            <Content>
                <HeaderPage name="Sair"/>
                <NewResource>
                        <button>Novo+</button>
                </NewResource>
                <BoxArea>
                    {resources?.map(resource => {
                        return (
                            <Resource key={resource.id}>
                                <h1>{resource.title}</h1>
                                <span>{resource.description}</span>

                                <button>Ver mais...</button>
                            </Resource>
                        )
                    })}
                </BoxArea>
            </Content>
        </>
    );
}

export default Resources;