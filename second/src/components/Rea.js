import React, { Component } from 'react';
import {
    TextField,
} from 'react';
// import { 
//     HashRouter as Route,
// } from 'react-router-dom';
// import Doc from './Doc';
// import Jiaocheng from './Jiaocheng';
// import {Button} from 'antd';
export default class Rea extends Component {
    render() {
        return (
            <div>
                <h1 style={{alignItems :"center"}}>React</h1>
                <TextField style={{alignItems :"center"}}>用于构建用于界面的JavaScript库</TextField>
                {/* <div>
                    <Button size="large">
                        <Route path='/doc' component={Doc}>文档</Route>
                    </Button>
                    <Button size="large">
                        <Route path='/jiaocheng' component={Jiaocheng}>教程</Route>
                    </Button>
                </div> */}
            </div>
        )
    }
}