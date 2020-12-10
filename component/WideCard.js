import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './Card.module.scss'

function WideCard() {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <Typography variant="h5" gutterBottom>
      Xpark 水生公園門票
      </Typography>
      <Button variant="contained" color="primary">
        Buy
      </Button>
    </div>
  );
}

export default WideCard;