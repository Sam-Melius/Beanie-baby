// import functions and grab DOM elements
import { getBeanie } from '../fetch-utils.js';

const beaniesDetailEl = document.querySelector('.beanies-detail');

// let state

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const beanie = await getBeanie(id);

     
        const beanieEl = document.createElement('div');
        const nameEl = document.createElement('p');
        const generationEl = document.createElement('p');
        const typeEl = document.createElement('p');
        const bornEl = document.createElement('p');
        const descriptionEl = document.createElement('p');

        
        nameEl.textContent = beanie.name;
        generationEl.textContent = beanie.generation;
        typeEl.textContent = beanie.type;
        bornEl.textContent = beanie.born;
        descriptionEl.textContent = beanie.description;

        beanieEl.append(nameEl, generationEl, typeEl, bornEl, descriptionEl);
        beaniesEl.append(beanieEl);
    

});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
