import React , { Component }from 'react';
import Header from './components/Header'
import './styles.css';
import Main from './pages/main';

// class App extends Component{
//     render(){
//         return (
//             <div className="App">
//                 <h1>Hello Word</h1>
//             </div>
//         )
//     }
// }

const App = () => (
    <div className="App">
        <Header/>
        <Main/>
    </div>
);

export default App;
