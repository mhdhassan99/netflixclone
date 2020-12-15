import React, {useState} from 'react';
import { Container, Inner } from '../jumbotron/styles/jumbotron';

const Accordion = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}
export default Accordion;

Accordion.Title = function AccordionTitle({ children, ...restProps}) {
    return <Title { ...restProps }>{children}</Title>
}; 

Accordion.Frame = function AccordionFrame({ children, ...restProps}) {
    return <Frame { ...restProps }>{children}</Frame>
}; 

Accordion.Item = function AccordionItem({ children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false)

    return <Item { ...restProps }>{children}</Item>
}; 

Accordion.Header = function AccordionHeader({ children, ...restProps}) {
    return <Header { ...restProps }>{children}</Header>
}; 