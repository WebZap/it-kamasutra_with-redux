import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Spinner = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.3);
    border-top: 4px solid #333;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spin} 2s ease-in-out infinite;
`;

const Loader = () => {
    return (
        <LoaderWrapper>
            <Spinner />
        </LoaderWrapper>
    );
};

export default Loader;
