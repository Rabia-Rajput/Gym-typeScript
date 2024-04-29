import { useState } from "react";
import { Bars3Icon , XMarkIcon } from "@heroicons/react/16/solid";
import Logo from '@/assets/Logo.png';
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";



type Props = {
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void;
};

const Navbar = ({
    selectedPage,
    setSelectedPage,

}: Props) => {
    const flexbetween ='flex items-center justify-between';
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
    const [isMenuToggled, setIsMenuToggled]=useState(false);
  return (
    <nav>
        <div className={`${flexbetween}fixed top-0 z-30 w-full py-6`} >
            <div className={`${flexbetween} mx-auto w-5/6`}>
                <div  className={`${flexbetween} w-full gap-16`}>
                    <img alt="logo" src={Logo}/>
                    {isAboveMediumScreens ? (<div  className={`${flexbetween} w-full`}>
                        <div className={`${flexbetween} gap-8 text-sm`}>
                             <Link page = "Home" selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}
                              />
                             <Link page ="Benefits"  selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>
                             <Link page ="Our Classes"
                              selectedPage={selectedPage}
                              setSelectedPage={setSelectedPage}/>
                             <Link page ="Contact Us"
                              selectedPage={selectedPage}
                              setSelectedPage={setSelectedPage}/>
                        </div> 
                            <div className={`${flexbetween} gap-8 `}>
                                <p>Sign In</p>
                                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div> 
                        {/* represent desktop screen */}
                    </div> )
                    // represent mobile screen
                     : (
                        <button className="rounded-full bg-secondary-500 p-2" 
                        onClick={()=>setIsMenuToggled(!isMenuToggled)}> 
                        <Bars3Icon className="h-6 w-6 text-white"/>
                        </button>
                    )}

                </div>

            </div>

        </div>

    </nav>
  );
}

export default Navbar;