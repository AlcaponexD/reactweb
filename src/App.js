import React , { Component }from 'react';
import Header from './components/Header'
import './styles.css';
import Routes from './routes'

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
        <Routes/>
    </div>
);

export default App;
