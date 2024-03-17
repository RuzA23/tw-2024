import React from "react";

import { Layout } from "antd";
import Sidebar from "./components/Sidebar";
import HeaderCustom from "./components/HeaderCustom";
import ContentCustom from "./components/ContentCustom";

const App: React.FC = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <HeaderCustom />
        <ContentCustom />
      </Layout>
    </Layout>
  );
};

export default App;
