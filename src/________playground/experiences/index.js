import ExperienceCard from "./ExperienceCard"

const ExperienceTemplate = ({experienceTab : experiences}) => {
    const experienceTemplate = experiences.map((exp, idx) => 
    
    <ExperienceCard key={'cl'+idx} id={'exper'+(idx+1)} experience={exp} index={idx}></ExperienceCard>
    
  )

  if(experiences && experiences.length) return <section className="experienceGrid">
    <h4>Experiences</h4>
    {experienceTemplate}
  </section>;

    return <div className="experienceGrid">
    <h4>experiences</h4>
        <h4>Warning</h4>
        <p>No Experinces</p>
    </div> ;
}

export default ExperienceTemplate