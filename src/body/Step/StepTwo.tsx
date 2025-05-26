import Template from "./StepTemplate";
import ToggleButton from "./PaymentToggle";

import { BsJoystick } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setPlan } from "../../redux/slices/overallSummer";
import { ReactNode } from "react";
import Button from "./StepButtons";
import { useNavigate } from "react-router";



function StepTwo() {
    let paymentState=useSelector((state:RootState)=>state.overallSummer.plan)
    const navigate=useNavigate()
    type PaymentBox ={
        id:number,
        icon:ReactNode,
        title:string,
        monthly:number,
        yearly:number,
        iconColor:string,
    }
    let PaymentBoxArr:PaymentBox[]=[
        {id:1,icon:BsJoystick(null),title:'Arcade',monthly:9,yearly:90,iconColor:'bg-amber-400'},
        {id:2,icon:FaGamepad(null),title:'Advanced',monthly:12,yearly:120,iconColor:'bg-pink-400'},
        {id:3,icon:IoGameController(null),title:'Pro',monthly:15,yearly:150,iconColor:'bg-Purplish-blue'},
    ]
    let goNext=()=>Object.keys(paymentState).length!==0 ? navigate('/service') : alert('select a plan first')
    


    return ( <>

                <Template title={'Select your plan'} desc={'You have the option of monthly or yearly billing'}>
                    
                    <div  className="grid gap-4 lg:grid-cols-3 ">
                        {PaymentBoxArr.map(Box=>{
                            return <PaymentBoxTemp key={Box.id} {...Box}></PaymentBoxTemp>
                        })}
                    </div>
                    <div className="flex justify-center mt-5 gap-10 ">
                        <ToggleButton/>
                    </div>
                    <Button valid={goNext} prev={'/'}/>
                </Template>

    </> );
}
function PaymentBoxTemp({id,icon,title,monthly,iconColor,yearly}) {
    let paymentState=useSelector((state:RootState)=>state.setMethod.value)
    let currPlan=useSelector((state:RootState)=>state.overallSummer.plan)
    const Dispatch=useDispatch()
    
    function handleClick(){
            Dispatch(setPlan(id))
    }


    
    return ( <>
            <div className="has-checked:bg-Magnolia ring-1 hover:ring-Purplish-blue peer-checked:ring-Purplish-blue p-3  rounded-lg"  onChange={handleClick}> 
                <label  htmlFor={`levelBTN${id}`}>
                <input readOnly checked={id===currPlan.id} id={`levelBTN${id}`} name="radioLevel" className="peer hidden"  type="radio" />
                    <div className="flex items-centerring-1  ring-Cool-gray
                     rounded-lg gap-4 lg:grid lg:grid-cols-1  lg:aspect-squar " key={title}>
                            <i className= {` ${iconColor}    text-2xl lg:p-2.5 p-3 mb-5  text-white rounded-full block justify-self-start `}> {icon}</i>
                        <div>
                            <h4 className="font-UbuntoBold text-Marine-blue">{title}</h4>
                            <p className="text-Cool-gray">{`$${paymentState ? yearly+'/yr' : monthly+'/mo'}`}</p>
                            {paymentState ? <p className="font-UbuntoMedium text-Marine-blue text-xs">2 months free</p> : null}
                        </div>
                    </div>
                </label>
            </div>
    </> );
}


export default StepTwo;