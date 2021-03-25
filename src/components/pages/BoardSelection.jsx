import React from 'react';

import styled from 'styled-components';

import StyledLink from 'components/StyledLink';


import Container from 'components/Container';
import Title from 'components/Title'
import Board from 'components/Board'


const BoardsGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    gap: 1em;
`;

class BoardSelection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <Title>Selecione o quadro</Title>
                <BoardsGrid>
                    <StyledLink to="/formatselection"><Board name="Quadro 1" /></StyledLink>
                    <StyledLink to="/formatselection"><Board name="Quadro 2" /></StyledLink>
                    <StyledLink to="/formatselection"><Board name="Quadro 3" /></StyledLink>
                    <StyledLink to="/formatselection"><Board name="Quadro 4" /></StyledLink>
                    <StyledLink to="/formatselection"><Board name="Quadro 5" /></StyledLink>
                </BoardsGrid>
            </Container>
        );
    }
}

export default BoardSelection;