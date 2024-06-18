import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

//components//
import Social from "@/components/Social";
import Foto from "@/components/Foto";
import Stats from "@/components/Stats";

const Home = () => {
  return (
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

            {/*text*/}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl h1">Web/App Developer</span>
              <h1 className="h1 mb-6 mt-2">Hello I am <br />
              <span className="text-accent">Jarne Wils</span>
              </h1>
              <p className="max-w-[550px] mb-6 text-white/80">
              I'm a front-end developer with a passion for creating elegant apps and websites. I love turning ideas into reality through code and intuitive design.
              </p>

              {/*socials*/}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Donload CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-6 xl:mb-0">
                  <Social
                    containerStyles={"flex gap-6"}
                    iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primery hover:transition-all duration-500"}/>
                </div>
              </div>
            </div>

            {/*foto*/}
            <div className="order-1 xl:order-none mb-6 xl:mb-0">
              <Foto />
            </div>


          </div>
        </div>

        <Stats/>
      </section>
  )
};

export default Home;