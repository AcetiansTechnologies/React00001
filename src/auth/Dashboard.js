import React from "react";
import { Link, Route } from "react-router-dom";
import PNav from "../components/PNav"
import Sidebar from "../components/Sidebar";
import Status from "../components/Status";

const Dashboard = () => {
  return (

    <div>

      <div >
        
        <PNav />

        <div className="Dashboard">

          <div>

            <Sidebar/>

          </div>

          <Status/>

        </div>

      </div>

    </div>

  );

};

export default Dashboard;
