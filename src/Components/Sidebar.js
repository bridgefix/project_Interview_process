import React from "react";

import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarFooter,
} from "cdbreact";
import { Link, useParams } from "react-router-dom";

const Sidebar = () => {
  // const {id} =useParams()

  return (
    <CDBSidebar
      textColor="white"
      backgroundColor="#0d0d19"
      style={{ minHeight: "100vh" }}
    >
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        <img
          src="https://bridgefix.co/static/media/logo.988b519eb200452a0e4f.png"
          height="35"
          loading="lazy"
        />
        Bridegefix
      </CDBSidebarHeader>

      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="th-large" textFontSize="22px">
            <Link to="/">Dashboard</Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note" textFontSize="19px">
            <Link to={`/interview/id`}>Interview</Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note" textFontSize="19px">
            <Link to="/company">Company</Link>
          </CDBSidebarMenuItem>

          <CDBSidebarMenuItem icon="sticky-note" textFontSize="19px">
            <Link to="/technology">Technology</Link>
          </CDBSidebarMenuItem>

          <CDBSidebarMenuItem
            icon="credit-card"
            iconType="solid"
            textFontSize="19px"
          >
            <Link to={`/questions/id`}> Questions</Link>
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Sidebar;
