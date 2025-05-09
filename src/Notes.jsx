import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import "./Notes.css";
import MyList from "./MyList";
import MyTravelNote from "./MyTravelNote";

function Notes() {
  const [mealPlans, setMealPlans] = useState(
    () => JSON.parse(localStorage.getItem("mealPlans")) || []
  );  
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans));
  }, [mealPlans]);

  const addMeal = () => {
    const newMeal = {
      title: "Day is...",
      id: uuid(),
      mealForADay: "",
      ingredients: "",
    };
    setMealPlans([newMeal, ...mealPlans]);
  };

  const deleteDay = (mealId) => {
    setMealPlans(mealPlans.filter(({ id }) => id !== mealId));
  };

  const updateDay = (myUpdatedMeal) => {
    setMealPlans((prevMealPlans) =>
      prevMealPlans.map((mealPlan) =>
        mealPlan.id === myUpdatedMeal.id ? myUpdatedMeal : mealPlan
      )
    );
  };

  const getActiveMeal = () => mealPlans.find(({ id }) => id === selectedDay);

  return (
    <div className="App">
      <MyList
        mealPlans={mealPlans}
        addMeal={addMeal}
        deleteDay={deleteDay}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <MyTravelNote
        selectedDay={getActiveMeal()}
        updateDay={updateDay}
      />
    </div>
  );
}

export default Notes;







