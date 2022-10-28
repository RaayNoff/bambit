import { FC } from "react";
import s from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={`${s.footer__container} container`}>
        <small className={s.footer__copy}>
          &copy;&nbsp;2022 All rights reserved.
        </small>
        <section className={s.footer__madeby}>
          <span>made&nbsp;by</span>
          <span>Bambit</span>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
