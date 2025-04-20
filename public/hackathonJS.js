import { careers } from './data.js';

// GET user data
const userData = JSON.parse(localStorage.getItem('userData'));
const welcome = document.getElementById('welcome-msg');
const careerList = document.getElementById('career-list');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const title = document.getElementById('career-title');
const steps = document.getElementById('career-steps');
const img = document.getElementById('career-img');

// Safety check for userData
if (userData) {
  welcome.textContent = `Welcome, ${userData.name}! Choose Your Career Path!`;

  // Filter careers
  const filtered = careers.filter(c =>
    userData.age >= c.minAge && c.stream === userData.stream
  );

  // Render cards
  filtered.forEach(career => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${career.img}" alt="${career.name}" />
      <h3>${career.name}</h3>
      <p>Click to explore steps</p>
    `;
    card.addEventListener('click', () => {
      title.textContent = career.name;
      img.src = career.img;
      steps.innerHTML = career.steps.map(s => `<li>${s}</li>`).join('');
      modal.style.display = 'flex';
    });
    careerList.appendChild(card);
  });
} else {
  welcome.textContent = 'Welcome! Please enter your details first.';
}

closeBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};
