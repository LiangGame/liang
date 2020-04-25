import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import styles from '../../layout/Layout.module.less';

const { SubMenu } = Menu;
const { Sider } = Layout;

interface MySiderProps extends RouteComponentProps {
  menuList: any[];
}

const MySider: React.FC<MySiderProps> = (props) => {
  const { menuList, location: { pathname } } = props;

  let menu: Record<string, any> | null = {};
  const openKeys = [];
  const selectedKeys = [];

  for (let i = 0; i < menuList.length; i++) {
    const item = menuList[i];
    menu = item.children.find((ii: any) => ii.path === pathname);
    if (menu && menu.title) {
      openKeys.push(item.title);
      selectedKeys.push(menu.title);
      break;
    }
  }

  return (
    <Sider className={styles['site-sider']} width={260}>
      <Menu
        mode="inline"
        defaultSelectedKeys={selectedKeys}
        defaultOpenKeys={openKeys}
        style={{ height: '100%' }}
      >
        {
          menuList.map((item: any) => {
            return (
              <SubMenu key={item.title} title={item.title}>
                {
                  item.children.map((ii: any) => {
                    return (
                      <Menu.Item key={ii.title}>
                        <Link to={ii.path}>
                          {ii.title}
                        </Link>
                      </Menu.Item>
                    );
                  })
                }
              </SubMenu>
            );
          })
        }
      </Menu>
    </Sider>
  );
};

MySider.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default withRouter(MySider);
