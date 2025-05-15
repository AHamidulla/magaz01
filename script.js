const data = [
  {
    id: 1,
    image: "./img-3/keys-1.svg",
    name: 'Sony - WH-1000XM5 Wireless Noise Canceling',
    price: 299.99
  },
  {
    id: 2,
    image: "./img-3/keys-2.svg",
    name: 'Beats Studio Pro',
    price: 349.99
  },
  {
    id: 3,
    image: "./img-3/keys-3.svg",
    name: 'Sony - WH-CH720N Wireless Noise Canceling',
    price: 149.99
  },
  {
    id: 4,
    image: "./img-3/keys-4.svg",
    name: 'Skullcandy - Rail True Wireless Earbuds',
    price: 79.99
  },
  {
    id: 5,
    image: "./img-2/card-1.svg",
    name: 'Skullcandy - 2 wireless headphones',
    price: 299.99
  },
  {
    id: 6,
    image: "./img-2/card-2.svg",
    name: 'Beats Studio wirlnes Pro',
    price: 349.99
  },
  {
    id: 7,
    image: "./img-2/card-3.svg",
    name: 'Sony - tt-C30N Wireless Noise Canceling',
    price: 149.99
  },
  {
    id: 8,
    image: "./img-2/card-4.svg",
    name: 'Skullcandy - Now Rireless Earbuds',
    price: 79.99
  }
];
 
 function search(event) {
      const searchTerm = event.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Normalize input
      const resultsContainer = document.getElementById('results'); // Container to display results

      if (searchTerm === '') {
        resultsContainer.innerHTML = '';
        return;
      }

      const filteredData = data.filter(item =>
        item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchTerm) // Normalize item name
      );

      resultsContainer.innerHTML = ''; 
      filteredData.forEach(item => {
        const resultElement = document.createElement('div');
        resultElement.innerHTML = `
          <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
          <p>${item.name} - $${item.price}</p>
        `;
        resultsContainer.appendChild(resultElement);
      });

      if (filteredData.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
      }
    }

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', search);

var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function addToCart(name, price, image) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.push({ name, price, image });

  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${name} добавлен в корзину!`);
}



// ------------------------

let options = {
  root: null,
  rootMargin: '5px',
  threshold: 0.5
};

let callback = function(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          console.log('find', entry);
          entry.target.classList.add('active');
      }
  });
};

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim');
targets.forEach(target => {
  observer.observe(target);
});

// ------------------------------





