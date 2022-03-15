// import _ from 'lodash'
import './style.css'
import olympicSrc from './asset/images/2022.jpg'

function component () {
    const element = document.createElement('div')
    // element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.innerHTML = '确实，感觉不如'
    const olympicImg = new Image()
    olympicImg.src = olympicSrc
    element.appendChild(olympicImg)

    return element
}

document.body.appendChild(component())