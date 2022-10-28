import { FC } from "react";
import s from "./header.module.scss";
import logo from "../../../assets/images/logo.png";
import Socials from "../../ui/socials/Socials.component";
import Navigation from "../../ui/navigation/Navigation.component";

interface IHeaderProps {
  isSidebarOpened: boolean;
  setSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<IHeaderProps> = ({ isSidebarOpened, setSidebarOpened }) => {
  return (
    <header className={s.header}>
      <div className={`${s.header__container} container`}>
        <div className={s.header__logo}>
          <img src={logo} alt="Company 24 logo" />
        </div>

        <Navigation className={s.header__navigation} />
        <Socials className={s.header__socials} />

        <button
          type="button"
          onClick={() => setSidebarOpened((prev) => !prev)}
          className={
            isSidebarOpened ? `${s.burger} ${s.opened} ` : `${s.burger}`
          }
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
