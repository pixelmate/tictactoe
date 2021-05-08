import React, { Component, Fragment } from 'react';
import '../App.css';

export default class Board extends Component {
  render() {
    return (
      // //   <div className='board'>
      // //     <div onClick={() => this.handleClick(1)} className='square top left'>
      // //       <div ref='block1'></div>
      // //     </div>
      // //     <div onClick={() => this.handleClick(2)} className='square top'>
      // //       <div ref='block2'></div>
      // //     </div>
      // //     <div onClick={() => this.handleClick(3)} className='square top right'>
      // //       <div ref='block3'></div>
      // //     </div>
      // //     <div onClick={() => this.handleClick(4)} className='square left'>
      // //       <div ref='block4'></div>
      // //     </div>
      // //     <div onClick={() => this.handleClick(5)} className='square'>
      // //       <div ref='block5'></div>
      // //     </div>
      // //     <div onClick={() => this.handleClick(6)} className='square right'>
      // //       <div ref='block6'></div>
      // //     </div>
      // //     <div onClick={() => this.handleClick(7)} className='square bottom left'>
      // //       <div ref='block7'></div>
      // //     </div>
      // //     <div onClick={() => this.handleClick(8)} className='square bottom'>
      // //       <div ref='block8'></div>
      // //     </div>
      // //     <div
      // //       onClick={() => this.handleClick(9)}
      // //       className='square bottom right'
      // //     >
      // //       <div ref='block9'></div>

      // //     </div>
      //   </div>
      <Fragment>
        <div className='board'>
          <div className='square top-left'></div>
          <div className='square top'></div>
          <div className='square top-right'></div>
          <div className='square middle-left'></div>
          <div className='square middle'></div>
          <div className='square middle-right'></div>
          <div className='square bottom-left'></div>
          <div className='square bottom'></div>
          <div className='square bottom-right'></div>
        </div>
      </Fragment>
    );
  }
}
