import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/User";
import { getUserByUserId } from "../services/Firebase";

const useUser = () => {
    const [activeUser, setActiveUser] = useState({});
    const { user } = useContext(UserContext);
    useEffect(() => {
        const getUserDataByUserId = async () => {
            const res = await getUserByUserId(user.uid);
            setActiveUser(res);
        }
        if (user?.uid)
            getUserDataByUserId()
    }, [user]);
    return { userData: activeUser };
};

export default useUser;