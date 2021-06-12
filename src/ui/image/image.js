import Icon from "../icon/icon";
import bedroomImage from "../../assets/images/bedroom-large.png";
import "./image.scss";
import React from "react";
import { DesktopTablet, Mobile } from "../../responsive";

const mockImages = [
  bedroomImage,
  bedroomImage,
  bedroomImage,
  bedroomImage,
  bedroomImage,
];

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      activeImage: 1,
    };
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  previousImage() {
    this.setState({
      activeImage: this.state.activeImage - 1,
    });
  }

  nextImage() {
    this.setState({
      activeImage: this.state.activeImage + 1,
    });
  }

  render() {
    return (
      <div className="image">
        <div className="logo">
          <DesktopTablet>
            <Icon
              icon="img"
              label={this.state.activeImage + "/" + mockImages.length}
              labelColor="black"
            />
          </DesktopTablet>
          <Mobile>
            <Icon
              icon="img"
              label={this.state.activeImage + "/" + mockImages.length}
              labelColor="black"
              size="small"
            />
          </Mobile>
        </div>
        <div className="arrow">
          {this.state.activeImage > 1 && (
            <div className="arrow-left">
              <DesktopTablet>
                <Icon icon="arrowLeft" onClick={this.previousImage} />
              </DesktopTablet>
              <Mobile>
                <Icon
                  icon="arrowLeft"
                  onClick={this.previousImage}
                  size="small"
                />
              </Mobile>
            </div>
          )}
          {this.state.activeImage < mockImages.length && (
            <div className="arrow-right">
              <DesktopTablet>
                <Icon icon="arrowRight" onClick={this.nextImage} />
              </DesktopTablet>
              <Mobile>
                <Icon icon="arrowRight" onClick={this.nextImage} size="small" />
              </Mobile>
            </div>
          )}
        </div>
        <img src={bedroomImage} alt="Bedroom"></img>
        <div className="ellipsis">
          {mockImages.map((value, index) => {
            if (index + 1 === this.state.activeImage) {
              return (
                <div key={index} className="icon-separator">
                  <Icon icon="ellipsisPurple" size="tiny" />
                </div>
              );
            } else {
              return (
                <div key={index} className="icon-separator">
                  <Icon icon="ellipsisBrown" size="tiny" />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Image;
