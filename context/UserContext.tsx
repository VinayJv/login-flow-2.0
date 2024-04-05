'use client';

import { PropsWithChildren, createContext, useState } from "react";
import { UserType } from "utils/types";

const UserContext = createContext({
    user: {},
    setUser: (user: UserType) => {},
});

export const UserProvider = ({ children }: PropsWithChildren<{}>) => {
    const [user,setUser] = useState({});

    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    ) 
}