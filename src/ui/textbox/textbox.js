import "./textbox.scss";

function Textbox(props) {
  const textboxClass = "textbox " + props.class;
  return (
    <div className={textboxClass}>
      <label className="textbox-title heading-3">{props.label}</label>
      <input
        type="textbox"
        className="textbox-box heading-2"
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

export default Textbox;
