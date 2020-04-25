import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import styles from '../../layout/Layout.module.less';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

type MyHeaderProps = RouteComponentProps;
const MyHeader: React.FC<MyHeaderProps> = (props) => {
  const [activeRoute, setActiveRoute] = useState('');
  const { location } = props;

  useEffect(() => {
    switch (true) {
      case location.pathname.includes('/css'):
        setActiveRoute('CSS');
        break;
      case location.pathname.includes('/javascript'):
        setActiveRoute('JavaScript');
        break;
      default:
        setActiveRoute('Home');
        break;
    }
  }, [location.pathname]);

  return (
    <Header className="header">
      <div className={styles.logo} />
      <Menu theme="dark" mode="horizontal" selectedKeys={[activeRoute]}>
        <Menu.Item key="Home">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="CSS">
          <Link to="/css">CSS</Link>
        </Menu.Item>
        <Menu.Item key="JavaScript">
          <Link to="/javascript">JavaScript</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

MyHeader.propTypes = {
  location: PropTypes.any,
};

export default withRouter(MyHeader);
