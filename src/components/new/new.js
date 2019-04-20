/** Created by wanan on 2019-03-16
 *作者:wanan
 */
import React from "react";
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'

require(`./new.css`);

class ty_new extends React.Component{
    state = {
        current: 'News',
    }
    render(){
        return(
            <div className="new">
                <nav>
                    <img src={require("../../assets/img/about/anli1.jpg")}  alt=""/>
                </nav>
                <section>
                    <Row gutter={26}>
                        <Col span={12}>
                          <Row gutter={6}>
                            <Link to="/Newdetail">
                              <Col span={12}>
                                <img src={require("../../assets/img/new/down.jpg")} alt=""/>
                              </Col>
                              <Col span={12}>
                                  <h2>发江苏省城市黑臭水体治理攻坚战</h2>
                                  <p className="content">省政府办公厅关于印发江苏省城市黑臭水体治理攻坚战实施方案的通知</p>
                                  <p>时间：2019-01-31</p>
                              </Col>
                            </Link>
                          </Row>
                        </Col>
                        <Col span={12}>
                          <Row gutter={6}>
                            <Col span={12}>
                              <img src={require("../../assets/img/new/down.jpg")} alt=""/>
                            </Col>
                            <Col span={12}>
                              <h2>江苏省环境基础设施三年</h2>
                              <p className="content">省政府办公厅关于印发江苏省环境基础设施三年建设方案（2018－2020年）的通知</p>
                              <p>时间：2019-01-31</p>
                            </Col>
                          </Row>
                        </Col>
                    </Row>
                </section>
            </div>
        );
    }
}

export default ty_new;