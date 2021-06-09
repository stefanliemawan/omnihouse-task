import Textbox from "../../ui/textbox/textbox";
import Dropdown from "../../ui/dropdown/dropdown";
import "./sidenav.scss";
import Button from "../../ui/button/button";

const minbed = ["No min", "No min", "No min"];
const maxbed = ["No max", "No max", "No max"];
const priceper = ["Month", "Month", "Month"];
const minprice = ["No min", "No min", "No min"];
const maxprice = ["No max", "No max", "No max"];

function Sidenav() {
  return (
    <div className="sidenav">
      <div className="title">
        <label className="heading-1">Find a rental property</label>
      </div>
      <div className="item">
        <Textbox label="Search Area" placeholder="eg. Oxford or NW3" />
      </div>
      <div className="item split">
        <Dropdown label="Minimum beds" values={minbed} />
        <Dropdown label="Maximum beds" values={maxbed} />
      </div>
      <div className="item">
        <Dropdown label="Price per" values={priceper} />
      </div>
      <div className="item split">
        <Dropdown label="Minimum price" values={minprice} />
        <Dropdown label="Maximum price" values={maxprice} />
      </div>
      <div className="item">
        <Button styles="red" label="FIND PROPERTIES" />
      </div>
    </div>
  );
}

export default Sidenav;
