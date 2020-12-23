import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently asked questions</Accordion.Title>
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item />

            <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button> Try it Now </OptForm.Button>
                <OptForm.Text> 
                    Ready to watch? Enter Your Email to create or restart your membership  
                </OptForm.Text>
            </OptForm>
        </Accordion>
    );
};