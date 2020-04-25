import React from 'react';
import styles from './index.module.less';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { DoubleLeftOutlined } from '@ant-design/icons';

type NotFoundProps = RouteComponentProps;
const NotFound: React.FC<NotFoundProps> = (props) => {
  const back = () => {
    props.history.goBack();
  };

  return (
    <div className={styles['not-wrapper']}>
      <div className={styles.notFound}>
        404，页面不存在！
      </div>
      <div className={styles.back}>
        <span onClick={back}><DoubleLeftOutlined />返回</span>
      </div>
    </div>
  );
};

export default withRouter(NotFound);
