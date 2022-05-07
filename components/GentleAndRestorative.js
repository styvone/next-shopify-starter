import Marquee from "react-fast-marquee";

function GentleAndRestorative() {
    return (
        <div style={{backgroundColor: '#283F91', color: '#EBE5DB'}} className="h-28 w-full flex flex-col justify-center">
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
    )
  }
  
  export default GentleAndRestorative
  