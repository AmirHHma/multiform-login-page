function Template({title,desc,children}) {
    return ( <>
        <div  className="     px-8 py-7 lg:h-full   lg:p-5 gap-5 rounded-lg lg:mt-5 relative z-10 flex flex-col bg-Alabaster  ">
            <div>
                <h2 className="font-bold text-Marine-blue text-2xl sm:font-UbuntoBold  lg:py-1 lg:font-UbuntoMedium  lg:text-4xl  ">{title}</h2>
                <p className="font-UbuntoRegular text-base text-Cool-gray  lg:text-lg">{desc}</p>
            </div>
            <div className=" grid gap-4 ">
                {children}
            </div>
            
        </div>
    </> );
}

export default Template;