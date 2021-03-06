import React, {PropTypes} from 'react';
import classnames from 'classnames';

import styles from './Loader.scss';

function Loader({size, text}) {
  const className = classnames(styles.loader, styles[size]);
  return (
    <div className={className}>
      <div className={styles.wheel}/>
      { text && <div className={styles.text}>{text}</div> }
    </div>
  );
}

Loader.defaultProps = {
  size: 'medium'
};

Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  text: PropTypes.string
};

export default Loader;
