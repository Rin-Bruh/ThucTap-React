import styles from './ProfileCard.module.css';

function ProfileCard() {
  return (
    <div className={styles.card}>
      <img
        src="https://i.pravatar.cc/100"
        alt="User Avatar"
        className={styles.avatar}
      />
      <h2 className={styles.name}>John Doe</h2>
      <p className={styles.title}>Frontend Developer</p>
      <button className={styles.button}>Follow</button>
    </div>
  );
}

export default ProfileCard;
