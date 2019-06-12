import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 100%;
`;

function Card(props) {
    return (
        <CardContainer className="card">
            <div className="card-body">
                <h5 className="card-title">{ props.cardTitle || "Card Title" }</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ props.cardSubTitle || "Card Subtitle" }</h6>
                <p className="card-text">{ props.cardText || "" }</p>
                {props.children}
            </div>
        </CardContainer>
    )
}

export default Card;