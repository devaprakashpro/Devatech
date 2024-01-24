const ball = document.querySelector('.icon');

window.addEventListener('scroll', function() {
  const currentScrollPosition = window.scrollY; // Get current vertical scroll position
    if (currentScrollPosition > 500) {
      ball.classList.add('active');
    console.log('Scrolled past 500 pixels!');
  } else {
        console.log('Still within the top 500 pixels.');
            ball.classList.remove('active');
  }

  // Example 2: Change content visibility based on scroll position
//   const content = document.getElementById('myContent');
//   if (currentScrollPosition >= content.offsetTop) {
//     content.style.display = 'block'; // Show content when scrolled to its position
//   } else {
//     content.style.display = 'none'; // Hide content otherwise
//   }

  // Example 3: Apply a class based on scroll direction
//   if (window.pageYOffset > lastScrollPosition) {
//     // Scrolling down
//     document.body.classList.add('scrolling-down');
//   } else {
//     // Scrolling up
//     document.body.classList.remove('scrolling-down');
//   }
//   lastScrollPosition = window.pageYOffset; // Update last scroll position
});

const btn = document.querySelector('.burgarbtn');
const nav = document.querySelector('.nav');
btn.addEventListener('click', () => {
  console.log('cliked')
  // nav.toggleAttribute.classList.add('.active');
  nav.classList.toggle('active');
  btn.classList.toggle('active');
})
nav.addEventListener('click', () => {
   nav.classList.remove('active');
  btn.classList.remove('active');
})
function logPageLoadTime() {
  // Start measuring time as soon as the function is called
  const startTime = performance.now();

  // Wait for the entire page to load, including all resources
  window.addEventListener('load', () => {
    const endTime = performance.now();
    const loadTime = endTime - startTime;

    console.log(`Page load time: ${loadTime.toFixed(2)} milliseconds`);
  });
}

// Call the function to initiate timing
logPageLoadTime();
