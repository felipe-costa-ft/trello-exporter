import React from 'react';
import styled from 'styled-components';
import Card from 'components/Card';
import Container from 'components/Container';
import Title from 'components/Title';
import StyledLink from 'components/StyledLink';


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

                    <StyledLink to="/formatselection"><Card name="Card de teste de conteudo 1"/></StyledLink>
                    <StyledLink to="/formatselection"><Card name="Card de teste de conteudo 2"/></StyledLink>
                    <StyledLink to="/formatselection"><Card name="Card de teste de conteudo 3"/></StyledLink>
                    <StyledLink to="/formatselection"><Card name="Card de teste de conteudo 4"/></StyledLink>
                    <StyledLink to="/formatselection"><Card name="Card de teste de conteudo 5"/></StyledLink>
                    <StyledLink to="/formatselection"><Card name="Card de teste de conteudo 6"/></StyledLink>
                </CardWrapper>
            </Container>
        );
    }
}

export default CardSelection;