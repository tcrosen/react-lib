import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultButton from './Button';
import styled from 'styled-components';

const Button = styled(DefaultButton)`
  background-color: ${props => (props.isToggled ? '#333' : '#fff')};
  color: ${props => (props.isToggled ? '#fff' : '#333')};
`;

class ToggleButton extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  state = { isToggled: false };

  toggle = () => {
    this.setState({
      isToggled: !this.state.isToggled
    });
  };

  render() {
    const { isToggled } = this.state;
    const { children } = this.props;
    return (
      <Button isToggled={isToggled} onClick={this.toggle}>
        {children}
      </Button>
    );
  }
}

export default ToggleButton;
