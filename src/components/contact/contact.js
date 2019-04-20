/** Created by wanan on 2019-03-16
 *作者:wanan
 */
import React from "react";
import { Row, Col } from 'antd';
require(`./contact.css`);

class ty_contact extends React.Component{
    state = {
        current: 'Contact',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render(){
        return(
            <div className="contact">
                <nav>
                    <img src={require("../../assets/img/about/anli1.jpg")}  alt=""/>
                </nav>
                <section>
                    <Row>
                        <Col span={10}>
                            <img src={require("../../assets/img/about/haimian.jpg")}  alt=""/>
                        </Col>
                        <Col span={14}>
                            <h1>上海同瀛环境工程有限公司</h1>
                            <p>与时俱进，开拓进取的同瀛人本着“品质优先、服务至诚”的企业精神，与有识之士携手并进，为现代化的水利建设作出我们最大的贡献。</p>
                            <p>联系人：刘雪岭</p>
                            <p>联系手机：13905254407</p>
                            <p>联系电话：0514- 847 286 68</p>
                        </Col>
                    </Row>
                </section>
            </div>
        );
    }
}

export default ty_contact;