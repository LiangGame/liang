import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import log from 'loglevel';
import { Link } from 'react-router-dom';

interface MyBreadcrumbProps {
  dataSource: any[];
}
const MyBreadcrumb: React.FC<MyBreadcrumbProps> = (props) => {
  log.info('MyBreadcrumb -> props', props);
  const { dataSource } = props;

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {
        dataSource.map((item, index) => {
          if (index === dataSource.length - 1) {
            return (
              <Breadcrumb.Item key={item.title}>
                {item.title}
              </Breadcrumb.Item>
            );
          }
          return (
            <Breadcrumb.Item key={item.title}>
              <Link to={item.path}>
                {item.title}
              </Link>
            </Breadcrumb.Item>
          );
        })
      }
    </Breadcrumb>
  );
};

MyBreadcrumb.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MyBreadcrumb;
