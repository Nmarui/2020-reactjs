import React, { Component } from 'react';
// import {
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// const routes = [
//     {
//         path: "/",
//         exact:true,
//     },
//     {
//         path:'/doc',
//         pri:true,
//         routes:[
//             {
//                 path:"/doc/core",
//                 component:Core
//             },
//             {
//                 path: "/doc/guide",
//                 component: Guide
//             },
//             {
//                 path: "/doc/api",
//                 component: Api
//             },
//             {
//                 path: "/doc/hooks",
//                 component: Hooks
//             }
//         ]
//     },
    
//   ];
  
// export default class Doc extends Component {
//     render() {
//         return (
//             <div>
//                 <div style={{width:'70%'}}>
//                     <Switch>
//                         {routes.map((route, i) => (
//                             <RouteWithSubRoutes key={i} {...route} />
//                         ))}
//                     </Switch>
//                 </div>
//                 <div style={{width:'20%'}}>
//                 <ol>  
//                     <Link to="/hexin">核心概念</Link> 
//                     <Link to="/gaoji">高级指引</Link>
//                     <Link to="/api">API</Link>
//                     <Link to="/hooks">Hooks</Link>
//                 </ol>
//                 </div>
//             </div>
//         )
//     }
// }
// function RouteWithSubRoutes(route) {
//     return (
//       <Route
//         path={route.path}
//         render={props => (
//           <route.component {...props} routes={route.routes} />
//         )}
//       />
//     );
// }
  
// function Core() {
//     return <h1>core</h1>;
// }
// function Guide() {
//     return <h1>guide</h1>;
// }
// function Api() {
//     return <h1>api</h1>;
// }
// function Hooks() {
//     return <h1>hooks</h1>;
// }
export default class Doc extends Component {
    render() {
        return (
            <div>
                <div style={{width:"70%",float:'left'}}>
                    <h1>核心概念</h1>
                </div>
                <div style={{width:'30%',float:'left'}}>
                    <ul>
                        <li>核心概念</li>
                        <li>高级指引</li>
                        <li>API</li>
                        <li>Hooks</li>
                    </ul>
                </div>
                
            </div>
        )
    }
}