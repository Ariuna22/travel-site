import './trips.css';
function Trips() {
  const trips = [
    {
      title: "Западное Побережье",
      image: "/Routes/route1.avif",
      description: "От Лос-Анджелеса до Сиэтла — пляжи, леса и кофейни.",
      price:"$3000"
    },
    {
      title: "Каньоны Юго-Запада",
      image: "/Routes/route2.avif",
      description: "Гранд-Каньон, Монумент-Вэлли, Зайон — пустынная магия.",
      price:"$2500"
    },
    {
      title: "Калифорнийский трип",
      image: "/Routes/route3.avif",
      description: "Сан-Диего, Биг-Сур, Йосемити — всё в одном маршруте.",
      price:"$3000"
    },
    {
      title: "Солнечная Флорида",
      image: "/Routes/route4.avif",
      description: "Майами, Ки-Уэст, Орландо — пляжи и развлечения.",
      price:"$2000"
    },
    {
      title: "Route 66",
      image: "/Routes/route5.avif",
      description: "Легендарная дорога от Чикаго до Лос-Анджелеса.",
      price:"$3000"
    },
    {
      title: "Северо-Восток США",
      image: "/Routes/route6.avif",
      description: "Нью-Йорк, Бостон, Вашингтон — города и история.",
      price:"$1500"
    },
    {
      title: "Скалистые горы",
      image: "/Routes/route7.avif",
      description: "Йеллоустоун, Гранд-Титон — природа на грани фантастики.",
      price:"$2800"
    },
    {
      title: "Аляска",
      image: "/Routes/route8.avif",
      description: "Дикая природа, ледники и северное сияние.",
      price:"$4000"
    },
  ];

  return (
    <div>
      <h4 className="trips-title">Наши направления</h4>
      <div className="trips-grid">
        {trips.map((trip, index) => (
          <div className="trip-card" key={index}>
            <img src={trip.image} alt={trip.title} className="trip-image" />
            <h3>{trip.title}</h3>
            <p>{trip.description}</p>
            <p>{trip.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trips;

