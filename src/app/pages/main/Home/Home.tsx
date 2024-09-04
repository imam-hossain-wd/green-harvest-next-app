import Benifits from "@/app/components/main/Benefits/Benefits";
import HomeBanner from "@/app/components/main/Home/HomeBanner";
import PopularCategory from "@/app/components/main/PopularCategory/PopularCategory";
import ReferSection from "@/app/components/main/ReferanceSection/ReferanceSection";



const HomePage = () => {
  return (
    <div>
     <HomeBanner />
     <ReferSection />
     <Benifits />
     <PopularCategory size="small" />
    </div>
  );
};

export default HomePage;
