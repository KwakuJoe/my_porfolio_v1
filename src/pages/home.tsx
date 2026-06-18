
import HomeHero from "@/components/custom/home/HomeHero";
import Divider from '@/components/custom/Divider'
import AboutMe from '@/components/custom/home/AboutMe'
import MyStack from '@/components/custom/home/MyStack'
import MyExperience from "@/components/custom/home/MyExperience";
import HomeProjects from '@/components/custom/home/HomeProject'
import Testimonials from '@/components/custom/home/Testimonials'
export default function Home() {

  return <>
    <div className="flex flex-col w-full h-full min-h-screen">

      <div className="md:h-20 h-28"></div>

      <Divider />
      <HomeHero />
      <Divider />
      <AboutMe />
      <Divider />
      <MyStack/>
      <Divider />
      <MyExperience/>
      <Divider />
      <HomeProjects/>
      <Divider />
      <Testimonials/>
      <Divider />




   




    </div>
  </>

}
