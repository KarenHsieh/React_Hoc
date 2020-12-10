import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './Card.module.scss'

function Card({data}) {
  const handleClick = () => {
    alert('Click');
  }
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div>
        <Typography variant="h5" gutterBottom>
        { data.title }
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClick}>
        { data.btnText }
        </Button>
      </div>
    </div>
  );
}

export default Card;