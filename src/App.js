import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/common/Header";
import './assets/styles/App.css';
import Footer from "./components/common/Footer";
import {Provider} from "react-redux";
import {store} from "./store/Store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <AppRouter/>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
