import { Button } from "antd";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const ButtonCustom = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => setCollapsed(!collapsed)}
      style={{
        fontSize: "16px",
        width: 64,
        height: 64,
      }}
    />
  );
};

export default ButtonCustom;
