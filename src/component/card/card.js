import "./card.scss";
import React from "react";
import CardList from "./card-list/card-list";
import CardDetails from "./card-details/card-details";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      list: false,
    };
    this.toggleCard = this.toggleCard.bind(this);
  }

  toggleCard() {
    this.setState({
      list: !this.state.list,
    });
  }

  renderCardList() {
    return (
      <div className="card">
        <CardList toggleCard={this.toggleCard} />
      </div>
    );
  }

  renderCardDetails() {
    return (
      <div className="card">
        <CardDetails toggleCard={this.toggleCard} />
      </div>
    );
  }

  render() {
    if (this.state.list) {
      return this.renderCardList();
    } else {
      return this.renderCardDetails();
    }
  }
}

export default Card;
