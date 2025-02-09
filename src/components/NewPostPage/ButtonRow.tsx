import React from "react";
import { Button } from "@chakra-ui/react";

export interface IButtonRowProps {
    children: React.ReactNode;
    color: string;
    backgroundColor: string;
    border?: string;
    _hover?: object;
    type: "submit" | "reset" | "button";
    onClick?: () => void;
}

const ButtonRow = ({ children, ...rest }: IButtonRowProps) => {
    return (
        <Button
            width="148px"
            height="50px"
            borderRadius="5px"
            fontSize="text4"
            lineHeight="lh28"
            {...rest}
        >
            {children}
        </Button>
    );
};

export default ButtonRow;
