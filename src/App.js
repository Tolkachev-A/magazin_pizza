import './scss/app.scss';
import {Header} from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Hom from "./pages/Hom";
import Cart from "./pages/Cart";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="wrapper">
                    <Header/>
                    <div className="content">
                        <Routes>
                            <Route path={'/'} element={<Hom/>}/>
                            <Route path={'cart'} element={<Cart/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;
