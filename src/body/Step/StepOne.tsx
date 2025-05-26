import { useNavigate } from "react-router";
import Button from "./StepButtons";
import Template from "./StepTemplate";
import { useRef, useState } from "react";




function StepOne() {
    const navigate=useNavigate()
    let inputContainer=useRef<HTMLDivElement>(null)
    let [valid,setValid]=useState(false)

    const handleSubmit=event=>{
    
    
    event.preventDefault()
    let inputs=Array.from(inputContainer.current.children) as HTMLInputElement[]
    inputs.forEach(item=>{
        let inputValue=item.lastChild
        if(!inputValue.value.trim()){
            item.classList.add('invalidInput')
        }else{
            item.classList.remove('invalidInput')
        }

    })


    inputs.every(item=>item.lastChild.value) && navigate('/plan')
}
const handleInput=e=>{
        e.target.parentElement.classList.remove('invalidInput')
        if(!e.target.value.trim()){
            e.target.parentElement.classList.add('invalidInput')
            setValid(false)
        }
}
function Inputs({type,PH,name,regex=null}){
    return(<>
    <div className="relative">
            <label htmlFor="phone" >{name}</label>
            <input onInput={handleInput}   pattern={regex} placeholder={PH} id="phone"
            type={type} className={`outline rounded-md w-full px-2 font-UbuntoBold text-sm  focus:outline-Marine-blue py-2.5 outline-Cool-gray  placeholder:text-Cool-gray peer mt-2 ${type=='number' && 'inputNumberRemove'}`} />
        </div>

    </>)
}
const goNext=()=>valid && navigate('/plan')


    let inputArr=[
        {id:1,type:'text',PH:'e.g. Stephen King',name:'Name'},
        {id:2,type:'email',PH:'e.g. stephenking@lorem.com',name:'Email Address'},
        {id:3,type:'number',PH:'e.g. +1 234 567 890',name:'Phone Number',regex:'[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+'},
    ]




    return ( <>
    <Template title={'Personal info'} desc={'Please provide your name, email, address and phone number.'}>
            <form id="meo12" onSubmit={(event)=>handleSubmit(event)} className="flex flex-col gap-5">
                <div ref={inputContainer} className="grid gap-5">
                        {inputArr.map(item=><Inputs key={item.id} {...item}/>)}
                </div>
                <Button valid={goNext}  prev={'/'} />
            </form>
    </Template>
    </> );
}


export default StepOne;