import React, { useEffect, useState} from "react";
import api from "../../services/api";
import { Content, 
         BoxArea,
         Resource,
         ButtonResource,
         ButtonArea,
         TitleResource,
         FilterResource } from "./styles";
import HeaderPage from "../../components/Header";
import { useHistory } from "react-router-dom";

const Resources = () => {

    const [resources, setResources] = useState([]);
    const [search, setSearch] = useState('');

    const history = useHistory();

    useEffect(() => {

        const token = localStorage.getItem("@token");
        api.defaults.headers.authorization = `Bearer ${token}`;

        if(token){
            api.get('/resource').then(({data}) => {
                setResources(data);
            }).catch(error => {
            console.log(error)
            })
        }else {
            alert('Não foi possível carregar a página! Usuário não autorizado...');
        } 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    
    },[]);

    function MyResources(){
        history.push('/my-resources')
    }

    function filter(){

        api.get(`/resource?filter=${search}`).then(({data}) => {
                setResources(data);
                console.log(data);
        }).catch(error => {
            console.log(error)
        })

        
    }

    return (
        <>
            <Content>
                <HeaderPage name="Sair"/>

                    <ButtonResource>
                            <button onClick={MyResources}>Meus Recursos</button>
                            <FilterResource>
                                <input type="text" placeholder="Buscar" value={search} onChange={(e) => setSearch(e.target.value)}/>
                                <button onClick={() => filter()}>
                                    Search
                                </button>
                            </FilterResource>
                    </ButtonResource>
                
                <BoxArea>
                    {resources?.map(resource => {
                        return (
                            <Resource key={resource.id}>
                                <TitleResource>
                                    <h1>{resource.title}</h1>
                                </TitleResource>

                                <ButtonArea>
                                    <button>Ver mais...</button>
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