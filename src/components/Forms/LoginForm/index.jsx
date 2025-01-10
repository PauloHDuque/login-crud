import styles from "./styles.module.css";
import PropTypes from "prop-types";

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default function LoginForm({
  onSubmit,
  username,
  setUsername,
  password,
  setPassword,
}) {
  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.formGroup}>
          <label htmlFor="username">Usuário: </label>
          <input
            type="text"
            id="username"
            value={username}
            placeholder="nome de usuário"
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Entrar
        </button>
      </form>
    </>
  );
}
