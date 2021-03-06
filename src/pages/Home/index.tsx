import React from 'react';
import styles from './index.module.less';
import Space from '@/components/CSS/FontSpace';
import ThreeDCard from '@/components/CSS/ThreeDCard';

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
      <div className={styles['font-space-wrap']}>
        <Space width="40%" text={font} />
      </div>
      <div className={styles['card-wrap']}>
        <ThreeDCard
          pic="https://images.unsplash.com/photo-1505535162959-9bbcb4ab22d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=400"
          title="come on with me"
          content="childhood to this deadly disease. It was not unusual to find him playing and racing around his backyard, wearing his medicine-laden backpack"
        />
        <ThreeDCard
          pic="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=400"
          title="come on with me"
          content="deadly disease. It was not unusual to find him playing and racing around his backyard, wearing his medicine-laden backpack"
        />
        <ThreeDCard
          pic="https://images.unsplash.com/photo-1505535162959-9bbcb4ab22d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=400"
          title="come on with me"
          content="childhood to this deadly disease. It was not unusual to find him playing and racing around his backyard, wearing his medicine-laden backpack"
        />
      </div>
    </div>
  );
};

export default Home;
