import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router";


function StepChangerUL() {
    const dispatch=useDispatch()
    let listChildren=[
        {id:1,desc:'YOUR INFO',url:'/'},
        {id:2,desc:'SELECT PLAN',url:'/plan'},
        {id:3,desc:'ADD-ONS',url:'/service'},
        {id:4,desc:'SUMMARY',url:'/review'},
    ]
    let loc:string=useLocation().pathname


    return ( <>
        {listChildren.map(item=>
        
        
            <li key={item.id}  className="flex gap-3">
                <label  htmlFor={''+item.id} >
                    <input readOnly  checked={item.url==loc}   className="hidden peer"  id={''+item} type="radio" name="meodeo" />
                    <span className="flex justify-center font-UbuntoBold items-center  text-white ring-white peer-checked:ring-Light-blue
                    peer-checked:active-step rounded-full size-8 ring ">{item.id}</span>
                </label>
                <div className="text-white font-UbuntoMedium text-xs tracking-widest hidden lg:block">
                        <h5 className="text-Cool-gray">STEP {item.id}</h5>
                        <p className="lg:text-base lg:font-UbuntoBold"> {item.desc}</p>
                </div>
            </li>
        )}
        

    </> );
}

export default StepChangerUL;