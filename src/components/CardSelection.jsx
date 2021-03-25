import React from 'react';
import styled from 'styled-components';
import Card from 'components/Card';
import Container from 'components/Container';
import Title from 'components/Title';


const CardWrapper = styled.div`
    background-color: gainsboro;
    width: 18em;
    min-width: 18em;
    margin: auto;
    border-radius: 4px;
    padding: 1em;

    & p {
        text-align: left;
        margin: auto;
    }
`;

const ListTitle = styled.p`
    font-weight: bolder;
`;

class CardSelection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <Title>Selecione o Card</Title>
                <CardWrapper>
                    <ListTitle>Lista 1</ListTitle>

                    <Card name="Card de teste de conteudo 1"/>
                    <Card name="Card de teste de conteudo 2"/>
                    <Card name="Card de teste de conteudo 3"/>
                    <Card name="Card de teste de conteudo 4"/>
                    <Card name="Card de teste de conteudo 5"/>
                    <Card name="Card de teste de conteudo 6"/>
                    <Card name="Card de teste de conteudo 7"/>
                    <Card name="Card de teste de conteudo 8"/>
                    <Card name="Card de teste de conteudo 9"/>
                    <Card name="Card de teste de conteudo 10"/>
                    <Card name="Card de teste de conteudo 11"/>
                </CardWrapper>
            </Container>
        );
    }
}

export default CardSelection;