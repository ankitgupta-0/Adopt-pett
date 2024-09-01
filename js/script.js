
function navigateTo(page) {
  window.location.href = page;
}

let index = 0;

function showNextImages() {
  const track = document.querySelector('.carousel-track');
  const images = document.querySelectorAll('.carousel img');
  index = (index + 1) % (images.length / 4);
  track.style.transform = `translateX(-${index * 600}px)`;
}

setInterval(showNextImages, 2000);


const availableItems = [
  { name: 'Dog Food', url: 'dog_food.html' },
  { name: 'Dog Toys', url: 'dog_toys.html' },
  { name: 'Dog Accessories', url: 'dog_accessories.html' },
  { name: 'Cat Food', url: 'cat_food.html' },
  { name: 'Cat Toys', url: 'cat_toys.html' },
  { name: 'Cat Accessories', url: 'cat_accessories.html' },
  { name: 'Bird Food', url: 'bird_food.html' },
  { name: 'Bird Toys', url: 'bird_toys.html' },
  { name: 'Bird Accessories', url: 'bird_accessories.html' },
  { name: 'Reptile Food', url: 'reptile_food.html' },
  { name: 'Reptile Accessories', url: 'reptile_accessories.html' }
];

function showSuggestions(query) {
  const suggestionsList = document.getElementById('suggestionsList');
  suggestionsList.innerHTML = ''; // Clear previous suggestions

  if (query.length === 0) {
      suggestionsList.style.display = 'none';
      return;
  }

  const filteredItems = availableItems.filter(item => 
      item.name.toLowerCase().startsWith(query.toLowerCase())
  );

  if (filteredItems.length > 0) {
      filteredItems.forEach(item => {
          const suggestionItem = document.createElement('div');
          suggestionItem.textContent = item.name;
          suggestionItem.onclick = () => selectSuggestion(item.name);
          suggestionsList.appendChild(suggestionItem);
      });
      suggestionsList.style.display = 'block';
  } else {
      suggestionsList.style.display = 'none';
  }
}

function selectSuggestion(itemName) {
  document.querySelector('.search-input').value = itemName;
  document.getElementById('suggestionsList').style.display = 'none';
  searchItem(); // Trigger search/navigation after selection
}

function searchItem() {
  const query = document.querySelector('.search-input').value.toLowerCase();
  const item = availableItems.find(item => item.name.toLowerCase() === query);

  if (item) {
      window.location.href = item.url; // Navigate to the appropriate page
  } else {
      alert('Item not found!');
  }
}

function handleEnter(event) {
  if (event.key === 'Enter') {
      searchItem(); // Trigger search/navigation when Enter is pressed
  }
}


let cartCount = 0;

function addToCart() {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
}



// carousel categories

let currentIndex = 0;

function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const trackWidth = track.scrollWidth;
    const containerWidth = document.querySelector('.carousel-track-container').offsetWidth;
    const totalItems = document.querySelectorAll('.carousel-track img').length;
    const itemWidth = containerWidth;

    if (direction === 'left') {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    } else if (direction === 'right') {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    }

    const offset = -currentIndex * itemWidth;
    track.style.transform = `translateX(${offset}px)`;
}


// footer
document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
});

