import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>

            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* ----- Left Section ----- */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto makes managing your healthcare simpler. Say goodbye to confusing prescriptions and missed appointments. Our easy-to-use platform connects you with doctors and keeps your health information organized. Take control of your health journey - sign up for Prescripto today!</p>
                </div>

                {/* ----- Middle Section ----- */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* ----- Right Section ----- */}
                <div>

                    <p className='text-xl font-medium mb-5'>GET IN TOUCH </p>

                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91 9382869803</li>
                        <li> <a href="mailto:mannasoumyajit47@gmail.com" className="hover:text-black">
                            mannasoumyajit47@gmail.com
                        </a></li>
                    </ul>

                    {/* ----- Social Media Icons ----- */}
                    <div className='flex gap-4 mt-4'>
                        <a className='hover:animate-bounce-spin transition-all duration-500' href="https://www.linkedin.com/in/soumyajit-manna-731372270?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmnVLky%2BnQlW81FOwJVONuQ%3D%3Dm" target="_blank" rel="noopener noreferrer">
                            <img src={assets.linkedin_icon} alt="LinkedIn" className="w-5 h-5" />
                        </a>
                        <a className="hover:animate-bounce-spin transition-all duration-500" href="https://twitter.com/Mindwrap_Error" target="_blank" rel="noopener noreferrer">
                            <img src={assets.twitter_icon} alt="Twitter" className="w-5 h-5" />
                        </a>
                        <a className='hover:animate-bounce-spin transition-all duration-500' href="https://wa.me/9382869803" target="_blank" rel="noopener noreferrer">
                            <img src={assets.whatsapp_icon} alt="WhatsApp" className="w-5 h-5" />
                        </a>
                        <a className='hover:animate-bounce-spin transition-all duration-500' href="https://github.com/Soumyajit-manna" target="_blank" rel="noopener noreferrer">
                            <img src={assets.github_icon} alt="Github" className="w-5 h-5" />
                        </a>
                        <a className='hover:animate-bounce-spin transition-all duration-500' href="https://t.me/Soumya86373" target="_blank" rel="noopener noreferrer">
                            <img src={assets.telegram_icon} alt="Telegram" className="w-5 h-5" />
                        </a>
                        <a className='hover:animate-bounce-spin transition-all duration-500' href="https://instagram.com/soumyajit_098" target="_blank" rel="noopener noreferrer">
                            <img src={assets.instagram_icon} alt="Instagram" className="w-5 h-5" />
                        </a>
                    </div>

                </div>
            </div>

            {/* ----- Copyright text ----- */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright © 2024 Soumyajit Manna, Developer of Prescripto - All Right Reserved.</p>
            </div>

        </div>
    )
}

export default Footer
