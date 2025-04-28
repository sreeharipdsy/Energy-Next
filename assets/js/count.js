const counters = document.querySelectorAll('.count');
const speed = 200; // Adjust speed if needed

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  let count = 0;

  const updateCount = () => {
    const increment = target / speed;

    if (count < target) {
      count += increment;
      counter.innerText = formatNumber(count);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = formatNumber(target);
    }
  };

  updateCount();
};

function formatNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(0) + 'M+';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(0) + 'K+';
  } else {
    return Math.floor(number) + '+';
  }
}

// Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => {
  observer.observe(counter);
});
