import React, {useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (e) => {
        e.preventDefault();

    };

    return (
        <HeaderContainer>
            <Form>
                <Form.Title>Sign up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input
                        placeholder="First name"
                        value={firstName}
                        onChange={({ target }) => setFirstName(target.value)}
                    />
                    <Form.Input 
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                        placeholder="Password"
                        type="password"
                        value={password}
                        autoComplete="off"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign Up
                    </Form.Submit>
                </Form.Base>

            </Form>
        </HeaderContainer>
    )
}