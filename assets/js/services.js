const cards = document.querySelectorAll('.card');
let expandedCard = null;

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (expandedCard === card) {
      // Reset all
      cards.forEach(c => {
        c.classList.remove('expand', 'shrink');
      });
      expandedCard = null;
    } else {
      cards.forEach(c => {
        if (c === card) {
          c.classList.add('expand');
          c.classList.remove('shrink');
        } else {
          c.classList.remove('expand');
          c.classList.add('shrink');
        }
      });
      expandedCard = card;
    }
  });
});
