import React from 'react';
import { Footer } from '../components'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Contact us.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link herf="#">FAQ</Footer.Link>
                    <Footer.Link herf="#">Investor Relations</Footer.Link>
                    <Footer.Link herf="#">Ways to watch</Footer.Link>
                    <Footer.Link herf="#">Corporate Information</Footer.Link>
                    <Footer.Link herf="#">Netflix Originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link herf="#">Help center</Footer.Link>
                    <Footer.Link herf="#">Terms of use</Footer.Link>
                    <Footer.Link herf="#">Jobs</Footer.Link>
                    <Footer.Link herf="#">Contact us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link herf="#">Account</Footer.Link>
                    <Footer.Link herf="#">Redeem Gift Cards</Footer.Link>
                    <Footer.Link herf="#">Privacy</Footer.Link>
                    <Footer.Link herf="#">Speed Test</Footer.Link>
                </Footer.Column>

                 <Footer.Column>
                    <Footer.Link herf="#">Media Center</Footer.Link>
                    <Footer.Link herf="#">Buy Gift Cards</Footer.Link>
                    <Footer.Link herf="#">Cookies Preferences</Footer.Link>
                    <Footer.Link herf="#">Legal Notice</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break/>
            <Footer.Text>Netflix United States</Footer.Text>
        </Footer>
    );
}


