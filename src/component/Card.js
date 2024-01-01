import './card.css';

const Card=(Props)=>{
    // console.log(Props.exercise);
    return(
        <div className="cards">
      <img src={Props.exercise.gifUrl} alt={Props.exercise.name} className="imgg" />
      <h2 className="ExeName">{Props.exercise.name}</h2>
      <p className="Exetarget">{Props.exercise.target}</p>
      <p className="ExeName">{Props.exercise.bodyPart}</p>
    </div>
    )
}

export default Card;