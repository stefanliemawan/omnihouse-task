import "./card.scss";
import React from "react";
import CardList from "./card-list/card-list";
import CardDetails from "./card-details/card-details";
import { Desktop, TabletMobile } from "../../responsive";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      listOpen: true,
    };
    this.toggleCard = this.toggleCard.bind(this);
  }

  toggleCard() {
    this.setState({
      listOpen: !this.state.listOpen,
    });
  }

  renderCardList() {
    return (
      <div>
        <Desktop>
          <div className="card desktop">
            <CardList toggleCard={this.toggleCard} />
          </div>
        </Desktop>

        <TabletMobile>
          <div className="card mobile">
            <CardList toggleCard={this.toggleCard} />
          </div>
        </TabletMobile>
      </div>
    );
  }

  renderCardDetails() {
    return (
      <div>
        <Desktop>
          <div className="card desktop">
            <CardDetails toggleCard={this.toggleCard} />
          </div>
        </Desktop>

        <TabletMobile>
          <div className="card mobile">
            <CardDetails toggleCard={this.toggleCard} />
          </div>
        </TabletMobile>
      </div>
    );
  }

  render() {
    if (this.state.listOpen) {
      return this.renderCardList();
    } else {
      return this.renderCardDetails();
    }
  }
}

export default Card;
