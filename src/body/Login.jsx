import { BrowserRouter, Route, Routes } from 'react-router';
import StepChangerUL from './Step/StepChangerUL';
import Step from './Step/Steps'

function Login () {
    return ( <>
    <section className="bg-Light-gray  w-screen h-screen flex justify-center relative items-center">
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Step/>}/>
            </Routes> 
        </BrowserRouter>
    </section>
    </> );
}

export default  Login;