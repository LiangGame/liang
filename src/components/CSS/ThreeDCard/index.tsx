import React, { useEffect, useRef } from 'react';
import styles from './index.module.less';
import VanillaTilt from 'vanilla-tilt';

interface ThreeDCardProps {
  pic: string,
  title: string,
  content: string,
}
const ThreeDCard: React.FC<ThreeDCardProps> = (props) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const { pic, title, content } = props;

  useEffect(() => {
    if (boxRef.current) {
      VanillaTilt.init(boxRef.current, {
        max: 25,
        speed: 400,
      });
    }
  }, []);

  return (
    <div className={styles.box} ref={boxRef}>
      <div className={styles.img_box}>
        <img src={pic} alt="" />
      </div>
      <div className={styles.content_box}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ThreeDCard;
