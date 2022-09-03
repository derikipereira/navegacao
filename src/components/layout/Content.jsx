import "./Content.css"

import Home from "../../views/examples/Home"
import About from "../../views/examples/About"
import Param from "../../views/examples/Param"
import NotFound from "../../views/examples/NotFound"

import { Routes, Route} from "react-router-dom";
import React from "react"

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </main>
)

export default Content