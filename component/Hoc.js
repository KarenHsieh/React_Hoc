import React, { Component } from 'react';

const HOC = (WrappedComponent, state) =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = state;
      
    }



    render() {
      return (
        <div>
          <WrappedComponent {...this.props} {...this.state} />
          <span onClick={this.fetchDataHadler}>看更多</span>
        </div>
      );
    }
  };

export default HOC;