//third party style sheets

  
  import "./assets/vendor/bootstrap/css/bootstrap.min.css";
  import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
  
import "./assets/css/style.css"
import "./assets/css/table.css"
import MyRouting from "./components/MyRouting";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <>
     <Header />
     <MyRouting />
     <Footer />
   </>
  );
}

export default App;
