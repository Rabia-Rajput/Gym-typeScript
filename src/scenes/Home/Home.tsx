import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponserRedBull from '@/assets/SponsorRedBull.png';
import SponserForbes from '@/assets/SponsorForbes.png';
import SponserFortune from '@/assets/SponsorFortune.png';




type Props = {
  setSelectedPage:(value: SelectedPage)=>void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  
  return (
    <section id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0" >
      {/* image and MAINHeader */}
      <div>
        {/* MAIN HEADER */}
        <div>

        </div>
            {/* IMAGE */}
            <div></div>
      </div>

    </section>
  )
}

export default Home;