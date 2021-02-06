import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './LoginViews.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.background}>
      <h1 className={s.title}>Увійдіть в свою книгу контактів</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Пошта
          <input
            type="email"
            placeholder="email@mail.com"
            className={s.input}
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Пароль
          <input
            type="password"
            placeholder="Введіть пароль"
            className={s.input}
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={s.button} type="submit">
          Увійти
        </button>
      </form>
    </div>
  );
}
