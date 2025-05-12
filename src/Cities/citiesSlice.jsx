import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  peopleCount: Array(16).fill(0),
  deletedCities: [],
  trips: [
    { title: "Вашингтон, D.C.", image: "/Cities/city1.avif", description: "История, музеи, Белый дом, Капитолий.", price: "$110", time: "~4.5 часа" },
    { title: "Бостон, MA", image: "/Cities/city2.avif", description: "Осень, университеты, колониальный стиль, Гарвард.", price: "$110", time: "~4 часа" },
    { title: "Филадельфия, PA", image: "/Cities/city3.avif", description: "Чизстейки, история США, Liberty Bell.", price: "$80", time: "~2 часа" },
    { title: "Питтсбург, PA", image: "/Cities/city4.avif", description: "Мосты, музеи, реки, городской индустриальный стиль.", price: "$150", time: "~6 часов" },
    { title: "Баффало и Ниагарский водопад, NY", image: "/Cities/city5.avif", description: "Огромный водопад, прогулка на лодке Maid of the Mist.", price: "$160", time: "~6.5 часов" },
    { title: "Бар-Харбор, ME (нац. парк Акадия)", image: "/Cities/city6.avif", description: "Природа, горы, океан, осень.", price: "$180", time: "~8 часов" },
    { title: "Лейк-Плэсид, NY (Adirondacks)", image: "/Cities/city7.avif", description: "Горы, озёра, каякинг, уютные домики.", price: "$120", time: "~5 часов" },
    { title: "Портленд, ME", image: "/Cities/city8.avif", description: "Маяки, лобстеры, побережье Атлантики.", price: "$140", time: "~5.5 часов" },
    { title: "Нэшвилл, TN", image: "/Cities/city9.avif", description: "Кантри-музыка, бары, южное гостеприимство.", price: "$300", time: "~13.5 часов" },
    { title: "Чикаго, IL", image: "/Cities/city10.avif", description: "Архитектура, глубокая пицца, озеро Мичиган.", price: "$320", time: "~12.5 часов" },
    { title: "Саванна, GA", image: "/Cities/city11.avif", description: "Южная романтика, испанский мох, старинные дома.", price: "$300", time: "~13 часов" },
    { title: "Шарлотт, NC", image: "/Cities/city12.avif", description: "Современный юг, уютные районы, парки.", price: "$220", time: "~9.5 часов" },
    { title: "Кливленд, OH", image: "/Cities/city13.avif", description: "Музей рок-н-ролла, набережная, спорт.", price: "$170", time: "~7.5 часов" },
    { title: "Ричмонд, VA", image: "/Cities/city14.avif", description: "Уличное искусство, музеи, история Гражданской войны.", price: "$150", time: "~6 часов" },
    { title: "Провиденс, RI", image: "/Cities/city15.avif", description: "Искусство, RISD, уютный центр и итальянский квартал.", price: "$100", time: "~3.5 часа" },
    { title: "Оушен-Сити, MD", image: "/Cities/city16.avif", description: "Пляжи, развлечения, набережная, семейный отдых.", price: "$140", time: "~5.5 часов" }
  ],
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    increasePeopleCount(state, action) {
      const index = action.payload;
      state.peopleCount[index]++;
    },
    decreasePeopleCount(state, action) {
      const index = action.payload;
      if (state.peopleCount[index] > 1) {
        state.peopleCount[index]--;
      }
    },
    deleteCity(state, action) {
      const index = action.payload;
      state.deletedCities.push(index);
    },
  },
});

export const { increasePeopleCount, decreasePeopleCount, deleteCity } = citiesSlice.actions;
export default citiesSlice.reducer;
