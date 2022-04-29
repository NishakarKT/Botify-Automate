import { useState, useEffect, useContext } from 'react';
import FirebaseContext from "../contexts/Firebase";

function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("botify-auth")));
    const { firebase } = useContext(FirebaseContext);
    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged(authUser => {
            if (authUser)
                localStorage.setItem("botify-auth", JSON.stringify(authUser));
            else {
                localStorage.removeItem("botify-auth");
                setUser(null);
            }
        });
        return () => listener();
    }, [firebase]);
    return { user };
};

export default useAuthListener;
