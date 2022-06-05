import React from 'react';

import './index.scss';

import Life from './Life.jsx';

class App extends React.Component {
  state = {
    rendering: true,
    isUpdate: false,
  }

  show = () => {
    this.setState({
      rendering: true,
    })
  }

  hide = () => {
    this.setState({
      rendering: false,
    })
  }

  update = () => {
    this.setState({
      isUpdate: true,
    })
  }

  render() {
    return (
      <div>
        <div className="btns">
          <button className="btn" onClick={this.show}>
            Show
          </button>
          <button className="btn" onClick={this.hide}>
            Hide
          </button>
          <button className="btn" onClick={this.update}>
            Update
          </button>
        </div>
        
        {<Life isUpdate={this.state.isUpdate}/>}
      </div>
    )
  }    
}

export default App;