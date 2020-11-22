require('./index.scss')
import logo from './logo.png'
import happy from './happy.jpg'

const logoImg = document.createElement('img')
logoImg.src = logo

const happyImg = document.createElement('img')
happyImg.src = happy

const imgWrapper = document.getElementById('img')
imgWrapper.appendChild(happyImg)
imgWrapper.appendChild(logoImg)
console.log('hello webpack!')