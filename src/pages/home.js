import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited flims, TV programmes and more</Feature.Title>
                    <Feature.SubTitle>Watch anymore. Cancel at anytime.</Feature.SubTitle>

                </Feature>

                <OptForm>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button> Try it Now </OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text> 
                        Ready to watch? Enter Your Email to create or restart your membership  
                    </OptForm.Text>
                </OptForm>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
            
        </>
    )
};