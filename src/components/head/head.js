import React from "react";
import { Menu, Row, Col, Affix, Icon } from 'antd';
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
require('./head.css');

/** Created by wanan on 2019-03-16
 *作者:wanan
 */
class ty_head extends React.Component{
    state = {
        current: 'Home',
        bottom: 10,
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render(){
        return(
            <Affix id="head">
                <Row className="pchead">
                    <Col lg={5}>
                        <a href="/" id="logo">
                            上海同瀛环境工程有限公司
                        </a>
                    </Col>
                    <Col lg={19} xs={{ span: 0}}>
                        <Menu
                            onClick={this.handleClick}
                            mode="horizontal"
                            selectedKeys={[this.state.current]}
                            id="nav"
                        >
                            <Menu.Item key="Home">
                                <Link to="/">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="/About">
                                <Link to="/About">公司简介</Link>
                            </Menu.Item>
                            <Menu.Item key="/News">
                              <Link to="/News">行业新闻</Link>
                            </Menu.Item>
                            <SubMenu title="产品介绍">
                                <MenuItemGroup>
                                    <Menu.Item key="Products/1">
                                        <Link to="/Products/1">截污井</Link>
                                    </Menu.Item>
                                    <Menu.Item key="Products/2">
                                        <Link to="/Products/2">截污井2</Link>
                                    </Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <Menu.Item key="Contact">
                                <Link to="/Contact">联系我们</Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                <header>
                  <h1>上海同瀛环境工程有限公司</h1>
                  <Icon type="menu-fold" className="icon-nav"/>
                </header>
            </Affix>
        );
    }
}

export default ty_head;