import styles from "./Contact.module.css";

export default function Contact({ name, number, onDelete }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p>👤 {name}</p>
        <p>📞 {number}</p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
