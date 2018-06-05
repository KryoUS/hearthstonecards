import React, { Component } from 'react';
import cardSearch from './Cardsearch';
import './Searchfield.css'

export default class Searchfield extends Component {
    constructor() {
        super();

        this.state = {
            text: ''
        }
    }

    updateSearchText = ( text ) => {
        this.setState({ text })
    }

    executeSearch = () => {
    cardSearch(this.state.text).then(resp => {
        this.props.cardAdd(resp)
        this.setState({ text: '' })
    })
    }

    render() {
        const { text } = this.state

        return (
            <div className="head_container">
                <input className="nav_search" placeholder="Add card by name" value={ text } onChange={ (e) => this.updateSearchText( e.target.value ) }/>
                <button className="nav_button" onClick={ this.executeSearch }>Add Card</button>
            </div>
        )
    }
}