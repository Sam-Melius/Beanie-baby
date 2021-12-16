// import functions and grab DOM elements
import { getAllBeanies } from './fetch-utils.js';
import { renderCard } from './render-utils.js';

const beaniesEl = document.querySelector('.beanies');

// let state

window.addEventListener('load', async() => {
    const beanies = await getAllBeanies();

    for (let beanie of beanies) {
        const beanieEl = renderCard(beanie);
        beaniesEl.append(beanieEl);
    }

});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
