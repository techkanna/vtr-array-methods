import React from 'react';

function Buttons(props) {
  const {
    doubleMoney,
    addNewUser,
    showMillionaires,
    sortByRichest,
    calcWealth,
  } = props;
  return (
    <aside>
      <button onClick={addNewUser}>
        Add User
        <span role="img" aria-label="smile face">
          👱‍♂️
        </span>
      </button>
      <button onClick={doubleMoney}>
        Double Money
        <span role="img" aria-label="money">
          💰
        </span>
      </button>
      <button onClick={showMillionaires}>
        Show Only Millionaires
        <span role="img" aria-label="money">
          💵
        </span>
      </button>
      <button onClick={sortByRichest}>
        Sort by Richest
        <span role="img" aria-label="down arrow">
          ↓
        </span>
      </button>
      <button onClick={calcWealth}>
        Calculate entire Wealth
        <span role="img" aria-label="calculate">
          🧮
        </span>
      </button>
    </aside>
  );
}

export default Buttons;
