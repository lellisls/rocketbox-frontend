import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg'
import "./styles.css";
/**
 * Main page of the application.
 *
 * @return {Main} Main page
 */
export default class Main extends Component {
  state = {
    newBox: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post('boxes', {
      title: this.state.newBox
    });

    this.props.history.push(`/box/${response.data._id}`);
  }

  handleInputChange = (evt) => {
    this.setState({ newBox: evt.target.value })
  }

  render() {
    return (
        <div id="main-container">
            <form onSubmit={this.handleSubmit} >
                <img src={logo} alt="logo" />
                <input placeholder="Criar um box" value={this.state.newBox} onChange={this.handleInputChange}></input>
                <button type="submit">Criar</button>
            </form>
        </div>
    );
  }
}
