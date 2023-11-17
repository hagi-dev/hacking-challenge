import { createContext, useState, ReactNode } from 'react';
import { userDefaultValues } from '../helpers/defaultValues';
import { Client } from '../types/models/client';


export const UserContext = createContext({
    user: userDefaultValues,
    setUser: (user: Client | ((prevUser: Client) => Client)) => {}
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<Client>(userDefaultValues);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
