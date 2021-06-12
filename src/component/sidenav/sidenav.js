import Textbox from "../../ui/textbox/textbox";
import Dropdown from "../../ui/dropdown/dropdown";
import "./sidenav.scss";
import Button from "../../ui/button/button";
import { Desktop, TabletMobile, Tablet, Mobile } from "../../responsive";
import Icon from "../../ui/icon/icon";
import React from "react";

const minbed = ["No min", "No min", "No min"];
const maxbed = ["No max", "No max", "No max"];
const priceper = ["Month", "Month", "Month"];
const minprice = ["No min", "No min", "No min"];
const maxprice = ["No max", "No max", "No max"];

class Sidenav extends React.Component {
  constructor() {
    super();
    this.state = {
      sidenavOpen: false,
    };
    this.toggleSidenav = this.toggleSidenav.bind(this);
  }

  toggleSidenav() {
    this.setState({
      sidenavOpen: !this.state.sidenavOpen,
    });
  }

  render() {
    return (
      <div>
        <Desktop>
          <div className="sidenav-desktop">
            <div className="title">
              <label className="heading-1">Find a rental property</label>
            </div>
            <div className="item">
              <Textbox label="Search Area" placeholder="eg. Oxford or NW3" />
            </div>
            <div className="item split">
              <Dropdown
                label="Minimum beds"
                values={minbed}
                class="margin-right"
              />
              <Dropdown label="Maximum beds" values={maxbed} />
            </div>
            <div className="item">
              <Dropdown label="Price per" values={priceper} />
            </div>
            <div className="item split">
              <Dropdown
                label="Minimum price"
                values={minprice}
                class="margin-right"
              />
              <Dropdown label="Maximum price" values={maxprice} />
            </div>
            <div className="item">
              <Button styles="red" label="FIND PROPERTIES" />
            </div>
          </div>
        </Desktop>

        <TabletMobile>
          {!this.state.sidenavOpen && (
            <div className="hamburger" onClick={this.toggleSidenav}>
              <Icon icon="bars" />
            </div>
          )}
          {this.state.sidenavOpen && (
            <div className="sidenav-mobile">
              <div className="title">
                <label className="heading-1">Find a rental property</label>
                <Mobile>
                  <Icon
                    icon="cross"
                    size="small"
                    onClick={this.toggleSidenav}
                  />
                </Mobile>
                <Tablet>
                  <Icon
                    icon="cross"
                    size="normal"
                    onClick={this.toggleSidenav}
                  />
                </Tablet>
              </div>
              <div className="item">
                <Textbox label="Search Area" placeholder="eg. Oxford or NW3" />
              </div>
              <div className="item split">
                <Dropdown
                  label="Minimum beds"
                  values={minbed}
                  class="margin-right"
                />
                <Dropdown label="Maximum beds" values={maxbed} />
              </div>
              <div className="item">
                <Dropdown label="Price per" values={priceper} />
              </div>
              <div className="item split">
                <Dropdown
                  label="Minimum price"
                  values={minprice}
                  class="margin-right"
                />
                <Dropdown label="Maximum price" values={maxprice} />
              </div>
              <div className="item">
                <Button styles="red" label="FIND PROPERTIES" />
              </div>
            </div>
          )}
        </TabletMobile>
      </div>
    );
  }
}

export default Sidenav;
