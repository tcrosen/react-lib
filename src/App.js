import React from 'react';
import { render } from 'react-dom';
import ToggleButton from './ToggleButton';

const App = () => (
  <div>
    <ToggleButton>click me</ToggleButton>
  </div>
);

render(<App />, document.getElementById('app'));
