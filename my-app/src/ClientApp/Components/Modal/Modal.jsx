import styles from "./modal.module.css";
import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, closeModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal} ref={modalRef}>
      <button className={styles.closeButton} onClick={closeModal}>
        &times;
      </button>
      <h2 className={styles.title}>SIGN IN</h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input type="email" id="email" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <input type="password" id="password" className={styles.input} required />
        </div>
        <div className={styles.links}>
          <a href="/forgot-password" className={styles.link}>Forgot password?</a>
          <button type="submit" className={styles.button}>SIGN IN</button>
        </div>
      </form>
    </div>
  );
}

export default Modal