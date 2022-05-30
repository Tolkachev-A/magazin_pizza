import './scss/app.scss';
import {Header} from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Hom from "./pages/Hom";
import Basket from "./pages/Basket";
import {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [pizza, setPizza] = useState([])

    useEffect(  ()=>{
        async function fetchPizzas(){
            let respons = await axios.get('http://localhost:3000/db.json')
            setPizza( await respons.data.pizzas)
        }
        fetchPizzas()
    }, [])


    return (
        <BrowserRouter>
            <div className="App">
                <div className="wrapper">
                    <Header/>
                    <div className="content">
                        <Routes>
                            <Route path={'/'} element={<Hom pizza={pizza}/>}/>
                            <Route path={'basket'} element={<Basket/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;
