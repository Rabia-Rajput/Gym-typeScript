import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";


type Props = {
  setSelectedPage: (value:SelectedPage)=> void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (
   <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
    <motion.div   onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
      {/* 'HEADER' */}
     <div className="md:my-5 md:w-3/5">
      <HText>More Than Just A Gym</HText>
      <p className="my-5 text-sm">
      Your first step to more fitness: a free* trial training session. Experience the maximum variety
       of training completely flexibly and without obligation in a studio of your choice.
      </p>
     </div>
     {/* Benefits */}
     <div className="md:flex items-center justify-between gap-8 mt-5 ">
      
      

     </div>


    </motion.div>

   </section>
  );
}

export default Benefits;
