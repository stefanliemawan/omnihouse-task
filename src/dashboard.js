import Card from "./component/card/card";
import "./dashboard.scss";
import Sidenav from "./component/sidenav/sidenav";
import Button from "./ui/button/button";
import { DesktopTablet, Mobile } from "./responsive";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="side">
        <Sidenav />
      </div>
      <div className="body">
        <div className="navbar">
          <DesktopTablet>
            <Button styles="purple" label="Login" />
            <Button styles="transparent" label="Sign up" />
          </DesktopTablet>
          <Mobile>
            <Button styles="purple" label="Login" size="small" />
            <Button styles="transparent" label="Sign up" size="small" />
          </Mobile>
        </div>
        <div className="main">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
