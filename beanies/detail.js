// import functions and grab DOM elements
import { getBeanie } from '../fetch-utils.js';
import { renderDetails, } from '../render-utils.js';


const beanieContainerEl = document.querySelector('.beanie-container');

// let state

window.addEventListener('load', async() => {
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const beanie = await getBeanie(id);

    
    const beanieDetailEl = renderDetails(beanie);
    beanieContainerEl.append(beanieDetailEl);

});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
