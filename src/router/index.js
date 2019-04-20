/** Created by wanan on 2019-03-16
 *作者:wanan
 */
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import ty_head from '../components/head/head';
import ty_home from '../components/home/home';
import ty_about from '../components/about/about';
import ty_new from '../components/new/new';
import ty_newdetail from '../components/newdetail/newdetail';
import ty_products from '../components/products/products';
import ty_contact from '../components/contact/contact';
function RouterIndex() {
    return (
        <Router>
            <Route component={ty_head} />
            <div>
                <Route exact path="/" component={ty_home} />
                <Route path="/About" component={ty_about} />
                <Route path="/News" component={ty_new} />
                <Route path="/Newdetail" component={ty_newdetail} />
                <Route path="/Products/:name" component={ty_products} />
                <Route path="/Contact" component={ty_contact} />
            </div>
        </Router>
    );
}

export default RouterIndex;