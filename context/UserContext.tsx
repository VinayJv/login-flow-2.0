'use client';

import { PropsWithChildren, createContext, useContext, useState } from "react";
import { UserContextProps } from "utils/types";

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: PropsWithChildren<{}>) => {
    const [user,setUser] = useState<UserContextProps["user"]>({
        email: "",
        name: "",
        password: "",
        category: [],
        id: 0,
        createdAt: new Date(),
        verified: false,
    });
    const [userStatus, setUserStatus] = useState(false);

    return(
        <UserContext.Provider value={{ user, setUser, userStatus, setUserStatus }}>
            {children}
        </UserContext.Provider>
    ) 
}

export const useUserContext = () => useContext(UserContext);