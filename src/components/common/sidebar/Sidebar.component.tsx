import { FC } from "react";
import Navigation from "../../ui/navigation/Navigation.component";
import Socials from "../../ui/socials/Socials.component";
import s from "./sidebar.module.scss";

interface ISidebarProps {
  isEnabled: boolean;
  setSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
  pageLock: () => void;
}

const Sidebar: FC<ISidebarProps> = ({
  isEnabled,
  setSidebarOpened,
  pageLock,
}) => {
  return (
    <div
      className={isEnabled ? `${s.wrapper}` : `${s.wrapper} ${s.hidden}`}
      onClick={() => {
        pageLock();
        setSidebarOpened((prev) => !prev);
      }}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={isEnabled ? `${s.sidebar}` : `${s.sidebar} ${s.disabled}`}
      >
        <Navigation className={s.sidebar__navigation} />
        <Socials className={s.sidebar__socials} />
      </aside>
    </div>
  );
};

export default Sidebar;
