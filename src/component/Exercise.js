import "./exercise.css";
import { useState, useEffect } from "react";
import Card from "./Card";

const Exercise = () => {
    const [searchvalue, setSearchvalue] = useState('');
    const [exerciseList, setExerciseList] = useState([]);

    const searchfuntion = (e) => {
        setSearchvalue(e.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
          const url = 'https://exercisedb.p.rapidapi.com/exercises';
          const options = {
            method: 'GET',
	        headers: {
		        'X-RapidAPI-Key': '382a6d837dmsh3673b78e742714bp186656jsndf23804edbc1',
		        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            },
          };
    
          try {
            const response = await fetch(url, options);
            const data = await response.json();
            setExerciseList(data);
            // console.log(data)
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
    }, []);


  return (
    <div className="Exercise">
        <div className="searchSection">
            <h1>Exercise List</h1>
            <input type="text" value={searchvalue} onClick={searchfuntion} placeholder="Search by target, body part, or exercise"/>
        </div>
        <div className="cardsContainer">
                {exerciseList.map((exercise, index) => (
                    <Card key={index} exercise={exercise} />
                ))}
        </div>
        

    </div>
  );
};

export default Exercise;
