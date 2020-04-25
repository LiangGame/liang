import React, { ReactNode } from 'react';
import styles from './index.module.less';

interface FontSpaceProps {
  text?: string | ReactNode;
}
const FontSpace:React.FC<FontSpaceProps> = (props) => {
  return (
    <div className={styles.font_space}>
      <div className={styles.container}>
        <video
          src="https://www.apple.com/105/media/us/iphone-se/2020/90024c0f-285a-4bf5-af04-2c38de97b06e/anim/arcade-loop/large.mp4"
          muted
          playsInline
          autoPlay
          loop
        />
        <div className={styles.text_box}>
          {props.text || <span>Welcome to My World!</span>}
        </div>
      </div>
    </div>
  );
};

export default FontSpace;
