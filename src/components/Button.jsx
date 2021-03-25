import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    background-color: white;
    color: tomato;
    border: 2px solid tomato;
    border-radius: 2px;
    padding: 0.5em;
    cursor: pointer;
    font-size: 14pt;
    display: block;
    margin: 1em auto;

    &:hover {
        background-color: tomato;
        color: white;
    }

    &:focus {
        outline: none;
    }
`;


class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <StyledButton>{this.props.children}</StyledButton>
        );
    }
}

export default Button;