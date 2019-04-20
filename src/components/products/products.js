/** Created by wanan on 2019-03-16
 *作者:wanan
 */
import React from "react";
import { Menu} from 'antd';
require('./products.css');

class ty_Products extends React.Component{
    state = {
        current: 'Products',
        detail: 'product'
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            detail: e.key,
        });
    }
    render(){
        let name = this.props.match.params.name;
        console.log(this.props.match.params.name);
        return(
            <div className="products">
                <nav>
                    <img src={require("../../assets/img/about/anli1.jpg")}  alt=""/>
                </nav>
                <div className="content">
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.detail]}
                        mode="horizontal"
                    >
                        <Menu.Item key="product">
                            产品介绍
                        </Menu.Item>
                        <Menu.Item key="solution">
                            解决方案
                        </Menu.Item>
                    </Menu>
                    <section>
                        { this.state.detail === 'product' ?
                            <div>
                              <h2>{ `一体化智能截污井 ${ this.state.detail }` } {[name]}</h2>
                              <p>同瀛IW一体化智能截污井，专注于城市合流制管道的污水截流井，设置在雨水管与污水管的汇合处，通过仪器监测数据， 将雨水和污水自动分流到各自的管道中，实现“夏季全部截污，初期雨水弃流，雨季全部直排”的功能，是面源污染末端 治理技术的必备设施。截污井完全根据客户特定要求在同瀛工厂精确预制，安装完毕后出厂。 改一体化产品的筒体采用不锈钢材质定制生产，内部包括动力主机、排水阀、截污阀、水位计、水质监测仪以及 测控一体终端机等，最大程度确保系统的成本效益及运行可靠性。
此外，一体化智能截污井配备同瀛先进的远程SCAD智能控制系统， 使截污井可以实现无人值守，远程管理。</p>
                              <img src={require("../../assets/img/product/jiewujing.png")} alt=""/>
                            </div>
                            :
                          <div>
                            <h2>解决方案</h2>
                            <p>（1）对雨污管道进行分流，在降水天气下，雨水经雨水管网收集后，流入城市水体，污水则通过污水管网输送至污水厂进行处置；

                              （2）对雨污管网进行分流，可进一步提高污水收集效率，提升污水处理厂进水负荷，降低污水处理成本；

                              （3）对雨污管网进行分流，避免了污水直接排放至水体中，保护了城市地表水环境和地下水环境，有助于进一步提升城市生活环境；

                              （4）对雨污管网进行分流，可进一步保障雨、污水得到有序的处置排放，完善了城市基础设施建设，美化了城市市容，提升了城市投资环境。
                            </p>
                          </div>
                        }
                    </section>
                </div>
            </div>
        );
    }
}

export default ty_Products;