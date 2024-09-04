import Button from "@/app/components/ui/button/Button";


const HomePage = () => {
  return (
    <div>
      <Button className="m-5" text="Download" outlet={true}/>
      <Button className="" text="Download"/>
    </div>
  );
};

export default HomePage;
