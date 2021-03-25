import React from 'react';

import styled from 'styled-components';
import Container from 'components/Container'
import Button from 'components/Button';
import Title from 'components/Title'



class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        return(
            <Container>
                <Title>Conecte-se com o Trello para começar</Title>
                <Button>Conectar</Button>
            </Container>
        )
        
    }
}

export default Login;