import Tick from "../../assets/icon-thank-you.svg";

function StepFive() {
  return (
    <>
      <div className="w-full h-full  items-center " >
        <div className=" max-sm:w-5/6 px-8 py-20 rounded-lg  grid place-items-center gap-4 ">
          <img className="size-15 lg:size-20 lg:m-2" src={Tick} alt="ThankYou" />
          <h2 className="font-UbuntoBold text-2xl text-Marine-blue">
            Thank You!
          </h2>
          <p className="text-center font-UbuntoMedium text-Cool-gray ">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support. please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      </div>
    </>
  );
}

export default StepFive;
