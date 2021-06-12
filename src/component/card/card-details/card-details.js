import "./card-details.scss";
import Icon from "../../../ui/icon/icon";
import mapsImage from "../../../assets/images/google-maps.png";
import { DesktopTablet, Mobile } from "../../../responsive";
import Image from "../../../ui/image/image";
import { useMediaQuery } from "react-responsive";

const mockDetail = {
  title: "3 Bedroom flat in Hackney Bridge",
  price: "£1,420 pcm",
  bedroomCount: 3,
  livingroomCount: 1,
  toiletCount: 2,
  location: "South Kensington (0.1 mile)",
  furnished: "Furnished",
  moveInDate: "Move-in from 20/04/21",
  description: [
    "Situated on the 12th floor of the Crawford Building this modern one bedroom flat is available to rent end of June. Early viewings are highly recommended.",
    "This modern apartment features an open plan kitchen/ living area, a large bathroom and a double sized bedroom with fitted wardrobe. Other benefits include, floor to ceiling windows and a 24 hour concierge service.",
    "The Crawford building itself has it's own entrance to Aldgate East Underground station which makes it ideal for transport links.",
  ],
};

function CardDetails(props) {
  var containerClass;
  if (useMediaQuery({ minWidth: 992 })) {
    containerClass = "card-details desktop";
  } else {
    containerClass = "card-details mobile";
  }
  return (
    <div className={containerClass}>
      <DesktopTablet>
        <div className="bar">
          <Icon icon="upload" class="upload" />
          <span className="icon-separator"></span>
          <Icon icon="cross" onClick={props.toggleCard} />
        </div>
        <Image />
        <div className="info">
          <div className="title desktop">
            <label className="heading-1">{mockDetail.title}</label>
            <Icon icon="envelope" />
          </div>
          <label className="price-tag">{mockDetail.price}</label>
          <div className="details desktop">
            <div className="count">
              <Icon icon="bed" label={mockDetail.bedroomCount} />
              <span className="separator"></span>
              <Icon icon="couch" label={mockDetail.livingroomCount} />
              <span className="separator"></span>
              <Icon icon="toilet" label={mockDetail.toiletCount} />
            </div>
            <Icon icon="underground" label={mockDetail.location} />
            <label className="subtitle-1">{mockDetail.furnished}</label>
            <label className="subtitle-1">{mockDetail.moveInDate}</label>
          </div>
        </div>
        <span className="line"></span>
        <img className="maps" src={mapsImage} alt="Google Maps" />
        {mockDetail.description.map((value, index) => (
          <p className="paragraph-1" key={index}>
            {value}
          </p>
        ))}
      </DesktopTablet>
      <Mobile>
        <div className="bar">
          <Icon icon="upload" class="upload" size="small" />
          <span className="icon-separator"></span>
          <Icon icon="cross" onClick={props.toggleCard} size="small" />
        </div>
        <Image />
        <div className="info">
          <div className="title mobile">
            <label className="heading-1">{mockDetail.title}</label>
            <Icon icon="envelope" />
          </div>
          <label className="price-tag">{mockDetail.price}</label>
          <div className="details mobile">
            <div className="count margin-bottom">
              <Icon icon="bed" label={mockDetail.bedroomCount} />
              <span className="separator"></span>
              <Icon icon="couch" label={mockDetail.livingroomCount} />
              <span className="separator"></span>
              <Icon icon="toilet" label={mockDetail.toiletCount} />
            </div>
            <div className="margin-bottom">
              <Icon icon="underground" label={mockDetail.location} />
            </div>
            <label className="subtitle-1 margin-bottom">
              {mockDetail.furnished}
            </label>
            <label className="subtitle-1 margin-bottom">
              {mockDetail.moveInDate}
            </label>
          </div>
        </div>
        <span className="line"></span>
        <img className="maps" src={mapsImage} alt="Google Maps" />
        {mockDetail.description.map((value, index) => (
          <p className="paragraph-1" key={index}>
            {value}
          </p>
        ))}
      </Mobile>
    </div>
  );
}

export default CardDetails;
