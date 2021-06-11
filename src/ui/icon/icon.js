import "./icon.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCouch, faEnvelope, faBed } from "@fortawesome/free-solid-svg-icons";
import bedLogo from "../../assets/logo/bed.png";
import couchLogo from "../../assets/logo/couch.png";
import undergroundLogo from "../../assets/logo/underground.png";
import envelopeLogo from "../../assets/logo/envelope.png";
import imgLogo from "../../assets/logo/img.png";
import uploadLogo from "../../assets/logo/upload.png";
import crossLogo from "../../assets/logo/cross.png";
import toiletLogo from "../../assets/logo/toilet.png";
import arrowLeftLogo from "../../assets/logo/arrow-left.png";
import arrowRightLogo from "../../assets/logo/arrow-right.png";
import ellipsisPurpleLogo from "../../assets/logo/ellipsis-purple.png";
import ellipsisBrownLogo from "../../assets/logo/ellipsis-brown.png";

function Icon(props) {
  // const bed = <FontAwesomeIcon icon={faBed} />;
  // const couch = <FontAwesomeIcon icon={faCouch} />;
  // const envelope = <FontAwesomeIcon icon={faEnvelope} />;

  const bed = <img src={bedLogo} alt="Bed Logo" />;
  const couch = <img src={couchLogo} alt="Couch Logo" />;
  const underground = <img src={undergroundLogo} alt="Underground Logo" />;
  const envelope = <img src={envelopeLogo} alt="Envelope Logo" />;
  const img = <img src={imgLogo} alt="Img Logo" />;
  const upload = <img src={uploadLogo} alt="Upload Logo" />;
  const cross = <img src={crossLogo} alt="Cross Logo" />;
  const toilet = <img src={toiletLogo} alt="Toilet Logo" />;
  const arrowLeft = <img src={arrowLeftLogo} alt="Arrow Left Logo" />;
  const arrowRight = <img src={arrowRightLogo} alt="Arrow Right Logo" />;
  const ellipsisPurple = (
    <img src={ellipsisPurpleLogo} alt="Ellipsis Purple Logo" />
  );
  const ellipsisBrown = (
    <img src={ellipsisBrownLogo} alt="Ellipsis Brown Logo" />
  );

  var icon;
  var labelClass;

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
    case "img":
      icon = img;
      break;
    case "upload":
      icon = upload;
      break;
    case "cross":
      icon = cross;
      break;
    case "toilet":
      icon = toilet;
      break;
    case "arrowLeft":
      icon = arrowLeft;
      break;
    case "arrowRight":
      icon = arrowRight;
      break;
    case "ellipsisPurple":
      icon = ellipsisPurple;
      break;
    case "ellipsisBrown":
      icon = ellipsisBrown;
      break;
    default:
      icon = envelope;
      break;
  }

  switch (props.labelColor) {
    default:
      labelClass = "label paragraph-1 " + props.class;
      break;
    case "black":
      labelClass = "label paragraph-1 black " + props.class;
  }
  if (props.label) {
    return (
      <div className="icon" onClick={props.onClick}>
        {icon}
        <label className={labelClass}>{props.label}</label>
      </div>
    );
  } else {
    return (
      <div className="icon" onClick={props.onClick}>
        {icon}
      </div>
    );
  }
}

export default Icon;
