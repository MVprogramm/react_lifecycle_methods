import React from 'react';

class Life extends React.Component {
  constructor () {
    super();

    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  render() {
    return null;
  }
}

export default Life;