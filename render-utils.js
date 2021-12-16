export function renderCard(beanie) {

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
    

    return beanieEl;
}

export function renderDetails(beanie) {

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

    return beanieEl;
}