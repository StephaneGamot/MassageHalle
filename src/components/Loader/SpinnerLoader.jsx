"use client"

import React from 'react';
import styled from 'styled-components';

const SpinnerLoader = () => {
  return (
    <StyledWrapper>
      <div className="spinner">
        <div className="Spinner" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .spinner {
    background-image: linear-gradient(#acb6e5 35%, #86fde8);
    width: 100px;
    height: 100px;
    animation: spinning21 1.7s linear infinite;
    text-align: center;
    border-radius: 50px;
    filter: blur(1px);
    box-shadow: 0px -5px 20px 0px rgb(186, 66, 255),
          0px 5px 20px 0px rgb(0, 225, 255);
  }

  .Spinner {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    filter: blur(10px);
  }

  @keyframes spinning21 {
    to {
      transform: rotate(360deg);
    }
  }`;

export default SpinnerLoader;
