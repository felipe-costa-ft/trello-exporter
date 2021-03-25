import React from 'react';

import styled from 'styled-components';

import DocumentImage from "images/document.svg"
import SheetImage from "images/sheet.svg"

import Container from 'components/Container';
import Title from 'components/Title';

const FormatWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 2em;
`;

const FormatCard = styled.div`
    background-color: gainsboro;
    border-radius: 4px;
    width: 15em; 
    padding: 1em;
    cursor: pointer;
`;

const FormatImage = styled.img`
    width: 5em;
`;


class FormatSelection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <Title>Para qual formato?</Title>
                <FormatWrapper>
                    <FormatCard>
                        <FormatImage src={SheetImage} />
                        <Title>Planilha</Title>
                    </FormatCard>

                    <FormatCard>
                        <FormatImage src={DocumentImage} />
                        <Title>Documento</Title>
                    </FormatCard>
                </FormatWrapper>
            </Container>
        );
    }

}

export default FormatSelection;