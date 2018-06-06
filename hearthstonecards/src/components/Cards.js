import React, { Component } from 'react';
import './Cards.css';

export default class Cards extends Component {
    render(){
        const { card, cardRemove } = this.props
        return (
            <div className="card">
                <img src={card.img} className="card" alt={card.cardId} />
                <div className="card_remove" value={card.cardId} onClick={ () => cardRemove(card.cardId) }>Remove Card</div>
            </div>
        )
    }
}