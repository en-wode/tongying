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
                            <Link to="/Newdetail/0">
                              <Col span={12}>
                                <img src={require("../../assets/img/new/down.jpg")} alt=""/>
                              </Col>
                              <Col span={12}>
                                  <h2>发江苏省城市黑臭水体治理攻坚战</h2>
                                  <p className="content">省政府办公厅关于印发江苏省城市黑臭水体治理攻坚战实施方案的通知</p>
                                  <p>时间：2019-04-18</p>
                              </Col>
                            </Link>
                          </Row>
                        </Col>
                        <Col span={12}>
                          <Row gutter={6}>
                              <Link to="/Newdetail/1">
                                  <Col span={12}>
                                  <img src={require("../../assets/img/new/down.jpg")} alt=""/>
                                </Col>
                                <Col span={12}>
                                  <h2>江苏省环境基础设施三年</h2>
                                  <p className="content">省政府办公厅关于印发江苏省环境基础设施三年建设方案（2018－2020年）的通知</p>
                                  <p>时间：2019-04-18</p>
                                </Col>
                              </Link>
                          </Row>
                        </Col>

                    </Row>
                    <Row gutter={26}>
                    <Col span={12}>
                        <Row gutter={6}>
                            <Link to="/Newdetail/2">

                            <Col span={12}>
                                <img src={require("../../assets/img/new/down.jpg")} alt=""/>
                            </Col>
                            <Col span={12}>
                                <h2>一体化智能截污井</h2>
                                <p className="content">IW一体化智能截污井，专注于城市合流制管道的污水截流井</p>
                                <p>时间：2018-08-18</p>
                            </Col>
                            </Link>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row gutter={6}>
                            <Link to="/Newdetail/3">
                                <Col span={12}>
                                    <img src={require("../../assets/img/new/down.jpg")} alt=""/>
                                </Col>
                                <Col span={12}>
                                    <h2>省政府办公厅关于印发江苏省太湖蓝藻暴发应急预案的通知</h2>
                                    <p className="content">省政府办公厅关于印发江苏省太湖蓝藻暴发应急预案的通知</p>
                                    <p>时间：2020-03-13</p>
                                </Col>
                            </Link>
                        </Row>
                    </Col>
                </Row>
                    <Row gutter={26}>
                        <Col span={12}>
                            <Row gutter={6}>
                                <Link to="/Newdetail/2">

                                    <Col span={12}>
                                        <img src={require("../../assets/img/new/down.jpg")} alt=""/>
                                    </Col>
                                    <Col span={12}>
                                        <h2>省政府办公厅关于加强洪泽湖生态保护和科学利用的实施意见</h2>
                                        <p className="content">省政府办公厅关于加强洪泽湖生态保护和科学利用的实施意见</p>
                                        <p>时间：2019-08-31</p>
                                    </Col>
                                </Link>
                            </Row>
                        </Col>
                    </Row>
            </section>
            </div>
        );
    }
}

export default ty_new;