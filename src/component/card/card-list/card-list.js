import bedroomImage from "../../../assets/images/bedroom-small.png";
import Icon from "../../../ui/icon/icon";
import "./card-list.scss";
import { DesktopTablet, Mobile } from "../../../responsive";

function CardList(props) {
  const mockBedroom = [
    {
      title: "3 Bedroom flat in Hackney Bridge",
      price: "£1,420 pcm",
      bedroomCount: 3,
      livingroomCount: 1,
      location: "South Kensington (0.1 mile)",
      moveInDate: "Move-in from 20/04/21",
    },
    {
      title: "3 Bedroom flat in Hackney Bridge",
      price: "£1,420 pcm",
      bedroomCount: 3,
      livingroomCount: 1,
      location: "South Kensington (0.1 mile)",
      moveInDate: "Move-in from 20/04/21",
    },
    {
      title: "3 Bedroom flat in Hackney Bridge",
      price: "£1,420 pcm",
      bedroomCount: 3,
      livingroomCount: 1,
      location: "South Kensington (0.1 mile)",
      moveInDate: "Move-in from 20/04/21",
    },
    {
      title: "3 Bedroom flat in Hackney Bridge",
      price: "£1,420 pcm",
      bedroomCount: 3,
      livingroomCount: 1,
      location: "South Kensington (0.1 mile)",
      moveInDate: "Move-in from 20/04/21",
    },
    {
      title: "3 Bedroom flat in Hackney Bridge",
      price: "£1,420 pcm",
      bedroomCount: 3,
      livingroomCount: 1,
      location: "South Kensington (0.1 mile)",
      moveInDate: "Move-in from 20/04/21",
    },
    {
      title: "3 Bedroom flat in Hackney Bridge",
      price: "£1,420 pcm",
      bedroomCount: 3,
      livingroomCount: 1,
      location: "South Kensington (0.1 mile)",
      moveInDate: "Move-in from 20/04/21",
    },
  ];
  return (
    <div className="card-list">
      <DesktopTablet>
        <label className="heading-1 no-bold">15 Search results</label>
        {mockBedroom.map((value, index) => (
          <div key={index} className="item desktop" onClick={props.toggleCard}>
            <div className="img">
              <div className="img-logo">
                <Icon icon="img" label="1/5" labelColor="black" />
              </div>
              <img src={bedroomImage} alt="Bedroom"></img>
            </div>
            <div className="info desktop">
              <label className="heading-2">{value.title}</label>
              <label className="price-tag">{value.price}</label>
              <div className="count">
                <Icon icon="bed" label={value.bedroomCount} />
                <span className="icon-separator"></span>
                <Icon icon="couch" label={value.livingroomCount} />
              </div>
              <Icon icon="underground" label={value.location} />
              <label className="subtitle-1">{value.moveInDate}</label>
              <div className="envelope">
                <Icon icon="envelope" />
              </div>
            </div>
          </div>
        ))}
      </DesktopTablet>

      <Mobile>
        <label className="heading-1 no-bold">15 Search results</label>
        {mockBedroom.map((value, index) => (
          <div key={index} className="item mobile" onClick={props.toggleCard}>
            <div className="img">
              <div className="img-logo">
                <Icon icon="img" label="1/5" labelColor="black" />
              </div>
              <img src={bedroomImage} alt="Bedroom"></img>
            </div>
            <div className="info mobile">
              <label className="heading-2 margin-bottom">{value.title}</label>
              <label className="price-tag margin-bottom">{value.price}</label>
              <div className="count margin-bottom">
                <Icon icon="bed" label={value.bedroomCount} />
                <span className="icon-separator"></span>
                <Icon icon="couch" label={value.livingroomCount} />
              </div>
              <div className="margin-bottom">
                <Icon icon="underground" label={value.location} />
              </div>
              <label className="subtitle-1">{value.moveInDate}</label>
              <div className="envelope">
                <Icon icon="envelope" />
              </div>
            </div>
          </div>
        ))}
      </Mobile>
    </div>
  );
}

export default CardList;
