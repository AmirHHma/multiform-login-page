import { createSlice } from "@reduxjs/toolkit";

type planTemplate={
    id:number,
    title:string,
    monthly:number,
    yearly:number
}

const AllPlans: planTemplate[]=[
        {id:1,title:'Arcade',monthly:9,yearly:90},
        {id:2,title:'Advanced',monthly:12,yearly:120},
        {id:3,title:'Pro',monthly:15,yearly:150},
    ]


let initialValue={
    plan:{},
    sumPrice:0,
    SelectedServices:[],
    allServices:[
        {id:1,title:'Online service',desc:'access to multiplayer games',monthly:1,yearly:10,checked:false},
        {id:2,title:'Larger storage',desc:'Extra 1TB of cloud save',monthly:2,yearly:20,checked:false},
        {id:3,title:'Customizable profile',desc:'Custom theme on your profile',monthly:2,yearly:20,checked:false},
    ],
}

let overallSummer=createSlice({
    name:'overallSummer',
    initialState:initialValue,
    reducers:{
        setPlan:(state,arg)=>{
            let temp=AllPlans.find(item=>item.id==arg.payload)
            state.plan=temp
        },
        setServices(state,payload){
            // let inThere=state.SelectedServices?.some(item=>item.id==payload.payload)
            let desiredService=state.allServices.find(item=>item.id==payload.payload)
            state.SelectedServices.push(desiredService)
        },
        removeServices:(state,payload)=>{
            state.SelectedServices=state.SelectedServices.filter(item=>item.id!=payload.payload)
        },
        setCheck:(state,payload)=>{
            state.allServices.map(item=>{
                if(item.id == payload.payload){
                    item.checked=true
                }
                return item
            })
            
        },
        removeCheck:(state,payload)=>{
            state.allServices.map(item=>{
                if(item.id == payload.payload){
                    item.checked=false
                }
                return item
            })
        },
        sumAll:(state,payload)=>{
            let servicesPrice= 0;
            if(payload.payload){
                for (const item of state.SelectedServices) {
                 servicesPrice+=item.yearly
                }
                servicesPrice+=state.plan.yearly
            }else{
                for (const item of state.SelectedServices) {
                    servicesPrice+=item.monthly
                   }
                   servicesPrice+=state.plan.monthly
            }
            state.sumPrice=servicesPrice
            
        }
    }
})

export const {setPlan,setServices,removeServices,setCheck,removeCheck,sumAll}=overallSummer.actions
export type showProps=ReturnType<typeof overallSummer.getInitialState>

export default overallSummer.reducer;