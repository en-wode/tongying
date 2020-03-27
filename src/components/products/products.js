/** Created by wanan on 2019-03-16
 *作者:wanan
 */
import React from "react";
import { Menu} from 'antd';
import productdata from '../../assets/json/product'

require('./products.css');

class ty_Products extends React.Component{
    state = {
        current: 'Products',
        detail: 'product',
        pdata: '',
        num: ''
    }
    handleClick = (e) => {
        this.setState({
            detail: e.key,
        });
    }
    componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        const num = _this.props.location.pathname.charAt(_this.props.location.pathname.length-1);
        this.setState({
            num: num,
            pdata: productdata.product[num],
        });
    }
    componentDidUpdate(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        const num = _this.props.location.pathname.charAt(_this.props.location.pathname.length-1);
        if (_this.state.num != num){
            _this.setState({
                pdata: productdata.product[num],
                num: num
            });
        }

    }
    render(){
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
                    </Menu>
                    <section>
                        <div>
                          <h2>{this.state.pdata.title}</h2>
                          <p dangerouslySetInnerHTML  = {{ __html:this.state.pdata.content }}></p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default ty_Products;