
import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0" >
                <img alt="logo" src={Logo}/>
                <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi  ea commodo consequat.
                </p>
                <p> © Evogym All Rights Reserved...
                </p>
            </div >
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">consectetur repellat</p>
                <p className="my-5">aspernatur quam ab</p>
                <p>voluptate molestiae </p>

            </div>
            <div  className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5"> voluptatum molestias aut</p>
               
                <p> (254) 546-4546</p>


            </div>

        </div>

    </footer>
  );
};

export default Footer;