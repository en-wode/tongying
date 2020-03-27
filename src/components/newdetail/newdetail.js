/** Created by wanan on 2019-03-16
 *作者:wanan
 */
import React from "react";
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import newdata from '../../assets/json/news'
require(`./newdetail.css`);

class ty_newdetail extends React.Component{
    state = {
        current: 'Newdetail',
        ndata: ''
    }
    componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        const num = _this.props.location.pathname.charAt(_this.props.location.pathname.length-1);
        this.setState({
            ndata: newdata.news[num],
        });
    }
    render(){
        return(
            <div className="newdetail">
                <nav>
                    <img src={require("../../assets/img/about/anli1.jpg")}  alt=""/>
                </nav>
                <section>
                  <h3>{this.state.ndata.title}</h3>
                  <p className="time">日期：{this.state.ndata.time}</p>
                  <article dangerouslySetInnerHTML  = {{ __html:this.state.ndata.content }}>
                  </article>
                </section>
            </div>
        );
    }
}

export default ty_newdetail;