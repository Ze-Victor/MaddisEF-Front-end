import React from "react";
import {Container, Header} from './styles'

const HeaderPage = ({name}) => {
    return (
        < Container >
            <Header>
                <h1>MaddisEF</h1>

                <button> {name} </button>
            </Header>
        </Container>
    );
}

export default HeaderPage;