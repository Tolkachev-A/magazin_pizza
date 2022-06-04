import './scss/app.scss';
import {Header} from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Hom from "./pages/Hom";
import Basket from "./pages/Basket";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="wrapper">
                    <Header/>
                    <div className="content">
                        <Routes>
                            <Route path={'/'} element={<Hom/>}/>
                            <Route path={'basket'} element={<Basket/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;
