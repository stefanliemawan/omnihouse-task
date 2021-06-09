import Textbox from "../ui/textbox/textbox";
import Dropdown from "../ui/dropdown/dropdown";
import "./sidenav.scss";

const minbed = ["No min", "No min", "No min"];
const maxbed = ["No max", "No max", "No max"];
const priceper = ["Month", "Month", "Month"];
const minprice = ["No min", "No min", "No min"];
const maxprice = ["No max", "No max", "No max"];

function Sidenav() {
  return (
    <div className="sidenav-container">
      <div className="item">
        <label className="heading-1">Find a rental property</label>
      </div>
      <div className="item">
        <Textbox label="Search Area" placeholder="eg. Oxford or NW3" />
      </div>
      <div className="item split">
        <div className="subitem left">
          <Dropdown label="Minimum beds" values={maxbed} />
        </div>
        <div className="subitem">
          <Dropdown label="Maximum beds" values={maxbed} />
        </div>
      </div>
      <div className="item">
        <Dropdown label="Price per" values={priceper} />
      </div>
      <div className="item split">
        <div className="subitem left">
          <Dropdown label="Minimum price" values={minprice} />
        </div>
        <div className="subitem">
          <Dropdown label="Maximum price" values={maxprice} />
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
