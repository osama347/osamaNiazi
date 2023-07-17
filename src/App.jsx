
import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Navbar,Tech,Works,StarsCanvas,} from "./components"

function App() {


  return (
    <div>
      <BrowserRouter>

      <div className="relative z-100 bg-primary">
        <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">

        <Navbar />
        <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="  ">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>

      </div>


      </BrowserRouter>
    </div>
  )
}

export default App
