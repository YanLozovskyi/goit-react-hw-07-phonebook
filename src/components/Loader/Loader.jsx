import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

export const Loader = () => (
  <LoaderWrap>
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
      ariaLabel="rotating-lines-loading"
    />
  </LoaderWrap>
);

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
