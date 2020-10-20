import React, { Component } from 'react';
import Rea from "./Rea";
import Doc from "./Doc";
import Jiaocheng from './Jiaocheng';
import Boke from './Boke';
import Shequ from './Shequ'
import { 
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li style={{listStyle:"none",float:'left',width:"20%",margin:'0 auto'}}>
                                <Link to="./rea">React</Link>
                            </li>
                            <li style={{listStyle:"none",float:'left',width:"20%",margin:'0 auto'}}>
                                <Link to='./doc'>文档</Link>
                            </li>
                            <li style={{listStyle:"none",float:'left',width:"20%",margin:'0 auto'}}>
                                <Link to='./jiaocheng'>教程</Link>
                            </li>
                            <li style={{listStyle:"none",float:'left',width:"20%",margin:'0 auto'}}>
                                <Link to='./boke'>博客</Link>
                            </li>
                            <li style={{listStyle:"none",float:'left',width:"20%",margin:'0 auto'}}>
                                <Link to='./shequ'>社区</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Route exact path='/' component={Rea}/>
                        <Route path='/doc' component={Doc}/>
                        <Route path='/jiaocheng' component={Jiaocheng}/>
                        <Route path='/boke' component={Boke}/>
                        <Route path='/shequ' component={Shequ}/>
                    </div>
                </Router>
            </div>
        )
    }
}    