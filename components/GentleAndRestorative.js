import Marquee from "react-fast-marquee";
import Image from 'next/image';

import pillImage from '../public/pill.svg';

function GentleAndRestorative() {

    return (
        <>
            <div className="responsive-desktop">
                <div style={{backgroundColor: '#283F91', color: '#F4F0E8'}} className="h-36 w-full flex flex-col justify-center">
                <div className="h-14 w-full overflow-hidden whitespace-nowrap">
                <Marquee gradient={false} speed={50}>
                    <div className="flex flex-col justify-center">
                        <h2 className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-123 inline">
                            <em>Gentle</em> and <em>restorative</em>
                            {/* <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" /> */}
                        </h2>
                    </div>
                    <div className="inline-block relative w-14 h-14 object-contain mx-28">
                            <Image src={pillImage} alt="pill image" layout="fill" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-123 inline">
                            <em>Gentle</em> and <em>restorative</em>
                            {/* <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" /> */}
                        </h2>
                    </div>
                    <div className="inline-block relative w-14 h-14 object-contain mx-28">
                            <Image src={pillImage} alt="pill image" layout="fill" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-123 inline">
                            <em>Gentle</em> and <em>restorative</em>
                            {/* <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" /> */}
                        </h2>
                    </div>
                    <div className="inline-block relative w-14 h-14 object-contain mx-28">
                            <Image src={pillImage} alt="pill image" layout="fill" />
                    </div>
                </Marquee>  
                </div>
                </div>
            </div>



            <div className="responsive-mobile">
                <div style={{backgroundColor: '#283F91', color: '#F4F0E8'}} className="h-28 w-full flex flex-col justify-center">
                <div className="h-14 w-full overflow-hidden whitespace-nowrap flex flex-col justify-center">
                <Marquee gradient={false} speed={50}>
                    <div className="flex flex-col justify-center">
                        <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px inline">
                            <em>Gentle</em> and <em>restorative</em>
                            {/* <img alt="pill" className="w-16 h-16 inline object-contain ml-28" src="/pill.svg" /> */}
                        </h1>
                    </div>
                    <div className="inline-block relative w-16 h-16 object-contain mx-28">
                        <Image src={pillImage} alt="pill image" layout="fill" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px inline">
                            <em>Gentle</em> and <em>restorative</em>
                            {/* <img alt="pill" className="w-16 h-16 inline object-contain ml-28" src="/pill.svg" /> */}
                        </h1>
                    </div>
                    <div className="inline-block relative w-16 h-16 object-contain mx-28">
                        <Image src={pillImage} alt="pill image" layout="fill" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px inline">
                            <em>Gentle</em> and <em>restorative</em>
                            {/* <img alt="pill" className="w-16 h-16 inline object-contain ml-28" src="/pill.svg" /> */}
                        </h1>
                    </div>
                    <div className="inline-block relative w-16 h-16 object-contain mx-28">
                        <Image src={pillImage} alt="pill image" layout="fill" />
                    </div>           
                </Marquee>  
                </div>
                </div>
            </div>

            <div className="responsive-tablet">
                <div style={{backgroundColor: '#283F91', color: '#F4F0E8'}} className="h-28 w-full flex flex-col justify-center">
                <div className="h-14 w-full overflow-hidden whitespace-nowrap">
                <Marquee gradient={false} speed={50}>
                    <div className="flex flex-col justify-center">
                        <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px inline">
                            <em>Gentle</em> and <em>restorative</em>
                            {/* <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" /> */}
                        </h2>
                    </div>
                    <div className="inline-block relative w-14 h-14 object-contain mx-28">
                        <Image src={pillImage} alt="pill image" layout="fill" />
                    </div>  


                    <div className="flex flex-col justify-center">
                        <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px inline">
                            <em>Gentle</em> and <em>restorative</em>
                            {/* <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" /> */}
                        </h2>
                    </div>
                    <div className="inline-block relative w-14 h-14 object-contain mx-28">
                        <Image src={pillImage} alt="pill image" layout="fill" />
                    </div>  


                    <div className="flex flex-col justify-center">
                        <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px inline">
                            <em>Gentle</em> and <em>restorative</em>
                            {/* <img alt="pill" className="w-14 h-14 inline object-contain ml-28" src="/pill.svg" /> */}
                        </h2>
                    </div>
                    <div className="inline-block relative w-14 h-14 object-contain mx-28">
                        <Image src={pillImage} alt="pill image" layout="fill" />
                    </div>  
                </Marquee>  
                </div>
                </div>
            </div>
        </>
    )
  }
  
  export default GentleAndRestorative
  