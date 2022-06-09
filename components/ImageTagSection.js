import Link from 'next/link';

function ImageTagSection(props) {
    return (
        <>
            <div className="responsive-desktop">
                <div style={{
                    backgroundColor: "#EBE5DB", 
                    height: '42rem',
                    backgroundImage: `url(${props.backgroundImage})`,
                    backgroundSize: 'cover',
                    color: '#EBE5DB',
                }} className="w-full flex flex-col justify-end">
                    <div style={{paddingLeft: '50px', paddingRight: '50px'}} className="h-72 w-full">
                        <h1 className="ivyPrestoThin text-desktop-h1 lineHeight-desktop-123">
                            Boquet <em>Vaginal Prebiotic</em>
                        </h1>
                        <p className="coreSans text-desktop-p1 py-6">
                            A vaginal prebiotic tablet that's gentle and restorative.
                        </p>
                        <div className="h-24 flex flex-col justify-center">
                            <Link
                                href="/shop"
                                passHref
                            >
                                <a className="pl-0" aria-label="cart">
                                    <div style={{borderRadius: '50%', borderColor: '#EBE5DB'}} className="border w-48 h-20 flex flex-col justify-center">
                                            <p className="text-center text-desktop-p2 coreSans">
                                                SHOP BOQUET
                                            </p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="responsive-mobile">
                <div style={{
                    backgroundColor: "#EBE5DB", 
                    height: '42rem',
                    backgroundImage: `url(${props.backgroundImage})`,
                    backgroundSize: 'cover',
                    color: '#EBE5DB',
                }} className="w-full flex flex-col justify-end">
                    <div style={{paddingLeft: '16px', paddingRight: '16px'}} className="h-72 w-full">
                        <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-49px">
                            Boquet <br/> <em>Vaginal Prebiotic</em>
                        </h1>
                        <p className="coreSans text-mobile-p2 py-6 lineHeight-mobile-20px">
                            A vaginal prebiotic tablet that's gentle and restorative.
                        </p>
                        <div className="h-24 flex flex-col justify-center">
                            <Link
                                href="/shop"
                                passHref
                            >
                                <a className="pl-0" aria-label="cart">
                                    <div style={{borderRadius: '50%', borderColor: '#EBE5DB'}} className="border w-44 h-16 flex flex-col justify-center">
                                            <p className="text-center text-mobile-p3 coreSans">
                                                SHOP BOQUET
                                            </p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageTagSection;