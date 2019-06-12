import React from 'react';
import styled from 'styled-components';

const CardContainer = styled`

    width: 4em;
    height: 5vw;
    minWidth: 150px;
    minHeight: 200px;
    
`;

function Card(props) {
    return (
        <CardContainer className="card">
            <div className="card-body">
                <h5 class="card-title">{ props.cardTitle || "Card Title" }</h5>
                <h6 class="card-subtitle mb-2 text-muted">{ props.cardSubTitle || "Card Subtitle" }</h6>
                <p class="card-text">{ props.cardText || "Card Text" }</p>
                {props.children}
            </div>
        </CardContainer>
    )
}

export default Card;