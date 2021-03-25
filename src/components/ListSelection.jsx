import React from 'react';

import styled from 'styled-components';

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
                    <List name="Lista 1"/>
                    <List name="Lista 2"/>
                    <List name="Lista 3"/>
                    <List name="Lista 4"/>
                    <List name="Lista 5"/>
                    <List name="Lista 6"/>
                    <List name="Lista 7"/>
                    <List name="Lista 8"/>
                    <List name="Lista 9"/>
                </ListWrapper>
                
            </Container>
        );
    }

}

export default ListSelection;