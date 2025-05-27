import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepChangerUL from "./StepChangerUL";
import { Route, Routes } from "react-router";

function Step() {
  return (
    <>
      <section
        className="grid align-middle place-items-center lg:grid-cols-[1fr_2fr] lg:grid-rows-1   lg:w-4xl xl:w-5xl xl:h-[38rem] lg:h-[32rem]  bg-Alabaster shadow-lg   lg:p-3 lg:rounded-xl  "
      >
        <div
          className="max-lg:bg-[url(./assets/bg-sidebar-mobile.svg)]  max-lg:w-full max-lg:h-2/5
                    max-lg:fixed max-lg:top-0 max-lg:left-0 bg-no-repeat bg-cover 
                    lg:bg-[url(./assets/bg-sidebar-desktop.svg)] relative z-10"
        ></div>
        <ul
          className="z-10 flex p-6 gap-7 lg:flex-col lg:row-start-1  lg:backPhone lg:w-full lg:h-full lg:items-start
        rounded-xl"
        >
          <StepChangerUL />
        </ul>
        <div className=" lg:h-full   z-10  lg:row-start-1 lg:col-start-2 p-3 rounded-xl  bg-Alabaster">
          <div className="z-10   lg:h-full">
            <div className="lg:h-full lg:w-xl">
              <Routes>
                <Route path="/multiform-login-page" element={<StepOne />}></Route>
                <Route path="/plan" element={<StepTwo />}></Route>
                <Route path="/service" element={<StepThree />}></Route>
                <Route path="/review" element={<StepFour />}></Route>
                <Route path="/done" element={<StepFive />}></Route>
              </Routes>
            </div>
          </div>
        </div>
        {/* <StepChanger currStep={currStep} /> */}
      </section>
    </>
  );
}

export default Step;
