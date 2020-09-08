import React from 'react';

function Main({ users, loading, wealth }) {
  const formatMoney = (number) => {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  return (
    <main>
      <h2>
        <strong>Person</strong> Wealth
      </h2>
      {loading && <h1>loading</h1>}
      {users.map((user, i) => (
        <div key={i} className="person">
          <img src={user.picture} alt={user.name} />
          <strong>${user.name}</strong>
          <span className="money">{formatMoney(user.money)}</span>
        </div>
      ))}
      {wealth && (
        <div>
          <h3>
            Total Wealth: <strong>{formatMoney(wealth)}</strong>
          </h3>
        </div>
      )}
    </main>
  );
}

export default Main;
