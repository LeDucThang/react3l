import Icon from 'antd/lib/icon';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import classNames from 'classnames';
import {APP_TITLE} from 'config/consts';
import {menu} from 'config/menu';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {renderRoutes, RouteConfig, RouteConfigComponentProps} from 'react-router-config';
import {NavLink, Switch, withRouter} from 'react-router-dom';
import './DefaultLayout.scss';

const {Header, Sider, Content, Footer} = Layout;

const {SubMenu} = Menu;

interface DefaultLayoutProps extends RouteConfigComponentProps {
  className?: string;

  headerClassName?: string;

  contentClassName?: string;

  mainClassName?: string;
}

function renderMenu(menu: RouteConfig[], translate: (key: string, data?: any) => string) {
  return menu.map((item: RouteConfig) => (
    <React.Fragment key={item.path as string}>
      <NavLink
        to={item.path as string}
        className="ant-menu-item"
        activeClassName="ant-menu-item-selected"
        exact={item.exact}
        role="menuitem"
      >
        {item.icon && (
          <Icon type={item.icon}/>
        )}
        {item.matIcon && (
          <i className="material-icons">{item.matIcon}</i>
        )}
        {translate(item.title)}
      </NavLink>
      {item?.children && (
        <SubMenu title={item.title}>
          {renderMenu(item.children, translate)}
        </SubMenu>
      )}
    </React.Fragment>
  ));
}

function DefaultLayout(props: DefaultLayoutProps) {
  const {route, className, contentClassName, headerClassName, mainClassName} = props;
  const [translate] = useTranslation();

  return (
    <Layout className={classNames('default-layout', className)}>
      <Header className={headerClassName}>
        <div className="logo">
          {APP_TITLE}
        </div>
      </Header>
      <Layout className={mainClassName}>
        <Sider theme="dark">
          <Menu mode="inline" theme="dark">
            {renderMenu(menu, translate)}
          </Menu>
        </Sider>
        <Content className={contentClassName}>
          <Switch>
            {renderRoutes(route?.children)}
          </Switch>
          <Footer/>
        </Content>
      </Layout>
    </Layout>
  );
}

export default withRouter(DefaultLayout);
