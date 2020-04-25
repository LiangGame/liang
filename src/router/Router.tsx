import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import router from './index';
import log from 'loglevel';

const AppRouter: React.FC = () => {
  const [routers, setRouters] = useState<any[]>([]);

  useEffect(() => {
    const routes = () => {
      const _routers = Object.assign([], routers);
      router.forEach((route: any) => {
        if (route.redirect) {
          _routers.push(
            <Route key={route.path} exact={route.exact || false} path={route.path}>
              <Redirect to={route.redirect} />
            </Route>,
          );
        } else {
          _routers.push(
            <Route key={route.path} exact={route.exact || false} path={route.path}>
              {route.component}
            </Route>,
          );
        }
        if (route.children && route.children.length) {
          route.children.forEach((child: any) => {
            const Layout = route.component;
            const Component = child.component;
            _routers.push(
              <Route key={child.path} exact={child.exact || false} path={child.path}>
                <Layout>
                  <Component />
                </Layout>
              </Route>,
            );
          });
        }
      });
      log.debug('Router', _routers);
      setRouters(_routers);
    };

    routes();
  }, []);

  return (
    <Router>
      <Switch>
        {
          routers
        }
      </Switch>
    </Router>
  );
};

export default AppRouter;
