import "./dropdown.scss";

function Dropdown(props) {
  return (
    <div className="dropdown">
      <label className="title heading-3">{props.label}</label>
      <select className="select heading-2">
        {props.values.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
