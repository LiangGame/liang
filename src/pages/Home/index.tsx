import React from 'react';
import styles from './index.module.less';
import Space from '@/components/CSS/FontSpace';

const Home:React.FC = () => {
  const font = (
    <div className={styles['font-space']}>
      欢迎来到这里，
      <br />
      精彩不断！
    </div>
  );

  return (
    <div className={styles.App}>
      <Space width="40%" text={font} />
    </div>
  );
};

export default Home;
