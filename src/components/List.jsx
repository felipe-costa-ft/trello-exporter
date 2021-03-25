import React from 'react'

import styled from 'styled-components';

const StyledList = styled.div`
    background-color: gainsboro;
    width: 18em;
    min-width: 18em;
    margin: auto;
    border-radius: 4px;
    padding: 1em;
    cursor: pointer;

`;

const ListName = styled.p`
    text-align: left;
    font-weight: bolder;
    margin: auto;
`;

const ListItem = styled.div`
    background-color: snow;
    height: 2em;
    border-radius: 4px;
    margin: 0.5em auto;
    box-shadow: gray 1px 1px;
`;

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <StyledList>
                <ListName>{this.props.name}</ListName>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </StyledList>
        );
    }
}

 export default List;