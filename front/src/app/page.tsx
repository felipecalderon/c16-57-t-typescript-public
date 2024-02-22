import SearchBar from "@/components/SearchBar";
import UpcomingEvents from "@/components/Upcomingevents";
import Recommended from "@/components/Recommended";
import Footer from "@/components/Footer";
import TagsFilter from "@/components/TagsFilter";

const HomePage = () => {
  return (
  <>
    <SearchBar/>
    <TagsFilter/>
    <UpcomingEvents/>
    <Recommended/>
    <Footer/>
  </>
  )
}

export default HomePage;