import "./icon.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
  var icon;
  var iconClass = "icon-img";
  var labelClass = "label subtitle-1 " + props.class;

  switch (props.labelColor) {
    default:
      labelClass = labelClass + "";
      break;
    case "black":
      labelClass = labelClass + " black";
      break;
  }

  if (props.size) {
    iconClass = iconClass + " " + props.size;
  }

  const bars = (
    <FontAwesomeIcon icon={faBars} className={iconClass} size="2x" />
  );

  const bed = <img src={bedLogo} className={iconClass} alt="Bed Logo" />;
  const couch = <img src={couchLogo} className={iconClass} alt="Couch Logo" />;
  const underground = (
    <img src={undergroundLogo} className={iconClass} alt="Underground Logo" />
  );
  const envelope = (
    <img src={envelopeLogo} className={iconClass} alt="Envelope Logo" />
  );
  const img = <img src={imgLogo} className={iconClass} alt="Img Logo" />;
  const upload = (
    <img src={uploadLogo} className={iconClass} alt="Upload Logo" />
  );
  const cross = <img src={crossLogo} className={iconClass} alt="Cross Logo" />;
  const toilet = (
    <img src={toiletLogo} className={iconClass} alt="Toilet Logo" />
  );
  const arrowLeft = (
    <img src={arrowLeftLogo} className={iconClass} alt="Arrow Left Logo" />
  );
  const arrowRight = (
    <img src={arrowRightLogo} className={iconClass} alt="Arrow Right Logo" />
  );
  const ellipsisPurple = (
    <img
      src={ellipsisPurpleLogo}
      className={iconClass}
      alt="Ellipsis Purple Logo"
    />
  );
  const ellipsisBrown = (
    <img
      src={ellipsisBrownLogo}
      className={iconClass}
      alt="Ellipsis Brown Logo"
    />
  );

  switch (props.icon) {
    default:
      icon = envelope;
      break;
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
    case "bars":
      icon = bars;
      break;
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
