import React, { Component } from 'react';
import logo from './logo.svg';
import './MukkitList.css';

const DEFAULT_INITIALIZE_FOOD_LIST = ['치킨', '탕수육', '닭도리탕'];

class MukkitList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: [...DEFAULT_INITIALIZE_FOOD_LIST],
      newFood: ''
    };
  }

  componentDidMount() {
    this.focusFood();
  }

  focusFood() {
    this.refs.input.focus();
  }

  changeFood(event) {
    this.setState({ 'newFood': event.target.value });
  }

  enterFood(event) {
    if (event.key === 'Enter') {
      this.addFood();
    }
  }

  addFood(event) {
    if (this.state.foodList.indexOf(this.state.newFood) === -1) {
      this.setState({
        foodList: [...this.state.foodList, this.state.newFood],
        newFood: ''
      });
      this.focusFood();
    } else {
      alert('해당 음식은 이미 있습니다.');
    }
  }

  render() {
    return (
      <div className="container">
        <header className="mukkit-list-header">
          <img src={logo} className="mukkit-list-logo" alt="logo" />
          <h2 className="mukkit-list-title">먹킷리스트</h2>
        </header>
        <ul className="mukkit-list">
          {this.state.foodList.map((food, index) => (
            <li key={index}>
              <span>{food}</span>
            </li>
          ))}
          <li>
            <input type="text"
              ref="input"
              value={this.state.newFood}
              onChange={this.changeFood.bind(this)}
              onKeyPress={this.enterFood.bind(this)} />
            <button onClick={this.addFood.bind(this)}>먹킷리스트 추가</button>
          </li>
        </ul >
      </div >
    );
  }
}

export default MukkitList;
