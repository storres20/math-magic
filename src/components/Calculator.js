import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calcContainer">
        <div className="calc">
          <span className="output">0</span>
          <div className="horizontalBtn">
            <div className="verticalBtn">
              <button type="button" className="btnGray">AC</button>
              <button type="button" className="btnGray">7</button>
              <button type="button" className="btnGray">4</button>
              <button type="button" className="btnGray">1</button>
            </div>
            <div className="verticalBtn">
              <button type="button" className="btnGray">+/-</button>
              <button type="button" className="btnGray">8</button>
              <button type="button" className="btnGray">5</button>
              <button type="button" className="btnGray">2</button>
            </div>
            <div className="verticalBtn">
              <button type="button" className="btnGray">%</button>
              <button type="button" className="btnGray">9</button>
              <button type="button" className="btnGray">6</button>
              <button type="button" className="btnGray">3</button>
            </div>
            <div className="verticalBtn">
              <button type="button" className="btnOrange">÷</button>
              <button type="button" className="btnOrange">*</button>
              <button type="button" className="btnOrange">-</button>
              <button type="button" className="btnOrange">+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
