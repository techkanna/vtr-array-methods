import React, { useState, useEffect } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Main from './components/Main';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wealth, setWealth] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('https://randomuser.me/api/?results=3');
      const resData = await res.json();
      setLoading(false);
      resData.results.forEach((user) => {
        const newUser = {
          name: `${user.name.first} ${user.name.last}`,
          money: Math.floor(Math.random() * 1000000),
          picture: user.picture.thumbnail,
        };
        setData((d) => [...d, newUser]);
      });
    };
    getUsers();
  }, []);

  const doubleMoney = () => {
    setData((data) => {
      return data.map((user) => {
        return { ...user, money: user.money * 2 };
      });
    });
  };

  const addNewUser = () => {
    const getNewUser = async () => {
      const res = await fetch('https://randomuser.me/api/');
      const resData = await res.json();
      const user = resData.results[0];
      const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000),
        picture: user.picture.thumbnail,
      };
      setData((d) => [...d, newUser]);
    };

    getNewUser();
  };

  const showMillionaires = () => {
    setData((data) => [...data.filter((user) => user.money > 1000000)]);
  };

  const sortByRichest = () => {
    setData((data) => [...data.sort((a, b) => b.money - a.money)]);
  };

  const calcWealth = () => {
    setWealth(data.reduce((acc, user) => (acc += user.money), 0));
  };

  return (
    <>
      <h1>Array Methods</h1>

      <div className="container">
        <Buttons
          doubleMoney={doubleMoney}
          addNewUser={addNewUser}
          showMillionaires={showMillionaires}
          sortByRichest={sortByRichest}
          calcWealth={calcWealth}
        />
        <Main users={data} loading={loading} wealth={wealth} />
      </div>
    </>
  );
}

export default App;
