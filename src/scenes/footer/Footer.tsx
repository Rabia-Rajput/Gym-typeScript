import { SelectedPage } from "@/shared/types";
import Logo from '@/assets/Logo.png';



const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt.0" >
                <img alt="logo" src={Logo}/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi  ea commodo consequat.
                </p>

            </div>
            <div>

            </div>
            <div>

            </div>

        </div>

    </footer>
  );
};

export default Footer;