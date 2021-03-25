import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
    background-color: snow;
    height: 2em;
    border-radius: 4px;
    margin: 0.5em auto;
    padding: 0.5em;
    box-shadow: gray 1px 1px;
    cursor: pointer;

`;

const CardTitle = styled.p`
    font-weight: normal;
`;


class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <StyledCard>
                <CardTitle>{this.props.name}</CardTitle>
            </StyledCard>
        );
    }
}

export default Card;