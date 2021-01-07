import React, {useState} from 'react';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components'

export default function Signin() {
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';
    const handleSignIn = (e) => {
        e.preventDefault();
    };
    
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input 
                            autoComplete="off"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New To Netflix? <Form.Link to="/signup">Sign Up Now!</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by google reCAPTCHA to ensure you are not a bot. Learn More.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}