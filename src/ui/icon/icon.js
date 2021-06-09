import "./icon.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCouch, faEnvelope, faBed } from "@fortawesome/free-solid-svg-icons";
import bedLogo from "../../assets/logo/bed.png";
import couchLogo from "../../assets/logo/couch.png";
import undergroundLogo from "../../assets/logo/underground.png";
import envelopeLogo from "../../assets/logo/envelope.png";

function Icon(props) {
  // const bed = <FontAwesomeIcon icon={faBed} />;
  // const couch = <FontAwesomeIcon icon={faCouch} />;
  // const envelope = <FontAwesomeIcon icon={faEnvelope} />;

  const bed = <img src={bedLogo} alt="Bed Logo" />;
  const couch = <img src={couchLogo} alt="Couch Logo" />;
  const underground = <img src={undergroundLogo} alt="Underground Logo" />;
  const envelope = <img src={envelopeLogo} alt="Envelope Logo" />;

  var icon;

  switch (props.icon) {
    case "bed":
      icon = bed;
      break;
    case "couch":
      icon = couch;
      break;
    case "underground":
      icon = underground;
      break;
    case "envelope":
      icon = envelope;
      break;
    default:
      icon = envelope;
      break;
  }

  return (
    <div className="icon">
      {icon}
      <label className="subtitle-1">{props.label}</label>
    </div>
  );
}

export default Icon;
