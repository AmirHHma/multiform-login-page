import { Link, useLocation, useNavigate } from "react-router";
const Button = ({prev,valid}) => {
    let LOC=useLocation().pathname
    let navigate=useNavigate()
    return ( 
        <div className="grid  grid-cols-2 text-sm w-full  gap-10 lg:absolute lg:bottom-10 lg:left-0">
            {
            LOC!=='/' && <Link to={prev}>
                            <button  className="font-UbuntoBold hover:text-Marine-blue transition-colors duration-200
                             text-Cool-gray justify-self-start cursor-pointer" type="button">
                            Go back</button>
                         </Link>
            }
            
           <button onClick={valid}   type="submit" className="bg-Marine-blue py-2.5 px-5 rounded-md col-start-2 justify-self-end text-white cursor-pointer">
            {LOC==='/review' ? 'Confirm' : 'Next step'}
            </button>
        </div>
     );
}
 
export default Button;

