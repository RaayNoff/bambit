import { FC, useState } from "react";
import Accordion from "../../ui/accordion/Accordion.component";
import s from "./faq.module.scss";

const Faq: FC = () => {
  const [active, setActive] = useState("Title 1");

  return (
    <article className={s.faq}>
      <h1 className={`${s.faq__title} main-title`}>Часто задаваемые вопросы</h1>
      <Accordion
        active={active}
        title="Title 1"
        border={true}
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dignissimos aperiam sequi ullam perferendis in voluptatem adipisci architecto officiis porro velit repellendus accusantium qui culpa, eos earum nulla neque illum!"
        setActive={setActive}
      />
      <Accordion
        active={active}
        title="Title 2"
        border={true}
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dignissimos aperiam sequi ullam perferendis in voluptatem adipisci architecto officiis porro velit repellendus accusantium qui culpa, eos earum nulla neque illum!"
        setActive={setActive}
      />
      <Accordion
        active={active}
        title="Title 3"
        border={true}
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dignissimos aperiam sequi ullam perferendis in voluptatem adipisci architecto officiis porro velit repellendus accusantium qui culpa, eos earum nulla neque illum!"
        setActive={setActive}
      />
      <Accordion
        active={active}
        title="Title 4"
        border={false}
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dignissimos aperiam sequi ullam perferendis in voluptatem adipisci architecto officiis porro velit repellendus accusantium qui culpa, eos earum nulla neque illum!"
        setActive={setActive}
      />
    </article>
  );
};

export default Faq;
