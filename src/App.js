import React, { Component } from 'react';
import './App.css';
import Card from './component/card/card';
import List from './component/list/list';

class App extends Component {

  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { title: 'First card', content: 'lorem ipsum' },
      'b': { title: 'Second card', content: 'lorem ipsum' },
      'c': { title: 'Third card', content: 'lorem ipsum' },
      'd': { title: 'Fourth card', content: 'lorem ipsum' },
      'e': { title: 'Fifth card', content: 'lorem ipsum' },
      'f': { title: 'Sixth card', content: 'lorem ipsum' },
      'g': { title: 'Seventh card', content: 'lorem ipsum' },
      'h': { title: 'Eighth card', content: 'lorem ipsum' },
      'i': { title: 'Ninth card', content: 'lorem ipsum' },
      'j': { title: 'Tenth card', content: 'lorem ipsum' },
      'k': { title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { title: 'Twelth card', content: 'lorem ipsum' },
      'm': { title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  }

  handleDeleteCard = (card) => {
    console.log('delete card: ', card)
  }

  handleRandomCard = (cardObject) => {
    console.log('random card generated: ', cardObject)
  }

  render() {

    const lists = this.state.lists.map((list) => (
      <section className="List" key={list.id}>
      <header className="List-header">
        <h2>{list.header}</h2>
      </header>
        <Card allCards={this.state.allCards} cardIds={list.cardIds}></Card>
      </section>
    ));

    return (
      <main className="App">

        {/* <header className="App-header">
          <h1>Trelloyes!</h1>
        </header> */}

        <section className="App-list">
          {/* list stuff goes here */}
          {lists}
        </section>

      </main>
    );
  }
}

export default App;
