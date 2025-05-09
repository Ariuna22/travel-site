const MyTravelNote =({selectedDay, updateDay})=>{

    const editMyMeal =(myInput, value) => {
        updateDay({
            ...selectedDay,
            [myInput]: value
        })
    }

    if (!selectedDay) return <p>Plan your vacation in advice!</p>

    return (<div className="whole-plan">
       
            <input
            type="text"
            className="myInput"
            placeholder="Day is..."
            if="title"
            value={selectedDay.title}
            onChange={(e) => editMyMeal("title", e.target.value)}
            />

            <textarea
            placeholder="Write your vacation plan here"
            id="mealForADay"
            value={selectedDay.mealForADay}
            onChange={(e)=> editMyMeal("mealForADay", e.target.value)}
            />

            <textarea
            placeholder="To do list"
            id="mealForADay"
            value={selectedDay.ingredients}
            onChange={(e)=> editMyMeal("ingredients", e.target.value)}
            />         

    </div>)
}
export default MyTravelNote; 










