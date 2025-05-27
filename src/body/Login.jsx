import { BrowserRouter, Route, Routes } from 'react-router';
import Step from './Step/Steps'

function Login () {
    return ( <>
    <section style={{backgroundColor:' hsl(229, 24%, 87%)'}} className="  w-screen h-screen flex justify-center  items-center">
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Step/>}/>
            </Routes> 
        </BrowserRouter>
    </section>
    </> );
}

export default  Login;