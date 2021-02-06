import React from 'react';
import foto from '../image/123.jpg';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    borderRadius: 15,
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <img src={foto} alt={'foto'} width="1000" style={styles.img} />
  </div>
);

export default HomeView;
