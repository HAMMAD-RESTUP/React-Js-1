import { Routes, Route,} from "react-router-dom";
import Home from "../pages/Home"
import Men from '../pages/men'
import Women from '../pages/women'
import Company from '../pages/company'
import Stores from '../pages/stores'
import Signin from '../pages/signin'
import Cart from '../pages/cart'
import Api from '../pages/api'
import Singlepost from '../pages/singlepost'
import { BrowserRouter } from "react-router-dom/dist";


export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
  
                <Routes>  
                    <Route path="/" element={<Home/>} />
                    <Route path="men" element={<Men/>} />
                    <Route path="women" element={<Women />} />
                    <Route path="store" element={<Stores />} />
                    <Route path="company" element={<Company />} />
                    <Route path="signin" element={<Signin />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="api/" element={<Api />} />
                    <Route path="singlepost" element={<Singlepost />} />
                </Routes>
            </BrowserRouter>

        </>
    )

}
