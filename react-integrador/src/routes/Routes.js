import {Routes as ReactDomRoutes, Route} from 'react-router-dom'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Checkout from '../pages/Checkout/Checkout'
import Register from '../pages/Register/Register'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

function Routes(){
    return(
        <ReactDomRoutes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            
            <Route path= '/Register' element={<Register />}/>
            <Route 
            path='/Checkout'
            element ={
                <ProtectedRoute redirectTo='/Register'>
                    <Checkout />
                </ProtectedRoute>
            }
            /> 

        </ReactDomRoutes>
    )
}

export default Routes