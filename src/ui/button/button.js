import "./button.scss";

function Button(props) {
  var buttonClass = "button " + props.styles;

  if (props.size) {
    buttonClass = buttonClass + " " + props.size;
  }

  return (
    <a href="/" className="heading-3">
      <div className={buttonClass}>{props.label}</div>
    </a>
  );
}

export default Button;
