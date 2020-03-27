/** Created by wanan on 2019-03-16
 *作者:wanan
 */
import React from "react";
import { Row, Col } from 'antd';
require(`./about.css`);

class ty_about extends React.Component{
    state = {
        current: 'About',
    }
    render(){
        return(
            <div className="about">
                <nav>
                    <img src={require("../../assets/img/about/anli1.jpg")}  alt=""/>
                </nav>
                <section>
                    <Row gutter={26}>
                        <Col span={10}>
                            <img src={require("../../assets/img/about/haimian.jpg")}  alt=""/>
                        </Col>
                        <Col span={12}>
                            <h3>雄厚的实力</h3>
                            <p>本公司专业从事景观水闸、水利闸门、启闭机、清污机、节能型割草船、垃圾保洁船等水工产品的研究和制造，集科研、设计、产品制造、工程施工、设备安装等环节于一身，形成了严格的生产质量体系和服务体系，为用户提供一条龙全方位的优质服务。公司占地面积3万平方米，建筑面积2万平方米，现有专业技术人员20名，中高级技术人员11名，其余工人50余名；拥有各种大型加工设备，年产值规模可达6000万元。公司现为中国水利企业协会机械分会会员单位，与江苏科技大学共同建立“研究生实习基地”，被中国机械工业企业管理协会评为“管理达标企业”。公司取得水利部颁发的启闭机许可证。公司严格执行ISO9001体系标准，连续多年获得AAA级资信企业，“重合同讲信用”称号，拥有多项专利证书。</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <h3>完善的服务</h3>
                            <p>按区域划分，专业人员驻扎，提供最快、最专业的服务是同瀛的特色。客户可以享受到标准产品般的服务和方便。</p>
                        </Col>
                        <Col span={10}>
                            <img src={require("../../assets/img/about/haimian.jpg")}  alt=""/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10}>
                            <img src={require("../../assets/img/about/city.png")}  alt=""/>
                        </Col>
                        <Col span={12}>
                            <h3>美好的未来</h3>
                            <p>与时俱进，开拓进取的同瀛人本着“品质优先、服务至诚”的企业精神，与有识之士携手并进，为现代化的水利建设作出我们最大的贡献。</p>
                        </Col>
                    </Row>
                </section>
            </div>
        );
    }
}

export default ty_about;