import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../../components';

describe ('<Footer />', () => {
    it('renders the <Footer /> with populated data', () => {
        const { container, getByText } = render (
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
        )
    });
});