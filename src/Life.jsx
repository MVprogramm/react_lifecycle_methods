import React from 'react';

class Life extends React.Component {
  constructor () {
    super();

    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');

    return true;
  }

  render() {
    return null;
  }
}

export default Life;