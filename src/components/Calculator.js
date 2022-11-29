import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, calcState] = useState({ total: 0, next: null, operation: null });

  const valbutton = (e) => {
    calcState((state) => calculate(state, e.target.textContent));
  };

  const { total, next, operation } = state;

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
            <button type="button" className="btnGray" onClick={valbutton}>AC</button>
            <button type="button" className="btnGray" onClick={valbutton}>7</button>
            <button type="button" className="btnGray" onClick={valbutton}>4</button>
            <button type="button" className="btnGray" onClick={valbutton}>1</button>
          </div>
          <div className="verticalBtn">
            <button type="button" className="btnGray" onClick={valbutton}>+/-</button>
            <button type="button" className="btnGray" onClick={valbutton}>8</button>
            <button type="button" className="btnGray" onClick={valbutton}>5</button>
            <button type="button" className="btnGray" onClick={valbutton}>2</button>
          </div>
          <div className="verticalBtn">
            <button type="button" className="btnGray" onClick={valbutton}>%</button>
            <button type="button" className="btnGray" onClick={valbutton}>9</button>
            <button type="button" className="btnGray" onClick={valbutton}>6</button>
            <button type="button" className="btnGray" onClick={valbutton}>3</button>
          </div>
          <div className="verticalBtn">
            <button type="button" className="btnOrange" onClick={valbutton}>÷</button>
            <button type="button" className="btnOrange" onClick={valbutton}>x</button>
            <button type="button" className="btnOrange" onClick={valbutton}>-</button>
            <button type="button" className="btnOrange" onClick={valbutton}>+</button>
          </div>
        </div>
        <div className="lastRow">
          <button type="button" className="btnGray zero" onClick={valbutton}>0</button>
          <button type="button" className="btnGray" onClick={valbutton}>.</button>
          <button type="button" className="btnOrange" onClick={valbutton}>=</button>
        </div>
      </div>
    </div>
  );
}
