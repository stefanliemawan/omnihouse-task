import Card from "./card/card";
import "./dashboard.scss";
import Sidenav from "./sidenav/sidenav";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="header">
        <a href="/" className="button">
          Login
        </a>
        <a href="/" className="button transparent">
          Sign Up
        </a>
      </div>
      <div className="dashboard">
        <div className="sidenav">
          <Sidenav />
        </div>
        <div className="card">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
