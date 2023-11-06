import React, {ComponentProps} from "react";
import s from "./button.module.css";
import {Typography} from "../typography";

type ButtonPropsType = {
    title: string;
    variant?: "primary" | "secondary"

} & ComponentProps<"button">
export const Button = ({title, variant = "primary", ...restProps}: ButtonPropsType) => {
    return <button className={`${s.button} ${s[variant]}`} {...restProps}><Typography>{title}</Typography></button>;
};
