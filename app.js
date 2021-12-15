// import functions and grab DOM elements
import { getAllBeanies } from './fetch-utils.js';

const beaniesEl = document.querySelector('.beanies');

// let state

window.addEventListener('load', async() => {
    const beanies = await getAllBeanies();

    for (let beanie of beanies) {
        const beanieEl = document.createElement('a');
        const nameEl = document.createElement('p');
        const generationEl = document.createElement('p');
        const typeEl = document.createElement('p');
        const bornEl = document.createElement('p');

        beanieEl.classList.add('beanie');
        beanieEl.href = `./beanies/?id=${beanie.id}`;
        nameEl.textContent = beanie.name;
        generationEl.textContent = beanie.generation;
        typeEl.textContent = beanie.type;
        bornEl.textContent = beanie.born;

        beanieEl.append(nameEl, generationEl, typeEl, bornEl);
        beaniesEl.append(beanieEl);
    }

});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
