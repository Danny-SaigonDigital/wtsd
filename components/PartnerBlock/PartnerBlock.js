import React from 'react';
import image from '../../assets/images/logo-sponsor.png';
import Image from 'next/image';

const PartnerBlock = ({ model }) => {
    return (
        <div className='lg:py-[100px] py-12 flex flex-col items-center lg:px-8 px-4'>
            <h2 className='font-semibold max-w-3xl lg:text-6xl text-4xl text-center m-auto mb-8'>{model.title}</h2>
            <p className='text-center m-auto text-[#878787] lg:text-lg text-md max-w-2xl mb-8'>{model.subtitle}</p>
            <div className='mt-12' >
                <Image src={model.image.sourceUrl} alt='' width={model.image?.mediaDetails?.width || 0} height={model.image?.mediaDetails?.height || 0}/>
            </div>
        </div>
    );
};

export default PartnerBlock;