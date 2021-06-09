import "./textbox.scss";

function Textbox(props) {
  return (
    <div className="textbox-container">
      <label className="title heading-3">{props.label}</label>
      <input
        type="textbox"
        className="textbox heading-2"
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

export default Textbox;
