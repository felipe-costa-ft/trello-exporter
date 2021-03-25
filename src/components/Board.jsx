import React from 'react';

import styled from 'styled-components';

const StyledBoard = styled.div`
    background-color: dodgerblue;
    width: 12em;
    height: 6em;
    border-radius: 4px;
    margin: 0;
    text-align: left;
    color: white;
    font-weight: bolder;


    &:hover {
        cursor: pointer;
    }
`;

const BoardName = styled.p`
    padding: 0.5em;
    margin: 0;

`;


class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <StyledBoard>
                <BoardName>{this.props.name}</BoardName>
            </StyledBoard>
        );
    }
}

export default Board;