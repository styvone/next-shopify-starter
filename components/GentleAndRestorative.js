import Marquee from "react-fast-marquee";

function GentleAndRestorative() {
    return (
        <div style={{backgroundColor: '#283F91', color: '#EBE5DB'}} className="h-28 w-full flex flex-col justify-center">
            <div className="h-14 w-full overflow-hidden whitespace-nowrap">
            <Marquee gradient={false} speed={50}>
                <h1 className="ivyPrestoThin text-5xl inline mr-28">
                    <em>Gentle</em> and <em>restorative</em>
                    <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" />
                </h1>

                <h1 className="ivyPrestoThin text-5xl inline mr-28">
                    <em>Gentle</em> and <em>restorative</em>
                    <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" />
                </h1>

                <h1 className="ivyPrestoThin text-5xl inline mr-28">
                    <em>Gentle</em> and <em>restorative</em>
                    <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" />
                </h1>
            </Marquee>  
            </div>
        </div>
    )
  }
  
  export default GentleAndRestorative
  