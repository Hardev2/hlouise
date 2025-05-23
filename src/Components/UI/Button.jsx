import React from 'react';
import styled from 'styled-components';

const Button = ({ title }) => {
  return (
    <StyledWrapper>
      <button>{title}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    --color: #c7dc5a;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 2.4em;
    line-height: 2.5em;
    margin: 20px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color 0.5s;
    z-index: 1;
    font-size: 15px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--color);
    padding: 0 1.5rem;
  }

  button:before {
    content: '';
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }

  button:hover {
    color: black;
  }

  button:before {
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }

  button:hover:before {
    top: -30px;
    left: -30px;
  }

  button:active:before {
    background: #3a0ca3;
    transition: background 0s;
  }
`;

export default Button;
