import './ExperienceCard.css'


const ExperienceCard = ({id,experience,index}) => {

  
    return <div id={id} key={'id-'+(index+1)} className='singleExperienceCard'>
    <h5>Establishment : {experience.est}</h5>
    <h6>Year : {experience.year}</h6>
    <p>this is a para number {index || ''}</p>
    </div>
  }

  export default ExperienceCard;