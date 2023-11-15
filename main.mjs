import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid';



const userQuantity = 100;

function generateUser() {
    const user = {
        id: uuidv4(),
        fullname: faker.person.fullName(),
        city: faker.location.city(),
        location: faker.location.country(),
        salary: faker.number.int({min: 500, max: 5000}),
        technologies: faker.helpers.arrayElements([
            "JavaScript",
            "HTML",
            "CSS",
            "React",
            "Angular",
        ]),
        pictureURL: faker.image.avatar(),
    };

    return user;
}

function generateUsers (quantity) {
    const users = [];

    for (let i = 0; i < quantity; i++) {
        users.push(generateUser());
    }

    return users;
}

const USERS = generateUsers(userQuantity);

console.log(USERS);

// elements

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const usersWrapper = document.getElementById("users-wrapper");

let searchResults = null;

searchButton.onclick = () => {
    if (!searchResults) {
        searchButton.textContent = "Back";
        const value = searchInput.value.toLowerCase();

        searchResults = USERS.filter((user) => 
            user.fullname.toLowerCase().includes(value) || 
            user.location.toLowerCase().includes(value) ||
            user.city.toLowerCase().includes(value));
        renderUsers(searchResults);
        
    } else {
        searchButton.textContent = "Search";
        searchInput.value = "";
        searchResults = null;
        renderUsers(USERS);
    }
};

function renderUsers (users) {
    usersWrapper.innerHTML = "";

    users.forEach((user, i) =>{
        const {id, fullname, city, location, pictureURL, salary, technologies } = user;
        usersWrapper.innerHTML += 
        `
            <div class="user-item" id="user-${id}">
                <img alt="${fullname}" src="${pictureURL}" class="user-avatar"/>
                <div>
                    <h3>${fullname}</h3>
                    <h4>${salary}$</h4>
                    <span>${location}, ${city}</span>
                </div>
                <div class="technologies">
                    ${technologies.map((tech) => `<span>${tech}</span>`).join("")}
                </div>
            </div>
        `;

        setTimeout(() => {
            const deleteButton = document.createElement("button");     
            deleteButton.textContent = "Delete";
      
            deleteButton.onclick = () => {
                console.log(`Delete user:`, user);
            
                // HW
                const updatedUsers = USERS.filter((deleteUserById) => deleteUserById.id !== id);
                
                renderUsers(updatedUsers);                               
            };
      
            const userElement = document.getElementById(`user-${id}`);
            userElement.appendChild(deleteButton);
        }, 1000);
    });
}


renderUsers(USERS);






