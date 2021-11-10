import React from "react";
import {Container, Header} from './styles'
import {Link} from 'react-router-dom';

const HeaderPage = ({name}) => {
    return (
        < Container >
            <Header>
                <h1>Plataforma Teste</h1>

                <button><Link to={
                    name === "Cadastrar"
                    ? "/create-user"
                    : "/login"
                }>{name}</Link></button>
            </Header>
        </Container>
    );
}

export default HeaderPage;