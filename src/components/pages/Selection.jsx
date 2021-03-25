import React from 'react';

import StyledLink from 'components/StyledLink';

import Container from 'components/Container'
import Title from 'components/Title'
import Button from 'components/Button'

class Selection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <Title>O que você quer exportar?</Title>
                <StyledLink to="/boardselection"><Button>Um quadro inteiro</Button></StyledLink>
                <StyledLink to="/listselection"><Button>Uma lista de um quadro</Button></StyledLink>
                <StyledLink to="/cardselection"><Button>Somente um card</Button></StyledLink>
            </Container>
        );
    }
}

export default Selection;