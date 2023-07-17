
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"



const Tech = () => {
  return (
    <div
    className="mt-[120px] flex flex-row flex-wrap justify-center gap-10 "
    >
      {technologies.map((tech) => {
        return(
        <div className="w-28 h-28 " key={tech.key}>
          <BallCanvas
          icon={tech.icon}
          
          />
         
          </div>
        )
      }
      )}
      

    </div>
  )
}

export default SectionWrapper(Tech, "Technologies")