import SearchBar from "@/components/SearchBar";
import UpcomingEvents from "@/components/Upcomingevents";
import Recommended from "@/components/Recommended";
import Footer from "@/components/Footer";
import TagsFilter from "@/components/TagsFilter";
import Cta from "@/components/Cta";

const HomePage = () => {
  return (
    <>
      {/* <SearchBar/> */}
      {/* <TagsFilter/> */}
      <div className=" h-screen w-full px-2">
        <div className="h-3/6 ">
          <Cta />
        </div>
        <div className="h-3/6">
        <UpcomingEvents />
        <Recommended />
        </div>
      </div>
    </>
  );
};

export default HomePage;
