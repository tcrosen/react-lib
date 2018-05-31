import React from 'react';
import { render } from 'react-dom';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import ToggleButton from './ToggleButton';

const App = () => (
  <div>
    <p>
      <Button>Hi I'm a button</Button>
    </p>
    <p>
      <ButtonGroup>
        <Button>Prev</Button>
        <Button>Next</Button>
      </ButtonGroup>
    </p>
    <p>
      <ToggleButton>Click me to toggle</ToggleButton>
    </p>
  </div>
);

render(<App />, document.getElementById('app'));
