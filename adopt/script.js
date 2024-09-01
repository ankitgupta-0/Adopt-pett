// Example dog data
const dogs = [
    {
        id: 1,
        name: 'Max',
        age: '2 years',
        gender: 'Male',
        breed: 'Labrador',
        description: 'Friendly and energetic.',
        imgUrl: 'images/dog1.jpg',
        email: 'adopt.max@example.com',
        contactNumber: '123-456-7890'
    },
    // Add more dog data here
];

function getDogById(id) {
    return dogs.find(dog => dog.id == id);
}

function loadDogDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const dogId = urlParams.get('id');
    const dog = getDogById(dogId);

    if (dog) {
        const dogDetailsDiv = document.getElementById('dog-details');
        dogDetailsDiv.innerHTML = `
            <img src="${dog.imgUrl}" alt="${dog.name}">
            <h2>${dog.name}</h2>
            <p><strong>Age:</strong> ${dog.age}</p>
            <p><strong>Gender:</strong> ${dog.gender}</p>
            <p><strong>Breed:</strong> ${dog.breed}</p>
            <p><strong>Description:</strong> ${dog.description}</p>
            <p><strong>Email:</strong> <a href="mailto:${dog.email}">${dog.email}</a></p>
            <p><strong>Contact Number:</strong> ${dog.contactNumber}</p>
        `;
    } else {
        document.getElementById('dog-details').innerHTML = '<p>Dog not found.</p>';
    }
}

// Load dog details when the page loads
window.onload = loadDogDetails;
