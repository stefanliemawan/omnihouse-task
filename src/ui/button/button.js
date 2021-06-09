import "./button.scss";

function Button(props) {
  const buttonClass = "button " + props.styles;
  return (
    <a href="/" className="heading-3">
      <div className={buttonClass}>{props.label}</div>
    </a>
  );
}

export default Button;
