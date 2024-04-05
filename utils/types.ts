import React, { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    btnType?: 'button' | 'submit';
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface UserType {
        email: string;
        name: string | null;
        password: string | null;
        category: string[];
        id: number;
        createdAt: Date;
        verified: boolean;
}

export interface UserContextProps {
    user: UserType,
    setUser: React.Dispatch<React.SetStateAction<UserType>>
}