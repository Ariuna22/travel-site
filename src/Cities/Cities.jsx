import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increasePeopleCount, decreasePeopleCount, deleteCity } from './citiesSlice';
import './cities.css';

function Cities() {
  const dispatch = useDispatch();
  const { peopleCount, deletedCities, trips } = useSelector(state => state.cities);

  const handleIncrease = (index) => {
    dispatch(increasePeopleCount(index));
  };

  const handleDecrease = (index) => {
    dispatch(decreasePeopleCount(index));
  };

  const handleDeleteCity = (index) => {
    dispatch(deleteCity(index));
  };

  const getTotal = () => {
    return trips.reduce((acc, city, index) => {
      if (!deletedCities.includes(index)) {
        const price = parseInt(city.price.replace('$', ''), 10);
        return acc + price * peopleCount[index];
      }
      return acc;
    }, 0);
  };

  return (
    <div>
      <h4 className="city-title">Лучшие направления для путешествий по городам</h4>

      <div className="city-grid">
        {trips.map((city, index) => {
          if (deletedCities.includes(index)) return null;
          const price = parseInt(city.price.replace('$', ''), 10);
          const totalPriceForCity = price * peopleCount[index];

          return (
            <div className="city-card" key={index}>
              <img src={city.image} alt={city.title} className="city-image" />
              <h3>{city.title}</h3>
              <p>{city.description}</p>
              <p>🚗 Время: {city.time}</p>
              <p>💵 Цена: {city.price} (на 1 человека)</p>

              <div>
                <button onClick={() => handleDecrease(index)}>-</button>
                <span>{peopleCount[index]}</span>
                <button onClick={() => handleIncrease(index)}>+</button>
              </div>

              <button onClick={() => handleDeleteCity(index)}>Удалить</button>

              <p><strong>Итоговая стоимость для города: ${totalPriceForCity}</strong></p>
            </div>
          );
        })}
      </div>

      <div className="total-button">
        <button className="total-btn" onClick={() => alert(`Общая стоимость: $${getTotal()}`)}>TOTAL</button>
      </div>
    </div>
  );
}

export default Cities;







