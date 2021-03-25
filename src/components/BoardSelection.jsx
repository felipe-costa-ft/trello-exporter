import React from 'react';

import styled from 'styled-components';

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
                    <Board name="Quadro 1" />
                    <Board name="Quadro 2" />
                    <Board name="Quadro 3" />
                    <Board name="Quadro 4" />
                    <Board name="Quadro 5" />
                </BoardsGrid>
            </Container>
        );
    }
}

export default BoardSelection;