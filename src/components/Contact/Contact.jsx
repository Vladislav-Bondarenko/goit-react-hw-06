import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p>👤 {contact.name}</p>
        <p>📞 {contact.number}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
