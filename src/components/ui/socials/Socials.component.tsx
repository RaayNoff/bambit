import { FC } from "react";
import s from "./socials.module.scss";
import SocialsSVGSelector, { SocialType } from "./socialsSVGSelector";

interface ISocialsProps {
  className?: any;
}

const Socials: FC<ISocialsProps> = ({ className }) => {
  return (
    <ul className={`${className} ${s.socials}`}>
      <li className={s.socials__item}>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          aria-label="whatsapp link"
        >
          {SocialsSVGSelector(SocialType.WHATSAPP)}
        </a>
      </li>
      <li className={s.socials__item}>
        <a
          href="https://telegram.org"
          target="_blank"
          aria-label="telegram link"
        >
          {SocialsSVGSelector(SocialType.TELEGRAM)}
        </a>
      </li>
      <li className={s.socials__item}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          aria-label="instagram link"
        >
          {SocialsSVGSelector(SocialType.INST)}
        </a>
      </li>
      <li className={s.socials__item}>
        <a href="https://vk.com" target="_blank" aria-label="vkontakte link">
          {SocialsSVGSelector(SocialType.VK)}
        </a>
      </li>
    </ul>
  );
};

export default Socials;
