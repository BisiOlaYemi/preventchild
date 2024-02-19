
import Footer from "./Footer";
import Navbar from "./Navbar";


const MainLayout = ({ children }) => {
    return (
      <div className="flex-col flex">
       <Navbar />
       <div className="flex-1"> {children}</div>
        <Footer />
      </div>
    );
  };
  
  export default MainLayout;