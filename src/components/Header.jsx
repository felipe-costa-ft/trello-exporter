import React from 'react';

import styled from 'styled-components';
import StyledLink from './StyledLink';


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
                <StyledLink to="/"><Logo>Trello Exporter</Logo></StyledLink>
            </StyledHeader>
        );
    }
}

export default Header;