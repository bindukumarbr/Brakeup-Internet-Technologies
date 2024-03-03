
import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: JSX.Element,
}

const Button: React.FC<ButtonProps> = ({ children, icon = null, ...props }) => {
    return (

        <button {...props}>
            {icon}
            {children}
        </button>

    );
};

export default Button;

/*
# Button Component

The Button component is a reusable React component for creating buttons with optional icons.

# Props

The Button component accepts the following props:

icon: Optional. JSX.Element representing the icon to be displayed alongside the button text.

All other props are passed down to the underlying button element, such as onClick, className, disabled, etc.
*/