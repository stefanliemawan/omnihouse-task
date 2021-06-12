import "./dropdown.scss";

function Dropdown(props) {
  var dropdownClass = "dropdown";
  if (props.class) {
    dropdownClass = "dropdown " + props.class;
  }
  return (
    <div className={dropdownClass}>
      <label className="dropdown-title heading-3">{props.label}</label>
      <select className="dropdown-select heading-2">
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
