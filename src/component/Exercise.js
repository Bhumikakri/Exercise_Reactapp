import "./exercise.css";
import { useState, useEffect } from "react";
import Card from "./Card";

const Exercise = () => {
    const [searchValue, setSearchvalue] = useState('');
    const [exerciseList, setExerciseList] = useState([]);
     const [filteredExercises, setFilteredExercises] = useState([]);

      // Function to handle input change in the search field
    const searchfuntion = (e) => {
      setSearchvalue(e.target.value);
    };

     // Fetch exercise data on initial component mount
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
            setFilteredExercises(data);
            // console.log(data)
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
    }, []);


    // Filter exercises based on bodyparts name, exercisename,name
    useEffect(() => {
      const filtered = exerciseList.filter((exercise) =>
          exercise.bodyPart.toLowerCase().includes(searchValue.toLowerCase()) ||
          exercise.target.toLowerCase().includes(searchValue.toLowerCase()) ||
          exercise.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredExercises(filtered);
  }, [searchValue, exerciseList]);


  return (
    <div className="Exercise">
        <div className="searchSection">
            <h1>Exercise List</h1>
            <input type="text" value={searchValue} onChange={searchfuntion} placeholder="Search by target, body part, or exercise"/>
        </div>
        <div className="cardsContainer">
                {filteredExercises.map((exercise, index) => (
                    <Card key={index} exercise={exercise} />
                ))}
            </div>
        

    </div>
  );
};

export default Exercise;
