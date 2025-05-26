import Template from "./StepTemplate";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { removeCheck, removeServices, setCheck, setServices } from "../../redux/slices/overallSummer";
import Button from "./StepButtons";
import { useNavigate } from "react-router";
function StepThree() {
    type serviceType={
        id:number,
        title:string,
        desc:string,
        monthly:number,
        yearly:number,
        // [check,setCheck]:ReactFormState,
    }
    let serviceArr=useSelector((State:RootState)=>State.overallSummer.allServices)
    let selectedServices=useSelector((state:RootState)=>state.overallSummer.SelectedServices)
    const navigate=useNavigate()
    const goNext=()=>selectedServices.length!==0 ? navigate('/review') : alert('choose a service')

    return (<>
                <Template title={'Pick add-ons'} desc={'Add-ons help enhance your gaming experience.'}>
                        {serviceArr.map(box=><ServiceBox key={crypto.randomUUID()} {...box}/>)}
                        <Button  prev={'/plan'} valid={goNext}/>
                </Template>
    </> );
}

function ServiceBox({title,desc,monthly,yearly,id,checked}){
    let payingMethod=useSelector((state:RootState)=>state.setMethod.value)
    const dispatch=useDispatch()
    let isCheck=useSelector((state:RootState)=>state.overallSummer.allServices)
    function change(e){
        if(e.target.checked){
            dispatch(setServices(id))
            dispatch(setCheck(id))
        }else{
            dispatch(removeCheck(id))
            dispatch(removeServices(id))
        }


    }
    return(<>
        <div >
            <label  htmlFor={`check${id}`}>
                <div className="flex items-center ring ring-Cool-gray p-2 lg:p-3 xl:p-5 has-checked:ring-Purplish-blue rounded-lg
                has-checked:bg-Magnolia ">
                <input checked={checked} onChange={change} id={`check${id}`} className="appearance-none size-4 rounded-md border  
                                         checked:bg-Purplish-blue mr-3 " type="checkbox" />
                    <div   className="grow">
                        <h4 className="font-UbuntoMedium  text-Marine-blue lg:font-UbuntoBold ">{title}</h4>
                         <p className="text-xs text-Cool-gray lg:text-base">{desc}</p>
                     </div>
                    <h4 className="text-Purplish-blue">{`+$${payingMethod ? yearly+'/yr' :monthly+'/mo'}`}</h4>
                </div>
            </label>
        </div>
    </>)
}

export default StepThree;