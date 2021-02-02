import React, { useState, useContext, createContext } from 'react';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    return (
        <FeatureContext.Provider
            value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
        >
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
};

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}