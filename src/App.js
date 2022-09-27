import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/common/Header";
import './assets/styles/App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <AppRouter className={"fds"}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
