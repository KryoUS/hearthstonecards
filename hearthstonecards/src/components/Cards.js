import React, { Component } from 'react';
import './Cards.css';

export default class Cards extends Component {
    render(){
        const { card, cardRemove } = this.props
        return (
            <div className="card">
                <img src={card.img} className="card" alt={card.cardId} />
                <button className="card_remove" value={card.cardId} onClick={ (e) => cardRemove(e.target.value) }>Remove Card</button>
            </div>
        )
    }
}