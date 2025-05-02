import Image from 'next/image'
import React from 'react'

const Brand = () => {
    return (
        <section>
            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500" className='w-full bg-gradient-to-r from-[#052442] from-40% to-[#051a2f] flex flex-col mx-auto mt-12 md:mt-14 lg:mt-[4.5rem] px-[1.5rem] md:px-[2.1rem] lg:px-[4rem] 2xl:px-0'>
                <div className="w-full lg:max-w-[82rem] flex mx-auto justify-between py-6">
                    <Image src="/images/brand-1.svg" alt='Hello' width={270} height={400} className='w-[180px] md:w-[270px] xl:h-[57px] 2xl:h-[82px]' />
                    <Image src="/images/brand-2.svg" alt='Hello' width={270} height={400} className='w-[180px] md:w-[270px] xl:h-[55px]' />
                    <Image src="/images/brand-3.svg" alt='Hello' width={300} height={400} className='hidden md:flex xl:h-[57] 2xl:h-[82px]' />
                </div>  
            </div>
        </section>
    )
}

export default Brand
