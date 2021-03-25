import React from 'react';
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
                <Button>Um quadro inteiro</Button>
                <Button>Uma lista de um quadro</Button>
                <Button>Somente um card</Button>
            </Container>
        );
    }
}

export default Selection;