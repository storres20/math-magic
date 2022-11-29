import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
    this.valbutton = this.valbutton.bind(this);
  }

  valbutton(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calcContainer">
        <div className="calc">
          <span className="output">
            {total}
            {operation}
            {next}
          </span>
          <div className="horizontalBtn">
            <div className="verticalBtn">
              <button type="button" className="btnGray" onClick={this.valbutton}>AC</button>
              <button type="button" className="btnGray" onClick={this.valbutton}>7</button>
              <button type="button" className="btnGray" onClick={this.valbutton}>4</button>
              <button type="button" className="btnGray" onClick={this.valbutton}>1</button>
            </div>
            <div className="verticalBtn">
              <button type="button" className="btnGray" onClick={this.valbutton}>+/-</button>
              <button type="button" className="btnGray" onClick={this.valbutton}>8</button>
              <button type="button" className="btnGray" onClick={this.valbutton}>5</button>
              <button type="button" className="btnGray" onClick={this.valbutton}>2</button>
            </div>
            <div className="verticalBtn">
              <button type="button" className="btnGray" onClick={this.valbutton}>%</button>
              <button type="button" className="btnGray" onClick={this.valbutton}>9</button>
              <button type="button" className="btnGray" onClick={this.valbutton}>6</button>
              <button type="button" className="btnGray" onClick={this.valbutton}>3</button>
            </div>
            <div className="verticalBtn">
              <button type="button" className="btnOrange" onClick={this.valbutton}>÷</button>
              <button type="button" className="btnOrange" onClick={this.valbutton}>*</button>
              <button type="button" className="btnOrange" onClick={this.valbutton}>-</button>
              <button type="button" className="btnOrange" onClick={this.valbutton}>+</button>
            </div>
          </div>
          <div className="lastRow">
            <button type="button" className="btnGray zero" onClick={this.valbutton}>0</button>
            <button type="button" className="btnGray" onClick={this.valbutton}>.</button>
            <button type="button" className="btnOrange" onClick={this.valbutton}>=</button>
          </div>
        </div>
      </div>
    );
  }
}
