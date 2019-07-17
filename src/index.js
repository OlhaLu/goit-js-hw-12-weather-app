import getGeoPosition from './js/getGeoPosition.js';
import fetchWeather from './js/fetchWeather.js';
import createWeather from './js/createWeather.js';
import './css/styles.css';

import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import 'pnotify/dist/PNotifyBrightTheme.css';


// отображение погоды изпользуя геопозицию после разрешения пользователя
getGeoPosition()
  .then(location => `${location.coords.latitude}+ ${location.coords.longitude}`)
  .then(data => fetchWeather(data))
  .then(weatherData => createWeather(weatherData))
  .catch(error => {
    PNotify.alert(
      'Нет прав доступа к геопозиции, используйте поиск города по имени.',
    );
  });


// запрос на отображение погоды в заданом регионе через форму поиска по имени города
const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', searchWeatherByName);

function searchWeatherByName(event) {
    event.preventDefault();
    const submitValue = event.currentTarget.city.value;
    console.log(submitValue);

    fetchWeather(submitValue)
    .then(submitData => createWeather(submitData))
    .catch(error => {
      PNotify.error({
        text: "По вашему запросу ничего не найдено! Попробуйте еще)"
      });
    });
}
