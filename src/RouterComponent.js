import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginComponent from './LoginComponent';

function RouterComponent(){
    return(
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>} />
                        {/* <Route path="/product" element={<ProductComponent />} /> */}
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default RouterComponent;