import { FC, useState } from "react";
import Footer from "../../common/footer/Footer.component";
import Header from "../../common/header/Header.component";
import Main from "../../common/main/Main.component";
import Sidebar from "../../common/sidebar/Sidebar.component";

const MainPage: FC = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(true);

  return (
    <>
      <Header
        isSidebarOpened={isSidebarOpened}
        setSidebarOpened={setIsSidebarOpened}
      />
      <Main />
      <Footer />
      <Sidebar
        isEnabled={isSidebarOpened}
        setSidebarOpened={setIsSidebarOpened}
      />
    </>
  );
};

export default MainPage;
