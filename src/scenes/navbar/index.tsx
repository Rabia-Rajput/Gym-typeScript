import { useState } from "react";
import { Bars3Icon , XMarkIcon } from "@heroicons/react/16/solid";
import Logo from '@/assets/Logo.png';

type Props = {}

const Navbar = (props: Props) => {
    const flexbetween ='flex items-center justify-between';
  return (
    <nav>
        <div className={`${flexbetween}fixed top-0 z-30 w-full py-6`} >
            <div className={`${flexbetween} mx-auto w-5/6`}>
                <div  className={`${flexbetween} w-full gap-16`}>
                    <img alt="logo" src={Logo}/>

                    <div  className={`${flexbetween} w-full`}>
                        <div className={`${flexbetween} gap-8 text-sm`}>
                            <p>Home</p>
                            <p>Benefits</p>
                            <p>Our Classes</p>
                            <p>Contact Us</p>
                           

                        </div>
                            <div className={`${flexbetween} gap-8 `}>
                                <p>Sign In</p>
                                <button>Become a Member</button>
                                

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </nav>
  );
}

export default Navbar;