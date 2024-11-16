import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  color: ${({ primary }) => (primary ? 'white' : '#333')};
  background-color: ${({ primary }) => (primary ? '#1E90FF' : '#f0f0f0')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ primary }) => (primary ? '#1C86EE' : '#e0e0e0')};
  }
`;

const Button: React.FC<ButtonProps> = ({ children, onClick, primary }) => {
  return (
    <StyledButton onClick={onClick} primary={primary}>
      {children}
    </StyledButton>
  );
};

export default Button;
