// Newsletter Form Validation
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email && email.includes('@')) {
      alert('Thank you for subscribing!');
      document.getElementById('newsletterForm').reset();
    } else {
      alert('Please enter a valid email address.');
    }
  });