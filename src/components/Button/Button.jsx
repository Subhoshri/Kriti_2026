import React, { useState, useEffect } from "react";
import "./Button.css";

const Button = ({ text, endIcon, onClick }) => {
    return (
        <button onClick={onClick}>
            <span>{text}</span>
            <span>{endIcon}</span>
        </button>
    );
};
export default Button;
