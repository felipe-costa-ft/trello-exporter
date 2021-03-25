import React from 'react';

import styled from 'styled-components';


const StyledHeader = styled.header`
    padding: 1em;
    background-color: dodgerblue;
`;


const Logo = styled.h1`
    font-family: 'sans-serif';
    color: snow;
    font-size: 18pt;
    user-select: none;

    @media (max-width: 375px) {
        font-size: 14pt;
    }

`;

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <StyledHeader>
                <Logo>Trello Exporter</Logo>
            </StyledHeader>
        );
    }
}

export default Header;