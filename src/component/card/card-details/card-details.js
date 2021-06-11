import "./card-details.scss";
import Icon from "../../../ui/icon/icon";
import bedroomImage from "../../../assets/images/bedroom-large.png";
import mapsImage from "../../../assets/images/google-maps.png";

function CardDetails(props) {
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
  return (
    <div className="card-details">
      <div className="bar">
        <Icon icon="upload" class="upload" />
        <span className="icon-separator"></span>
        <Icon icon="cross" onClick={props.toggleCard} />
      </div>
      <div className="img">
        <div className="logo">
          <Icon icon="img" label="1/5" labelColor="black" />
        </div>
        <div className="arrow">
          <Icon icon="arrowLeft" />
          <Icon icon="arrowRight" />
        </div>
        <img src={bedroomImage} alt="Bedroom"></img>
      </div>
      <div className="ellipsis">
        <Icon icon="ellipsisPurple" />
        <span className="icon-separator"></span>
        <Icon icon="ellipsisBrown" />
        <span className="icon-separator"></span>
        <Icon icon="ellipsisBrown" />
        <span className="icon-separator"></span>
        <Icon icon="ellipsisBrown" />
      </div>
      <div className="title">
        <label className="heading-1">{mockDetail.title}</label>
        <Icon icon="envelope" />
      </div>
      <label className="price-tag">{mockDetail.price}</label>
      <div className="details">
        <div className="count">
          <Icon icon="bed" label={mockDetail.bedroomCount} />
          <span className="separator"></span>
          <Icon icon="couch" label={mockDetail.livingroomCount} />
          <span className="separator"></span>
          <Icon icon="toilet" label={mockDetail.toiletCount} />
        </div>
        <Icon icon="underground" label={mockDetail.location} />
        <label className="paragraph-1">{mockDetail.furnished}</label>
        <label className="paragraph-1">{mockDetail.moveInDate}</label>
      </div>
      <span className="line"></span>
      <img className="maps" src={mapsImage} alt="Google Maps" />
      {mockDetail.description.map((value, index) => (
        <p className="paragraph-1" key={index}>
          {value}
        </p>
      ))}
    </div>
  );
}

export default CardDetails;