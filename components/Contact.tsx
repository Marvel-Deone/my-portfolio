import React from 'react'

const Contact = () => {
    return (
        <section className="bg-gradient-to-r from-[#062239] from-30% to-[#050d17] py-[3.5rem] md:py-[5rem] lg:py-[6rem] px-[.85rem] md:px-[2.1rem] lg:px-[4rem] 2xl:px-0 overflow-hidden">
            <div className="bg-[#052442] border border-[#0788ff]/[0.2] w-full lg:max-w-[82rem] mx-auto flex flex-col rounded-[0.375rem]">
                <div className="flex flex-col md:flex-row px-12 py-10">
                    <div className='md:w-[30%]'></div>
                    <div data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200" className='md:w-[76%] md:px-14'>
                        <h2 className="text-white opacity-90 text-[42px] md:text-[40px] font-[600] md:font-[500] leading-[1.2]">Let's Discuss Your Project</h2>
                        <p className="text-white bg-opacity-85 text-[17px] leading-7 mt-1 max-w-[550px]">
                            Always available for freelancing if the right project comes along.
                            Feel free to contact me.
                        </p>
                    </div>
                </div>
                <div className="bg-[#0788ff]/10 border-t border-[#0788ff]/[0.2] flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 px-7 py-[2rem] pb-14">
                    <div className='md:w-[31%]'>
                        {/* Contact Image */}
                        <div className="hidden -mt-[185px] lg:flex flex-col justify-center items-center max-w-full px-4">
                            <img
                                src="/images/contact-us.png"
                                alt="Profile"
                                className="rounded-xl object-cover mb-4 align-middle"
                            />
                        </div>
                        {/* Contact Details */}
                        <div className='px-4 mt-8'>
                            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0" className='break-words'>
                                <label className="text-white opacity-75 text-sm font-[400] uppercase">Write an E-mail</label>
                                <p className="text-white opacity-80 text-[20px] font-bold mt-1"><a href="mailto:folagbadeolowofela05@gmail.com">folagbadeolowofela05@gmail.com</a></p>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100" className='mt-6'>
                                <label className="text-white opacity-75 text-sm font-[400] uppercase">Call</label>
                                <p className="text-white opacity-80 text-[20px] font-bold mt-1"><a href="tel:+234 806 657 3156">+234 806 657 3156</a></p>
                            </div>
                        </div>
                        {/* Social Icons */}
                        <div data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300" className="flex gap-2 mt-4 px-4">
                            <a href="#" className="relative inline-flex items-center justify-center bg-[#1877f2] border-2 border-white h-[46px] w-[46px] rounded-full text-white hover:bg-blue-500 transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--fa-brands" width="0.63em" height="1em" viewBox="0 0 320 512"><path fill="currentColor" d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                            </a>
                            <a href="#" className="relative inline-flex items-center justify-center bg-[#f26798] border-2 border-white h-[46px] w-[46px] rounded-full text-white hover:bg-pink-500 transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--fa-brands" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248s248-111.252 248-248S392.748 8 256 8m163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955c-6.984-1.477-77.018-15.682-147.502-6.818c-5.752-14.041-11.181-26.393-18.617-41.614c78.321-31.977 113.818-77.482 118.284-83.523M396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519c-34.712-63.776-73.185-116.168-79.04-124.008c67.176-16.193 137.966 1.27 190.061 47.489m-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509c-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62M44.17 256.323c0-2.166.043-4.322.108-6.473c9.268.19 111.92 1.513 217.706-30.146c6.064 11.868 11.857 23.915 17.174 35.949c-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323m81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756c29.74 77.283 42.039 142.053 45.189 160.638c-68.112 29.013-150.015 21.053-212.768-27.882m248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033c66.38-10.626 124.7 6.768 131.947 9.055c-9.442 58.941-43.273 109.844-90.795 141.978"></path></svg>
                            </a>
                            <a href="#" className="relative inline-flex items-center justify-center bg-[#1275b1] border-2 border-white h-[46px] w-[46px] rounded-full text-white hover:bg-blue-500 transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--fa-brands" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className='md:w-[76%]'>
                        <form className="mt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name *"
                                    className="bg-[hsla(0,0%,100%,.05)] p-3 rounded-md w-full text-white placeholder-gray-400 border border-[hsla(0,0%,100%,.15)] outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email *"
                                    className="bg-[hsla(0,0%,100%,.05)] p-3 rounded-md w-full text-white placeholder-gray-400 border border-[hsla(0,0%,100%,.15)] outline-none"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject *"
                                className="bg-[hsla(0,0%,100%,.05)] p-3 rounded-md w-full text-white placeholder-gray-400 border border-[hsla(0,0%,100%,.15)] mt-10 outline-none"
                            />
                            <textarea
                                placeholder="Your message *"
                                className="bg-[hsla(0,0%,100%,.05)] p-3 rounded-md w-full h-32 text-white placeholder-gray-400 border border-[hsla(0,0%,100%,.15)] mt-10 outline-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="mt-6 w-full  py-3 bg-blue-500  rounded-full border-[2px] border-blue-500 hover:bg-black hover:border-white transition-all duration-[.35s] ease-linear text-lg font-semibold outline-none"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
