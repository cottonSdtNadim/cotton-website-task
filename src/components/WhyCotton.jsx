// import { content } from "../content/content";
// import AnimatedLink from "./AnimatedLink";


// const WhyCotton = () => {

//     const {header, paragraph, animatedLink} = content.en.contactPage.whyCotton;
//     const {title} = animatedLink;

//     return (
//         <div className="max-w-7xl mx-auto px-48 pb-10">
//             <h2 className="text-3xl font-medium">{header}</h2>
//             <p className="text-lg font-light mt-10 leading-relaxed mb-10">{paragraph}</p>
//             <AnimatedLink
//             fontSize={"text-xl"}
//             content={title}
//             color={"#0B714C"}
//             ></AnimatedLink>
//         </div>
//     );
// };

// export default WhyCotton;


import { useState, useEffect } from 'react';
import { content } from "../content/content";
import AnimatedLink from "./AnimatedLink";

const WhyCotton = () => {
    const [isMobile, setIsMobile] = useState(false);
    const {header, paragraph, animatedLink} = content.en.contactPage.whyCotton;
    const {title} = animatedLink;

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Check on initial load
        checkIfMobile();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);
        
        // Clean up
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <div className={`max-w-7xl mx-auto ${isMobile ? 'px-6' : 'px-48'} pb-10`}>
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-medium`}>{header}</h2>
            <p className={`${isMobile ? 'text-base' : 'text-lg'} font-light ${isMobile ? 'mt-6' : 'mt-10'} leading-relaxed ${isMobile ? 'mb-6' : 'mb-10'}`}>{paragraph}</p>
            <AnimatedLink
                fontSize={isMobile ? "text-lg" : "text-xl"}
                content={title}
                color={"#0B714C"}
            />
        </div>
    );
};

export default WhyCotton;