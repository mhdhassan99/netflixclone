import React from 'react';
import { Inner } from './styles/jumbotron';

const Jumbotron = ({children, direction = 'row', ...restProps }) => {
    return(
        <Inner direction={direction}>
            <p>I am Jumbo</p>
        </Inner>
    )
}

export default Jumbotron;
