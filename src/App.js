import './App.css';

import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './screen/Home/Home';
function App() {
    return (
        <div className="App" >
            <Header />
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;