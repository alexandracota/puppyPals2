import React from 'react';
import Header from './Header';
import Search from './Search';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <p></p>
      </div>
    );
  }
}

