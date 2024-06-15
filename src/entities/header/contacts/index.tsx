import { FC } from "react";
import { NavLink } from "react-router-dom";

const contacts = {
  id: 0,
  text: "Aviable 24/7 at",
  number: "(405)555-0128",
  link: "tel:+4055550128",
};

export const Contacts: FC = () => {
  return (
    <div className="my-auto text-small">
      <NavLink to={contacts.link}>
        <div className="flex gap-2">
          {contacts.text}
          <b>{contacts.number}</b>
        </div>
      </NavLink>
    </div>
  );
};
