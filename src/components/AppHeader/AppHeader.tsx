import "./AppHeader.scss";
import reactLogo from "../../assets/react.svg";
import { User } from "../../models/user";
import { Layout, Menu } from "antd";
const { Header } = Layout;

type AppHeaderProps = {
  userInfo: User | undefined;
};

export const AppHeader = (props: AppHeaderProps) => {
  const links = props.userInfo
    ? [
        { key: "/", label: "Home" },
        { key: "login", label: "Login" },
        { key: "map", label: "Map" },
        { key: "logn", label: "Bad Login" },
      ]
    : [{ key: "login", label: "Login/Register" }];
  return (
    <>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <Menu
          style={{ flexShrink: 0, flexGrow: 1 }}
          theme="dark"
          mode="horizontal"
          items={links}
        />
        {props.userInfo?.login}
      </Header>
    </>
  );
};
