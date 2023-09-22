//your code here
const userPhoto = document.getElementById('userPhoto');
const userName = document.getElementById('userName');
const additionalData = document.getElementById('additionalData');
const ageButton = document.querySelector('button[data-attr="age"]');
const emailButton = document.querySelector('button[data-attr="email"]');
const phoneButton = document.querySelector('button[data-attr="phone"]');
const getUserButton = document.getElementById('getUser');

// Function to fetch and display user data
async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        // Display user photo and full name
        userPhoto.src = user.picture.large;
        userName.textContent = `${user.name.first} ${user.name.last}`;

        // Clear additional info
        additionalData.textContent = '';

        // Event listeners for buttons
        ageButton.addEventListener('click', () => {
            additionalData.textContent = `Age: ${user.dob.age}`;
        });

        emailButton.addEventListener('click', () => {
            additionalData.textContent = `Email: ${user.email}`;
        });

        phoneButton.addEventListener('click', () => {
            additionalData.textContent = `Phone: ${user.phone}`;
        });
    } catch (error) {
        console.error('Error fetching random user:', error);
    }
}

// Initial fetch on page load
fetchRandomUser();

// Event listener for "Get User" button
getUserButton.addEventListener('click', fetchRandomUser);
