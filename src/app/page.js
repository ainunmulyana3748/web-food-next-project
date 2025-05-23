import AlwaysReadyToServe from "../components/AlwaysReadyToServe";
import DownloadApps from "../components/DownloadApps";
import HeroComponents from "../components/HeroComponents";
import OrdertoDoorstep from "../components/OrdertoDoorstep";
import Testimonial from "../components/Testimonial";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const token = cookies().get("token")?.value;

  if (!token) {
    redirect("/login");
  }
  return (
    <div>
      <HeroComponents />
      <WhyChooseUsSection />
      <AlwaysReadyToServe />
      <OrdertoDoorstep />
      <Testimonial />
      <DownloadApps />
    </div>
  );
}
