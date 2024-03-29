import { FaExclamationTriangle } from "react-icons/fa"
import styles from "./styles/not-found.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.error}>
      <h1><FaExclamationTriangle /> 404</h1>
      <h4>Sorry, there is nothing here</h4>
      <Link href="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
