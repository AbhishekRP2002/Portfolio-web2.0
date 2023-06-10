import Home from "./Home";
import TalktoMe from "./components/TalktoMe"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/talktome" element={<TalktoMe />} />
        </Routes>
    </BrowserRouter>
);


}

export default App;