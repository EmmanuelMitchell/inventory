import React from "react";
import Header from "./component/AppHeader/Header";
import { Space } from "antd";
import Sidebar from "./component/SideBar/Sidebar";
import PageContent from "./component/PageContent/PageContent";
import Footer from "./component/AppFooter/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="SpaceContent">
        <Sidebar />
        <PageContent />
      </div>
      <Footer />
    </div>
  );
}
