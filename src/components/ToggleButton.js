import React from 'react';
import styled from 'styled-components';

const ToggleButton = () => (
    <ToggleContainer>
        <ToggleInput type="checkbox" />
        <ToggleSwitch />
    </ToggleContainer>
);

export default ToggleButton;


const ToggleContainer = styled.label`
  display: inline-block;
  width: 60px;
  height: 34px;
  background-color: #ddd;
  border-radius: 34px;
  position: relative;

  & .toggle-switch {
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 30px;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: left 0.2s;
  }
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + .toggle-switch {
    left: 28px;
  }
`;

const ToggleSwitch = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 30px;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: left 0.2s;
`;
