import { Layout, theme } from "antd";
import ButtonCustom from "./ButtonCustom";

const { Header } = Layout;
const HeaderCustom = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <ButtonCustom />
    </Header>
  );
};

export default HeaderCustom;
