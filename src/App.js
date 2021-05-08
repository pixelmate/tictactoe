/* eslint-disable no-lone-blocks */
import React from 'react';
import './App.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = [(playerWin = 0), (tieGames = 0), (computerWin = 0)];
  // }

  render() {
    return (
      <div className='App'>
        <div className='game'>
          <p>Tic Tac Toe</p>
          <div className='board'>
            <div
              onClick={() => this.handleClick(1)}
              className='square top left'
            >
              <div ref='block1'></div>
            </div>
            <div onClick={() => this.handleClick(2)} className='square top'>
              <div ref='block2'></div>
            </div>
            <div
              onClick={() => this.handleClick(3)}
              className='square top right'
            >
              <div ref='block3'></div>
            </div>
            <div onClick={() => this.handleClick(4)} className='square left'>
              <div ref='block4'></div>
            </div>
            <div onClick={() => this.handleClick(5)} className='square'>
              <div ref='block5'></div>
            </div>
            <div onClick={() => this.handleClick(6)} className='square right'>
              <div ref='block6'></div>
            </div>
            <div
              onClick={() => this.handleClick(7)}
              className='square bottom left'
            >
              <div ref='block7'></div>
            </div>
            <div onClick={() => this.handleClick(8)} className='square bottom'>
              <div ref='block8'></div>
            </div>
            <div
              onClick={() => this.handleClick(9)}
              className='square bottom right'
            >
              <div ref='block9'></div>
            </div>
          </div>
        </div>
        <div class='scores p1'>
          <p class='player1'>
            <span class='p1'>You</span>
            <span class='p2'>Player 1</span> (<span class='x'></span>)
            <span class='score'>{}</span>
          </p>
          <p class='ties'>
            Tie<span class='score'>{}</span>
          </p>
          <p class='player2'>
            <span class='p1'>Computer</span>
            <span class='p2'>Player 2</span> (<span class='o'></span>)
            <span class='score'>{}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
