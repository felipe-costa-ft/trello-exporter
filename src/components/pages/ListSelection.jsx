import React from 'react';

import styled from 'styled-components';

import StyledLink from 'components/StyledLink';

import Container from 'components/Container';
import Title from 'components/Title'
import List from 'components/List';


const ListWrapper = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 1em;
    padding: 1em 3em;;
`;

class ListSelection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <Title>Selecione a lista</Title>
                <ListWrapper>
                    <StyledLink to="/formatselection"><List name="Lista 1"/></StyledLink>
                    <StyledLink to="/formatselection"><List name="Lista 2"/></StyledLink>
                    <StyledLink to="/formatselection"><List name="Lista 3"/></StyledLink>
                    <StyledLink to="/formatselection"><List name="Lista 4"/></StyledLink>
                    <StyledLink to="/formatselection"><List name="Lista 5"/></StyledLink>
                    <StyledLink to="/formatselection"><List name="Lista 6"/></StyledLink>
                </ListWrapper>
                
            </Container>
        );
    }

}

export default ListSelection;