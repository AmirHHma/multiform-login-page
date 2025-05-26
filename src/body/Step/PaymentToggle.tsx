import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setPaymentMethod ,setMonthly,setYearly} from '../../redux/slices/payingMethod';
import { RootState } from '../../redux/store';

function ToggleButton() {
  let paymentState=useSelector((state:RootState)=>state.setMethod.value)

  const dispatch=useDispatch()

  return (
    <div className='flex justify-center w-full lg:bg-Magnolia lg:p-3 rounded-lg'>
        <div  className="flex   items-center gap-4 ">

        <label className={`${!paymentState ? 'font-semibold' : ''}`} onClick={()=>dispatch(setMonthly())}  htmlFor="switch">Monthly</label>
        
        <button onClick={()=>dispatch(setPaymentMethod())} className={`relative h-5 w-10 flex items-center ring-1 duration-300 transition-colors rounded-full  ${paymentState ? 'bg-Purplish-blue' : 'bg-white'}`}>
          <span className={`size-4 bg-Purplish-blue absolute duration-300 transition-transform left-0 rounded-full ${paymentState ? 'translate-x-5 bg-white  ' : 'translate-x-1'}`} ></span>
        </button>

        <label onClick={()=>dispatch(setYearly())} className={`${paymentState ? 'font-semibold' : ''}`}  htmlFor="switch">Yearly</label>
        
      </div>
    </div>
  );
}

export default ToggleButton;