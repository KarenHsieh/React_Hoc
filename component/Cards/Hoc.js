import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const CardHoc = (WrappedComponent, handleClickBuy) =>
  class extends Component {
    constructor(props) {
      super(props);
      this.handleClick = handleClickBuy;
    }


    render() {
      
      return (
        <div>
          <WrappedComponent {...this.props} {...this.state} />
        </div>
      );
    }
  };

export default CardHoc;