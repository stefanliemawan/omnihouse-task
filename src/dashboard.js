import Card from "./component/card/card";
import "./dashboard.scss";
import Sidenav from "./component/sidenav/sidenav";
import Button from "./ui/button/button";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="side">
        <Sidenav />
      </div>
      <div className="body">
        <div className="header">
          <Button styles="purple" label="Login" />
          <Button styles="transparent" label="Sign up" />
        </div>
        <div className="main">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
