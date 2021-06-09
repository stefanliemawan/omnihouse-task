import "./card.scss";
import bedroomImage from "../../assets/images/bedroom.png";
import Icon from "../../ui/icon/icon";

function Card() {
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
  ];

  // add scrollbar
  return (
    <div className="card">
      <label className="heading-1 no-bold">15 Search results</label>
      {mockBedroom.map((value, index) => (
        <div key={index} className="item">
          <img className="img" src={bedroomImage} alt="Bedroom"></img>
          <div className="info">
            <label className="heading-2">{value.title}</label>
            <label className="price-tag">{value.price}</label>
            <div className="count">
              <Icon icon="bed" label={value.bedroomCount} />
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
    </div>
  );
}

export default Card;
