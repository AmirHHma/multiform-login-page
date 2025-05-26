import { useDispatch, useSelector } from "react-redux";
import Template from "./StepTemplate";
import { RootState } from "../../redux/store";
import {  useEffect } from "react";
import { sumAll } from "../../redux/slices/overallSummer";
import Button from "./StepButtons";
import { useNavigate,Link } from "react-router";
import StepTwo from "./StepTwo";

function StepFour() {
    type planTemplate={
        id:number,
        title:string,
        monthly:number,
        yearly:number
    }

    
    let overAllPlan:planTemplate=useSelector((state:RootState)=>state.overallSummer.plan)
    let overAllServices=useSelector((state:RootState)=>state.overallSummer.SelectedServices)
    let payingMethod=useSelector((state:RootState)=>state.setMethod.value)
    let overAllPrice=useSelector((State:RootState)=>State.overallSummer.sumPrice)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(sumAll(payingMethod))
    },[])
    const navigate=useNavigate()
    
    return ( <>

                <Template title={'Finishing up'} desc={'Double-check everything looks OK before confirming.'} >

                    <div>
                        <div className=" bg-Magnolia rounded-lg">
                            <div className="p-3 lg:p-5  ">
                                <div className="border-b   border-Cool-gray ">
                                    <div className="flex justify-between">
                                        <h5 className="font-UbuntoBold text-Marine-blue">{`${overAllPlan.title} (${payingMethod ? 'yearly' : 'monthly'})`}</h5>
                                        <h5 className="font-UbuntoBold text-Marine-blue ">{payingMethod ? `$${overAllPlan.yearly}/yr` : `$${overAllPlan.monthly}/mo`}</h5>
                                    </div>
                                    <div className="pb-2">
                                       <Link  to={'/plan'}>  <span className="underline text-Cool-gray " >change</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-2 lg:px-7 grid gap-3 xl:gap-5">
                                {overAllServices.map(item=>
                                    <div className="text-Cool-gray font-UbuntoMedium flex justify-between " key={item.id}>
                                        <h6>{item.title}</h6>
                                        <h6 className="text-Marine-blue font-UbuntoBold">{payingMethod ? `+$${item.yearly}/yr` : `+$${item.monthly}/mo`}</h6>
                                    </div>
                                )}
                            </div>
                        </div> 
                        <div className="flex justify-between px-3 pt-5 xl:pt-10">
                                <h4 className="text-Cool-gray font-UbuntoMedium">{`Total (${payingMethod ? 'per year' : 'per month'})`}</h4>
                                <h4 className="font-UbuntoBold text-Purplish-blue lg:text-xl ">{`+$${overAllPrice}/${payingMethod ? 'yr' : 'mo'}`}</h4>
                        </div> 
                    </div>
                    <Button prev={'/service'}  valid={()=>navigate('/done')}/>

                </Template>
    </> );
}

export default StepFour;