const showBtn = document.getElementById('showBtn');
const hideBtn = document.getElementById('hideBtn');
const usersContainer = document.getElementById('users');

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        
        document.body.classList.add('content-loaded');
        
        displayUsers(data);
        
        showBtn.style.display = 'none';
        hideBtn.style.display = 'block';
        
    } catch(error) {
        usersContainer.innerHTML = '<p>შეცდომა მონაცემების ჩატვირთვისას</p>';
        console.error('Error:', error);
    }
}

function displayUsers(users) {
    usersContainer.innerHTML = '';
    
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
        `;
        
        usersContainer.appendChild(userCard);
    });
}

function hideUsers() {
    usersContainer.innerHTML = '';
    showBtn.style.display = 'block';
    hideBtn.style.display = 'none';
    document.body.classList.remove('content-loaded');
}

showBtn.addEventListener('click', getUsers);
hideBtn.addEventListener('click', hideUsers);