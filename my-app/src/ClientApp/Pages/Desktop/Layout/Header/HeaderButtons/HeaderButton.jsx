import styles from "./HeaderButtons.module.css";

const HeaderButton = ({ openModal }) => {
  return (
    <>
      <li>
        <button className={styles.buttonDefault} onClick={openModal}>Sign in</button>
        <button className={styles.buttonGreen}>join</button>
      </li>
    </>
  )
}

export default HeaderButton