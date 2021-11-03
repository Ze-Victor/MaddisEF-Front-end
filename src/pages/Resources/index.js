import React, { useEffect, useState} from "react";
import api from "../../services/api";
import { Content, BoxArea, Resource, NewResource, ButtonArea } from "./styles";
import HeaderPage from "../../components/Header";
import { Link, useHistory } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const Resources = () => {

    const [resources, setResources] = useState([]);

    const history = useHistory();

    useEffect(() => {

        const token = localStorage.getItem("@token");
        api.defaults.headers.authorization = `Bearer ${token}`;

        const decode = jwt_decode(token);

        if(token){
            const rota = '/resource/' + decode.sub;
            api.get(rota).then(({data}) => {
                setResources(data);
            }).catch(error => {
            console.log(error)
            })
        }else {
            alert('Não foi possível carregar a página! Usuário não autorizado...');
        } 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    
    },[]);

    function Update(id){
        history.push(`/update-resource/${id}`);
    }

    return (
        <>
            <Content>
                <HeaderPage name="Sair"/>
                <NewResource>
                        <button><Link to="/create-resource">Novo+</Link></button>
                </NewResource>
                <BoxArea>
                    {resources?.map(resource => {
                        return (
                            <Resource key={resource.id}>
                                <h1>{resource.title}</h1>
                                <span>{resource.description}</span>

                                <ButtonArea>
                                    <button>Ver mais...</button>
                                    <button onClick={() => Update(resource.id)}>Atualizar</button>
                                </ButtonArea>
                            </Resource>
                        )
                    })}
                </BoxArea>
            </Content>
        </>
    );
}

export default Resources;