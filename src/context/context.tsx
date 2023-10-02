import React, { ReactNode, createContext, useState } from 'react';

interface ContextProps { }


export interface UserProps {
    name: string;
    email: string
}

export const UserContext = createContext("");

const Context: React.FC<ContextProps> = ({ children }: { children?: ReactNode }) => {


    const [user, setUser] = useState<UserProps | any>({
        name: "John",
        email: "john@gmail.com"
    })


    return (
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
    )
}

export default Context;