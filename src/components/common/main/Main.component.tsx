import { FC } from "react";
import Faq from "../../buisness/faq/Faq.component";
import s from "./main.module.scss";

const Main: FC = () => {
  return (
    <main className={s.main}>
      <div className={`${s.main__container} container`}>
        <Faq />
      </div>
    </main>
  );
};

export default Main;
