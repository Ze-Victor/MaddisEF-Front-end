import React, { useEffect, useState} from "react";
import api from "../../services/api";
import { Content, BoxArea, Resource, NewResource, ButtonArea, TitleResource } from "./styles";
import HeaderPage from "../../components/Header";
import { Link, useHistory } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const MyResources = () => {

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
    
    },[resources]);

    function Update(id){
        history.push(`/update-resource/${id}`);
    }

    async function Delete(id){
        await api.delete(`/resource/${id}`);
    }

    return (
        <>
            <Content>
                <HeaderPage name="Sair"/>

                <Link to="/create-resource">
                    <NewResource>
                            <button>Novo+</button>
                    </NewResource>
                </Link>
                
                <BoxArea>
                    {resources?.map(resource => {
                        return (
                            <Resource key={resource.id}>
                                <TitleResource>
                                    <h1>{resource.title}</h1>
                                </TitleResource>

                                <ButtonArea>
                                    <button>Ver mais...</button>
                                    <button className="update" onClick={() => Update(resource.id)}>Atualizar</button>
                                    <button className="delete" onClick={() => Delete(resource.id)}>Delete</button>
                                </ButtonArea>
                            </Resource>
                        )
                    })}
                </BoxArea>
            </Content>
        </>
    );
}

export default MyResources;