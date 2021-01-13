import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function userAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    const { firebase } = useContext(FirebaseContext);

    
};
