import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";
import { FaUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contentContainer}>
      <div className={s.content}>
        <p className={s.contactName}>
          <span className={s.userIcon}>
            <FaUser size={16} />
          </span>
          {name}
        </p>
        <p className={s.contactPhone}>
          <span className={s.userIcon}>
            <FaPhone size={16} />
          </span>
          {number}
        </p>
      </div>
      <button
        className={s.deleteBtn}
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
