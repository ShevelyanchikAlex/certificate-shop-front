import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/common/Header";
import './assets/styles/App.css';
import Footer from "./components/common/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
