import Marquee from "react-fast-marquee";

function GentleAndRestorative() {

    return (
        <>
            <div className="responsive-desktop">
                <div style={{backgroundColor: '#283F91', color: '#EBE5DB'}} className="h-36 w-full flex flex-col justify-center">
                <div className="h-14 w-full overflow-hidden whitespace-nowrap">
                <Marquee gradient={false} speed={50}>
                    <h2 className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-123 inline mr-28">
                        <em>Gentle</em> and <em>restorative</em>
                        <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" />
                    </h2>

                    <h2 className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-123 inline mr-28">
                        <em>Gentle</em> and <em>restorative</em>
                        <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" />
                    </h2>

                    <h2 className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-123 inline mr-28">
                        <em>Gentle</em> and <em>restorative</em>
                        <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" />
                    </h2>
                </Marquee>  
                </div>
                </div>
            </div>



            <div className="responsive-mobile">
                <div style={{backgroundColor: '#283F91', color: '#EBE5DB'}} className="h-28 w-full flex flex-col justify-center">
                <div className="h-14 w-full overflow-hidden whitespace-nowrap">
                <Marquee gradient={false} speed={50}>
                    <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px inline mr-28">
                        <em>Gentle</em> and <em>restorative</em>
                        <img alt="pill" className="w-16 h-16 inline object-contain ml-28" src="/pill.svg" />
                    </h1>

                    <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px inline mr-28">
                        <em>Gentle</em> and <em>restorative</em>
                        <img alt="pill" className="w-16 h-16 inline object-contain ml-28" src="/pill.svg" />
                    </h1>

                    <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px inline mr-28">
                        <em>Gentle</em> and <em>restorative</em>
                        <img alt="pill" className="w-16 h-16 inline object-contain ml-28" src="/pill.svg" />
                    </h1>
                </Marquee>  
                </div>
                </div>
            </div>

            <div className="responsive-tablet">
                <div style={{backgroundColor: '#283F91', color: '#EBE5DB'}} className="h-28 w-full flex flex-col justify-center">
                <div className="h-14 w-full overflow-hidden whitespace-nowrap">
                <Marquee gradient={false} speed={50}>
                    <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px inline mr-28">
                        <em>Gentle</em> and <em>restorative</em>
                        <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" />
                    </h2>

                    <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px inline mr-28">
                        <em>Gentle</em> and <em>restorative</em>
                        <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" />
                    </h2>

                    <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px inline mr-28">
                        <em>Gentle</em> and <em>restorative</em>
                        <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" />
                    </h2>
                </Marquee>  
                </div>
                </div>
            </div>
        </>
    )
  }
  
  export default GentleAndRestorative
  