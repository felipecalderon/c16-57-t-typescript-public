import SearchBar from "@/components/SearchBar";
import UpcomingEvents from "@/components/Upcomingevents";
import Recommended from "@/components/Recommended";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
  <>
    <SearchBar/>
    <UpcomingEvents/>
    <Recommended/>
    <Footer/>
  </>
  )
}

export default HomePage;