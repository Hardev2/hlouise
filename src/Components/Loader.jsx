import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <div className='bg-bg-color'>
      <StyledWrapper>
        <span className='loader' />
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: black; /* Set background to black */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  .loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;
  }

  .loader:before,
  .loader:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    animation: pulsOut 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75));
  }

  .loader:before {
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 1rem #fff;
    animation-name: pulsIn;
  }

  .loader:after {
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    box-shadow: 0 0 0 0 #fff;
  }

  @keyframes pulsIn {
    0% {
      box-shadow: inset 0 0 0 1rem #fff;
      opacity: 1;
    }
    50%,
    100% {
      box-shadow: inset 0 0 0 0 #fff;
      opacity: 0;
    }
  }

  @keyframes pulsOut {
    0%,
    50% {
      box-shadow: 0 0 0 0 #fff;
      opacity: 0;
    }
    100% {
      box-shadow: 0 0 0 1rem #fff;
      opacity: 1;
    }
  }
`;

export default Loader;
