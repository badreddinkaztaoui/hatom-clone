import styles from "./button.module.css";

type ButtonTypes = {
  label: string;
  icon?: any;
  type?: "dark" | "light";
};

const Button = ({ label, icon, type = "light" }: ButtonTypes) => {
  const bgStyle = type === "dark" ? styles.dark : styles.light;

  return (
    <button className={[styles.button, bgStyle].join(" ")}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default Button;
