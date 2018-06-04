import React, { Component } from 'react';
import logo from './logo.png';
import axios from 'axios';
import './App.css';

import { key } from './config.json'
import Cards from './components/Cards';
import Searchfield from './components/Searchfield';

const expressAPI = `http://localhost:3030/api/cards`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      displayCards: [],
      text: ''
    };
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: expressAPI
    }).then(response => {
      this.setState({ cards: response.data })
      this.cardFetch({ cards: response.data})
    }).catch(error => {
      console.error(error)
    })
  }

  cardFetch = (cardArray) => {
    for (let i=0;i<cardArray.cards.length;i++) {
      axios.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/${cardArray.cards[i]}`, {headers: {'X-Mashape-Key': apiKey}})
      .then(response => {
        this.state.displayCards.push(response.data[response.data.length-1])
        this.setState(this.state.displayCards)
      }).catch(error => {
        console.log(error)
      })
    }
  }

  cardAdd = (data) => {
    this.state.displayCards.push(data)
    this.setState(this.state.displayCards)
  }

  cardRemove = (id) => {
    this.state.displayCards = this.state.displayCards.filter( key => {
      return key.cardId !== id
    })
    this.setState(this.state.displayCards)
  }

  render() {
    const { displayCards } = this.state

    return (
      <div className="App">
        <div className="head_container">
          <img src={logo} className="App-logo" alt="logo" />
          <Searchfield cardAdd={this.cardAdd} />
        </div>
        <div className="card_container">
          {
            displayCards.map(card => (
              <Cards key={ card.cardId }
                card={ card }
                cardRemove={ this.cardRemove } />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;