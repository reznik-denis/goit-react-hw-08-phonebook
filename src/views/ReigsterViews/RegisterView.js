import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './RegisterViews.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.background}>
      <h1 className={s.title}>
        Зареєструйтесь, щоб додати свої перші контакти
      </h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Ім'я
          <input
            placeholder="Ваше ім'я"
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

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
          Зареєструватись
        </button>
      </form>
    </div>
  );
}
