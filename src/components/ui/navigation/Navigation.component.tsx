import { FC } from "react";
import { Link } from "react-router-dom";
import s from "./navigation.module.scss";

interface INavigationProps {
  className?: any;
}

const Navigation: FC<INavigationProps> = ({ className }) => {
  return (
    <nav className={`${className} ${s.navigation}`}>
      <ul className={s.navigation__list}>
        <li className={`${s.linkWrapper} ${s.navigation__item}`}>
          <span className={`${s.innerWrapper} ${s.wrapper}`}>
            <Link className={`${s.link} ${s.hover}`} to={"/"}>
              Преимущества
            </Link>
          </span>
        </li>
        <li className={`${s.linkWrapper} ${s.navigation__item}`}>
          <span className={`${s.innerWrapper} ${s.wrapper}`}>
            <Link className={`${s.link} ${s.hover}`} to={"/"}>
              О нас
            </Link>
          </span>
        </li>
        <li className={`${s.linkWrapper} ${s.navigation__item}`}>
          <span className={`${s.innerWrapper} ${s.wrapper}`}>
            <Link className={`${s.link} ${s.hover}`} to={"/"}>
              Услуги
            </Link>
          </span>
        </li>
        <li className={`${s.linkWrapper} ${s.navigation__item}`}>
          <span className={`${s.innerWrapper} ${s.wrapper}`}>
            <Link className={`${s.link} ${s.hover}`} to={"/"}>
              Команда
            </Link>
          </span>
        </li>
        <li className={`${s.linkWrapper} ${s.navigation__item}`}>
          <span className={`${s.innerWrapper} ${s.wrapper}`}>
            <Link className={`${s.link} ${s.hover}`} to={"/"}>
              Отзывы
            </Link>
          </span>
        </li>
        <li className={`${s.linkWrapper} ${s.navigation__item}`}>
          <span className={`${s.innerWrapper} ${s.wrapper}`}>
            <Link className={`${s.link} ${s.hover}`} to={"/"}>
              Контакты
            </Link>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
