import React from 'react';
import { render } from 'react-dom';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import ToggleButton from './ToggleButton';
import styled from 'styled-components';

const App = () => (
  <div>
    <Segment>
      <Button>Hi I'm a button</Button>
    </Segment>
    <Segment>
      <ButtonGroup>
        <Button>Prev</Button>
        <Button>Next</Button>
      </ButtonGroup>
    </Segment>
    <Segment>
      <ToggleButton>Click me to toggle</ToggleButton>
    </Segment>
  </div>
);

const Segment = styled.div`
  padding: 30px;
`;

render(<App />, document.getElementById('app'));
