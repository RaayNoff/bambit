import { FC } from "react";
import s from "./accordion.module.scss";
import AccordionSVG from "./accordionSVG";

interface IAccordionProps {
  title: string;
  content: string;
  active: string;
  border: boolean;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Accordion: FC<IAccordionProps> = ({
  content,
  title,
  border,
  active,
  setActive,
}) => {
  const clickHandler = () => {
    if (active === title) {
      setActive("");
    } else {
      setActive("");
      setTimeout(() => {
        setActive(title);
      }, 550);
    }
  };

  return (
    <article
      className={border ? `${s.acc} ${s.border}` : `${s.acc}`}
      onClick={() => clickHandler()}
    >
      <div className={s.acc__container}>
        <section className={s.acc__heading}>
          <header className={s.acc__title}>{title}</header>
          <span
            className={
              active === title
                ? `${s.acc__arrow} ${s.rotate}`
                : `${s.acc__arrow}`
            }
          >
            {AccordionSVG()}
          </span>
        </section>

        <p
          className={
            active === title
              ? `${s.acc__content} ${s.opened}`
              : `${s.acc__content}`
          }
        >
          {content}
        </p>
      </div>
    </article>
  );
};

export default Accordion;
