const API_Key = `b19200cb4949d6830162b172ede9d088`

const form = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

const img_url = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`