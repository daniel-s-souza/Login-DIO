import React from 'react'
import StyledButton from "./styles"
import {IButton} from "./type"

const Button = ({variant = "primary", label, onClick}: IButton) => {
    return (
        <StyledButton variant={variant} onClick={onClick}>
            {label}
        </StyledButton>
    )
}

export default Button