import React, { useState } from 'react';

import styles from '../scss/button.module.scss';

export default function Button() {
  const [state, setState] = useState('CLICK ME');

  return <button className={styles.btn} type="button" onClick={() => setState('CLICKED')}>{state}</button>;
}
