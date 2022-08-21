const cards = document.querySelectorAll('.gi3');

const onCardClick = async (e) => {
    const card = e.currentTarget; 
    const cardClone = card.cloneNode(true);
    const  {top, left, width, height} = card.getBoundingClientRect();
    cardClone.style.position = 'fixed' ;
    cardClone.style.top = top + 'px';
    cardClone.style.left = left + 'px';
    cardClone.style.width = width + 'px';
    cardClone.style.height = height + 'px';
    card.style.opacity = '0';
    card.parentNode.appendChild(cardClone);
    
}

cards.forEach(card => card.addEventListener('click', onCardClick));

