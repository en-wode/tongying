/** Created by wanan on 2019-03-16
 *作者:wanan
 */
import React from 'react';
import { Row, Col, Card, Carousel, Divider } from 'antd';
import ty_foot from '../hfoot/foot';
import { BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom'

const { Meta } = Card;
require(`./home.css`);
class Home extends React.Component{
    state={
        bannerList:[                 //盒子背景颜色
            {
                bg:"#f6f6f6"
            },
            {
                bg:"#87d9e1"
            },
            {
                bg:"#8185d7"
            },
            {
                bg:"#e187cf"
            }
        ],
        offsetheight:document.documentElement.clientHeight,    //获取当前页面的高度
        fullPage:0,           //当前在第几页
        fullPageNum:false,        //是否在滑动
    }
    componentDidMount(){
        //
        //添加鼠标滑动事件
        //
        if(document.addEventListener){
            document.addEventListener('DOMMouseScroll',this.scroll.bind(this), { passive: false });
        }
        window.onmousewheel=document.onmousewheel=this.scroll.bind(this);
      axios.get("api/article/getFundArticles")
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        })

      // request({
      //   url:'/article/getFundArticles',
      //   method:'get'
      // }).then(function(res){
      //   console.log(res)
      // })
    }
    //
    //点击左侧小点时跳转到相应的page
    //
    pageInfo(index){
        this.setState({
            fullPage:index
        })
    }
    scroll(e){
        let event = e || window.event;
        //
        //是否正在滑动
        //
        if(this.state.fullPageNum){
            return false;
        }
        //
        //   e.wheelDelta为负数时向下滑动
        //
        if(event.wheelDelta<0){
            if(this.state.fullPage>=3){
                return false;
            }
            this.setState({fullPageNum:true});
            this.pageInfo(this.state.fullPage+1);
            //
            //  css设置动画事件为1000，所以等到1000ms后滚动状态为false
            //
            setTimeout(()=>{
                this.setState({fullPageNum:false});
            },1000);
            //
            //   否则就是向上划
            //
        }else{
            if(this.state.fullPage<=0){
                return false;
            }
            this.setState({fullPageNum:true});
            this.pageInfo(this.state.fullPage-1);
            setTimeout(()=>{
                this.setState({fullPageNum:false})
            },1000)
        }
    }
    render(){
        console.log(this.state.fullPage);
        return(
            <div className="section" style={{'height':this.state.offsetheight+'px'}}>
                <div className="container" style={{'transform': 'translate3d(0px,-'+ this.state.fullPage*this.state.offsetheight +'px, 0px)'}}>
                    <section key={1} style={{'height':this.state.offsetheight+'px'}}>
                        <Carousel effct="fade" autoplay>
                            <img src={require("../../assets/img/home/home2.png")}  alt=""/>
                            <img src={require("../../assets/img/home/home1.png")}  alt=""/>
                        </Carousel>
                    </section>
                    <section key={2} style={{'height':this.state.offsetheight+'px'}}>
                        <div className="news list">
                            <div className="section-box">
                                <p className="title-head">行业新闻</p>
                                <div className="title-box">
                                    NEWS
                                </div>
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                            <div className="contant" >
                                <h3>关注行内新闻  掌握实时动态</h3>
                                <p>随着国家对环保的重视，各地省份对环保的设计及要求越来越高</p>
                                <ul>
                                    <li>
                                        <Row>
                                            <Col lg={18}>
                                                <Link to="/Newdetail/0">

                                                    江苏省城市黑臭水体治理攻坚战实施方案
                                                </Link>
                                            </Col>
                                            <Col lg={6} xs={{ span: 0}} className="time">
                                                2019-04-18
                                            </Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row>
                                            <Col lg={18}>
.                                                <Link to="/Newdetail/1">

                                                    省政府办公厅江苏省环境基础设施三年建设方案
                                                </Link>

                                            </Col>
                                            <Col lg={6} xs={{ span: 0}} className="time">
                                                2019-04-18
                                            </Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row>
                                            <Col lg={18}>
                                                <Link to="/Newdetail/2">

                                                    一体化智能截污井
                                                </Link>

                                            </Col>
                                            <Col lg={6} xs={{ span: 0}} className="time">
                                                2018-08-18
                                            </Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row>
                                            <Col lg={18}>
                                                <Link to="/Newdetail/3">

                                                    省政府办公厅关于印发江苏省太湖蓝藻暴发应急预案的通知
                                                </Link>

                                            </Col>
                                            <Col lg={6} xs={{ span: 0}} className="time">
                                                2020-03-13
                                            </Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row>
                                            <Col lg={18}>
                                                <Link to="/Newdetail/4">

                                                    省政府办公厅关于加强洪泽湖生态保护和科学利用的实施意见
                                                </Link>

                                            </Col>
                                            <Col lg={6} xs={{ span: 0}} className="time">
                                                2019-08-31
                                            </Col>
                                        </Row>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </section>
                    <section key={3} style={{'height':this.state.offsetheight+'px'}}>
                        <div className="solution list">
                            <div className="section-box">
                                <p className="title-head">解决方案</p>
                                <div className="title-box">
                                    TheSolution
                                </div>
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                            <div className="contant">
                                <Row  gutter={28} >
                                    <Link to="/Products/0">
                                        <Col lg={6} xs={{ span: 12}} className="time">
                                            <Card hoverable
                                                  cover={<img alt="example" src={require('../../assets/img/product/jiewujing.png')} />}>
                                                <Meta
                                                    title="一体化智能截污井"
                                                />
                                            </Card>
                                        </Col>
                                    </Link>
                                    <Link to="/Products/0">

                                    <Col lg={6} xs={{ span: 12}} className="time">
                                        <Card hoverable
                                              cover={<img alt="example" src={require('../../assets/img/product/optionselect.jpg')} />}>
                                            <Meta
                                                title="微信小程序"
                                            />
                                        </Card>
                                    </Col>
                                    </Link>

                                    <Link to="/Products/0">

                                        <Col lg={6} xs={{ span: 12}} className="time">
                                        <Card hoverable
                                              cover={<img alt="example" src={require('../../assets/img/product/iw-q.jpg')} />}>
                                            <Meta
                                                title="景观瀑布翻板闸门"
                                            />
                                        </Card>
                                    </Col>
                                    </Link>

                                    <Link to="/Products/0">
                                            <Col lg={6} xs={{ span: 12}} className="time">
                                        <Card hoverable
                                              cover={<img alt="example" src={require('../../assets/img/product/shengtaixushui.png')} />}>
                                            <Meta
                                                title="生态蓄水钢坝"
                                            />
                                        </Card>
                                    </Col>
                                    </Link>
                                </Row>
                                <div></div>
                            </div>
                        </div>
                    </section>
                    <section key={4} style={{'height':this.state.offsetheight+'px'}} id="lianxi">
                        <div className="solution list">
                            <div className="section-box">
                                <p className="title-head">联系我们</p>
                                <div className="title-box">
                                    TheSolution
                                </div>
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                            <div className="contant">
                                <Row  gutter={28} >
                                    <Col lg={12} xs={{ span: 24}}>
                                        <Divider orientation="left">公司简介</Divider>
                                        <p>本公司专业从事景观水闸、水利闸门、启闭机等水工产品的研究和制造，集科研、设计、产品制造、工程施工、设备安装等环节于一身，形成了严格的生产质量体系和服务体系，为用户提供一条龙全方位的优质服务。现有专业技术人员多名，其余工人30余名；拥有各种大型加工设备。公司取得水利部颁发的启闭机许可证。公司严格执行ISO9001体系标准，连续多年获得AAA级资信企业，“重合同讲信用”称号，拥有多项专利证书。</p>
                                    </Col>
                                    <Col lg={12} xs={{ span: 24}} className="lianxi">
                                        <Divider orientation="right">联系方式</Divider>
                                        <p>联系人：沙先生</p>
                                        <p>联系电话：13482602940</p>
                                        <p>传真：69613032</p>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                        <Router>
                            <Route component={ty_foot} />
                        </Router>
                    </section>
                </div>
            </div>

        );
    }
}
export default Home;