import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ButtonGroup = styled.div`
  display: flex;

  > ${Button} {
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default ButtonGroup;
