import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { User } from "./models/user";
import { MapPage } from "./pages/MapPage/MapPage";
import { Layout, theme } from "antd";
const { Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [userInfo, setUserInfo] = useState<User | undefined>(undefined);

  function handleLogIn(user: User) {
    setUserInfo(user);
  }

  return (
    <>
      <Layout className="layout">
        <AppHeader userInfo={userInfo} />
        <Content style={{ padding: "0 50px" }}>
          {userInfo ? (
            <Routes>
              <Route index path="/" element={<HomePage />} />
              <Route path="map" element={<MapPage />} />
              <Route
                path="login"
                element={<LoginPage logInHandler={handleLogIn} />}
              />

              {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route
                index
                path="/"
                element={<LoginPage logInHandler={handleLogIn} />}
              />
              <Route
                path="login"
                element={<LoginPage logInHandler={handleLogIn} />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          )}
          Current user is: {userInfo ? userInfo.name : "undefined"}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}

export default App;
