import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as counterActions from '../../redux_modules/counter';

import ReactLogo from 'src/assets/react.svg';

@connect(
  state => ({
    counter: state.counter,
  }),
  counterActions
)
export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.shape({
      count: PropTypes.number,
      isLoading: PropTypes.bool,
    }).isRequired,
    decrementCounter: PropTypes.func.isRequired,
    delayedIncrementCounter: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <Image src={ReactLogo} alt="React Logo" />
        <h1>Hello React! ({this.props.counter.count})</h1>
        <Button
          onClick={() => this.props.decrementCounter()}
          disabled={this.props.counter.isLoading}
        >
          -
        </Button>
        <Button
          onClick={() => this.props.delayedIncrementCounter()}
          disabled={this.props.counter.isLoading}
        >
          +
        </Button>
      </div>
    );
  }
}

const Image = styled.img`
  max-width: 100%;
  width: 10rem;
`;

const Button = styled.button`
  padding: .5rem 1rem;
  background: ${props => props.theme.primary};
  font-size: 1.5rem;
  border-radius: 50%;
  font-weight: bold;
  border: 0;
  cursor: pointer;

  &:not(:first-of-type) {
    margin-left: .5rem;
  }

  &:disabled {
    color: ${props => props.theme.blackTransparent};
  }
`;
