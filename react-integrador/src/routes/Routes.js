import {Routes as ReactDomRoutes, Route} from 'react-router-dom'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Checkout from '../pages/Checkout/Checkout'

function Routes(){
    return(
        <ReactDomRoutes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/Checkout' element={<Checkout />}/>
        </ReactDomRoutes>
    )
}

export default Routes