import React from 'react';
import styled from 'styled-components';

const BrandedText = styled.span`
    font-family: 'Faster One', arial;
`;

export default (props) => {
    return (
        <BrandedText style={{color: (props.primaryColor || "#fafafa"), fontSize: (props.fontSize || "3rem")}}>
            Play<span style={{color: (props.secondaryColor || "#2274A5")}}>Board</span>
        </BrandedText>
    )
}