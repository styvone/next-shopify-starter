import Link from 'next/link';

function ImageTagSection(props) {
    return (
        <div style={{
            backgroundColor: "#EBE5DB", 
            height: '42rem',
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundSize: 'cover',
            color: '#EBE5DB',
        }} className="w-full flex flex-col justify-end">
            <div style={{paddingLeft: '50px', paddingRight: '50px'}} className="h-72 w-full">
                <h1 className="ivyPrestoThin text-6xl">
                    Boquet <em>Vaginal Prebiotic</em>
                </h1>
                <h2 className="coreSans text-xl py-6">
                    A vaginal prebiotic tablet that's gentle and restorative.
                </h2>
                <div className="h-24 flex flex-col justify-center">
                    <Link
                        href="/shop"
                        passHref
                    >
                        <a className="coreSans pl-0 text-" aria-label="cart">
                            <div style={{borderRadius: '50%', borderColor: '#EBE5DB'}} className="border w-48 h-20 flex flex-col justify-center">
                                    <h1 className="text-center">
                                        SHOP BOQUET
                                    </h1>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ImageTagSection;