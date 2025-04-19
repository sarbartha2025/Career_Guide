// Sample career data for different streams and age ranges


const careers = [
  {
      name: "Software Engineer",
      stream: "science",
      minAge: 8,
      steps: [
          "Age 8: Play coding games (Scratch, Tynker)",
          "Age 9: Build animations with block coding",
          "Age 10: Learn basic Python/JavaScript",
          "Age 11: Solve logic puzzles & math games",
          "Age 12: Make simple websites",
          "Age 13: Start using HTML/CSS",
          "Age 14: Build mini apps or games",
          "Age 15: Join coding competitions",
          "Age 16: Choose CS in high school",
          "Age 17: Prepare for CS entrance exams"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
  },
  
  {
      name: "Doctor",
      stream: "science",
      minAge: 9,
      steps: [
          "Age 9: Watch human body videos",
          "Age 10: Use doctor kits to role-play",
          "Age 11: Read fun biology books",
          "Age 12: Visit science museums",
          "Age 13: Focus on biology & chemistry",
          "Age 14: Watch surgery and anatomy shows (age-appropriate)",
          "Age 15: Choose PCB in high school",
          "Age 16: Prepare for NEET",
          "Age 17: Take NEET",
          "Age 18: Begin MBBS"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
  },
  {
      name: "Astronaut",
      stream: "science",
      minAge: 8,
      steps: [
          "Age 8: Learn about planets & space",
          "Age 9: Use a telescope to explore sky",
          "Age 10: Join a space camp",
          "Age 11: Read about astronauts (e.g., Kalpana Chawla)",
          "Age 12: Watch NASA/ISRO launches",
          "Age 13: Start physics & math practice",
          "Age 14: Join school science clubs",
          "Age 15: Choose PCM in high school",
          "Age 16: Prepare for Aerospace Engineering",
          "Age 17: Join courses related to space science"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/3152/3152575.png"
  },
  {
      name: "Scientist",
      stream: "science",
      minAge: 7,
      steps: [
          "Age 7: Do fun science experiments at home",
          "Age 8: Read science comics and fact books",
          "Age 9: Watch discovery/science channels",
          "Age 10: Build science projects",
          "Age 11: Join science fair in school",
          "Age 12: Explore chemistry kits",
          "Age 13: Focus on Physics/Chemistry",
          "Age 14: Choose Science stream",
          "Age 15: Prepare for BSc/Research",
          "Age 16: Join research programs"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/4682/4682974.png"
  },
  {
      name: "Robotics Engineer",
      stream: "science",
      minAge: 9,
      steps: [
          "Age 9: Play with robotics kits like LEGO",
          "Age 10: Learn to control basic sensors",
          "Age 11: Watch robotics competition videos",
          "Age 12: Join school robotics club",
          "Age 13: Learn Arduino basics",
          "Age 14: Code simple robots",
          "Age 15: Participate in competitions",
          "Age 16: Take Physics, Math, CS",
          "Age 17: Join Robotics Engineering course",
          "Age 18: Start building projects"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/3274/3274053.png"
  },
  {
      name: "Environmental Scientist",
      stream: "science",
      minAge: 8,
      steps: [
          "Age 8: Learn about pollution & recycling",
          "Age 9: Join tree plantation drives",
          "Age 10: Watch nature and wildlife videos",
          "Age 11: Collect and analyze leaves or bugs",
          "Age 12: Take part in eco projects",
          "Age 13: Learn geography and biology",
          "Age 14: Focus on environmental studies",
          "Age 15: Choose PCB or PCM",
          "Age 16: Join Environmental Science courses",
          "Age 17: Work on research or awareness campaigns"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/2909/2909769.png"
  },
  {
      name: "Veterinarian",
      stream: "science",
      minAge: 8,
      steps: [
          "Age 8: Love and care for animals",
          "Age 9: Learn animal names and behaviors",
          "Age 10: Visit pet clinics",
          "Age 11: Volunteer at animal shelters",
          "Age 12: Read animal biology books",
          "Age 13: Watch vet documentaries",
          "Age 14: Take Biology seriously",
          "Age 15: Choose PCB in high school",
          "Age 16: Join BVSc (Veterinary Science)",
          "Age 17: Practice with animal care"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/616/616408.png"
  },
  {
      name: "Chemist",
      stream: "science",
      minAge: 8,
      steps: [
          "Age 8: Mix water, colors, and salt safely",
          "Age 9: Try DIY safe chemistry experiments",
          "Age 10: Watch science lab videos",
          "Age 11: Learn about molecules and atoms",
          "Age 12: Study basic chemistry books",
          "Age 13: Practice equations and periodic table",
          "Age 14: Focus on Chemistry in school",
          "Age 15: Prepare for BSc Chemistry",
          "Age 16: Do lab research",
          "Age 17: Work in pharma or research field"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/3002/3002234.png"
  },
  {
      name: "Marine Biologist",
      stream: "science",
      minAge: 9,
      steps: [
          "Age 9: Watch ocean life documentaries",
          "Age 10: Learn about sea animals",
          "Age 11: Visit aquariums and marine museums",
          "Age 12: Read oceanology books",
          "Age 13: Study biology and ecosystems",
          "Age 14: Choose PCB in school",
          "Age 15: Pursue BSc in Marine Biology",
          "Age 16: Join coastal cleanups",
          "Age 17: Intern with marine orgs",
          "Age 18: Research marine life"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/2142/2142229.png"
  },
  {
      name: "Mathematician",
      stream: "science",
      minAge: 7,
      steps: [
          "Age 7: Solve puzzles and math games",
          "Age 8: Learn multiplication tricks",
          "Age 9: Watch fun math shows",
          "Age 10: Practice logical reasoning",
          "Age 11: Explore algebra and geometry",
          "Age 12: Solve Olympiad problems",
          "Age 13: Join math clubs",
          "Age 14: Focus on Math in school",
          "Age 15: Pursue BSc in Mathematics",
          "Age 16: Go for research or teaching"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/3104/3104620.png"
  },
  {
      name: "Game Developer",
      stream: "science",
      minAge: 9,
      steps: [
          "Age 9: Play and analyze game mechanics",
          "Age 10: Use Scratch to create games",
          "Age 11: Try Roblox Studio or Minecraft coding",
          "Age 12: Learn basic logic and loops",
          "Age 13: Start learning JS or Python",
          "Age 14: Design characters and levels",
          "Age 15: Join game dev clubs",
          "Age 16: Take CS/Multimedia in school",
          "Age 17: Study Game Development",
          "Age 18: Build your own games"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/1001/1001238.png"
  },
  {
      name: "Forensic Scientist",
      stream: "science",
      minAge: 10,
      steps: [
          "Age 10: Watch detective shows (kid-safe)",
          "Age 11: Solve fun mystery games",
          "Age 12: Learn fingerprinting and clues",
          "Age 13: Study biology and chemistry",
          "Age 14: Explore forensic science basics",
          "Age 15: Choose science with biology",
          "Age 16: Pursue BSc in Forensics",
          "Age 17: Visit forensic labs or workshops",
          "Age 18: Work on cases or research",
          "Age 19: Take higher studies or certification"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/3482/3482280.png"
  },
  {
      name: "Inventor",
      stream: "science",
      minAge: 7,
      steps: [
          "Age 7: Be curious and ask 'why'",
          "Age 8: Build things with LEGO or blocks",
          "Age 9: Tinker with toys or gadgets",
          "Age 10: Sketch ideas and devices",
          "Age 11: Join science exhibitions",
          "Age 12: Learn mechanics & circuits",
          "Age 13: Create prototypes with Arduino",
          "Age 14: File for school innovation contests",
          "Age 15: Learn patenting basics",
          "Age 16: Keep innovating and building"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/590/590836.png"
  },
  {
      name: "Science Communicator",
      stream: "science",
      minAge: 9,
      steps: [
          "Age 9: Watch science YouTube channels",
          "Age 10: Explain science to friends/family",
          "Age 11: Create science posters",
          "Age 12: Participate in science debates",
          "Age 13: Write science blogs or stories",
          "Age 14: Learn video editing",
          "Age 15: Choose science and media subjects",
          "Age 16: Intern at science magazines or YouTube",
          "Age 17: Create a science channel or podcast",
          "Age 18: Work in edu-media or museums"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/2761/2761150.png"
  },
  {
      name: "Science Teacher",
      stream: "science",
      minAge: 8,
      steps: [
          "Age 8: Teach siblings or friends simple topics",
          "Age 9: Explain school lessons out loud",
          "Age 10: Watch teaching-based science videos",
          "Age 11: Practice writing simple notes",
          "Age 12: Learn classroom experiments",
          "Age 13: Join teaching clubs",
          "Age 14: Choose Science in high school",
          "Age 15: Study BSc + B.Ed",
          "Age 16: Do practice teaching",
          "Age 17: Become a full-time teacher"
      ],
      img: "https://cdn-icons-png.flaticon.com/512/3269/3269387.png"
  }
];
[
  {
    name: "Astronomer",
    stream: "science",
    minAge: 10,
    steps: [
      "Explore space books and documentaries",
      "Follow space news and NASA updates",
      "Learn basic astronomy terms",
      "Start using a telescope",
      "Join school science clubs",
      "Study Physics and Math seriously",
      "Attend astronomy workshops",
      "Build a small stargazing project",
      "Take part in science fairs",
      "Aim for B.Sc. in Astronomy or Astrophysics"
    ],
    img: "https://cdn-icons-png.flaticon.com/512/8524/8524670.png"
  },
  {
    name: "Marine Biologist",
    stream: "science",
    minAge: 10,
    steps: [
      "Read books about ocean life",
      "Watch marine documentaries",
      "Learn about different ecosystems",
      "Stay curious about biology",
      "Start a sea life scrapbook",
      "Visit aquariums and marine parks",
      "Study science subjects in school",
      "Participate in environmental clubs",
      "Do simple water-based science experiments",
      "Aim for B.Sc. in Marine Biology"
    ],
    img: "https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
  },
  {
    name: "Game Developer",
    stream: "science",
    minAge: 10,
    steps: [
      "Play and analyze video games",
      "Explore game engines like Scratch",
      "Learn basic programming (Python or JS)",
      "Watch game dev YouTube channels",
      "Try building simple games",
      "Join coding clubs",
      "Study Math and Logic well",
      "Use platforms like Unity (later)",
      "Contribute to game ideas in groups",
      "Aim for CS/Software Engineering"
    ],
    img: "https://cdn-icons-png.flaticon.com/512/3145/3145765.png"
  },
  {
    name: "AI Engineer",
    stream: "science",
    minAge: 10,
    steps: [
      "Learn how AI works (basic level)",
      "Explore chatbots and smart tools",
      "Start coding in Python",
      "Understand algorithms via simple puzzles",
      "Watch AI videos for kids",
      "Learn logic and pattern recognition",
      "Use simple AI tools like Teachable Machine",
      "Do beginner AI projects",
      "Participate in STEM clubs",
      "Target B.Tech in AI/Data Science"
    ],
    img: "https://cdn-icons-png.flaticon.com/512/6062/6062640.png"
  },
  {
    name: "Environmental Scientist",
    stream: "science",
    minAge: 10,
    steps: [
      "Read about climate and pollution",
      "Join or start school eco-clubs",
      "Take part in clean-up drives",
      "Learn about recycling and energy",
      "Do mini projects on sustainability",
      "Watch environment-related documentaries",
      "Start a plant/compost project",
      "Participate in science fairs",
      "Focus on Biology and Chemistry",
      "Aim for B.Sc. in Environmental Science"
    ],
    img: "https://cdn-icons-png.flaticon.com/512/2991/2991083.png"
  },
  {
    name: "Pilot",
    stream: "science",
    minAge: 10,
    steps: [
      "Explore flight simulators",
      "Learn about airplanes and airports",
      "Understand basic physics (lift, thrust)",
      "Watch aviation documentaries",
      "Visit airshows or aviation museums",
      "Read aviation books for kids",
      "Stay healthy and physically fit",
      "Focus on Math and Physics",
      "Join NCC Air Wing if available",
      "Target flying school after 12th"
    ],
    img: "https://cdn-icons-png.flaticon.com/512/1690/1690737.png"
  },
  {
    name: "Zoologist",
    stream: "science",
    minAge: 10,
    steps: [
      "Watch animal shows (Nat Geo, etc.)",
      "Start an animal observation journal",
      "Read about animal species",
      "Volunteer in animal shelters",
      "Visit zoos and wildlife centers",
      "Join school science clubs",
      "Do biology experiments",
      "Participate in quizzes or debates",
      "Learn about habitats and adaptations",
      "Pursue B.Sc. in Zoology"
    ],
    img: "https://cdn-icons-png.flaticon.com/512/3435/3435092.png"
  },
  {
    name: "Forensic Scientist",
    stream: "science",
    minAge: 10,
    steps: [
      "Watch crime investigation shows (kid-safe)",
      "Learn observation skills",
      "Play puzzle and logic games",
      "Read forensic-themed books",
      "Join science fairs with crime scene projects",
      "Do fingerprint or DNA model projects",
      "Study Chemistry and Biology",
      "Visit science museums with crime exhibits",
      "Practice deductive reasoning",
      "Target B.Sc. in Forensic Science"
    ],
    img: "https://cdn-icons-png.flaticon.com/512/2739/2739990.png"
  },
  {
    name: "Meteorologist",
    stream: "science",
    minAge: 10,
    steps: [
      "Track weather apps and forecasts",
      "Learn weather symbols and maps",
      "Watch videos on clouds, rain, and storms",
      "Keep a weather observation diary",
      "Make DIY weather tools (barometer, rain gauge)",
      "Study Earth Science basics",
      "Focus on Math and Physics",
      "Visit science centers and observatories",
      "Join quiz contests and science exhibitions",
      "Aim for B.Sc. in Meteorology or Atmospheric Science"
    ],
    img: "https://cdn-icons-png.flaticon.com/512/2905/2905978.png"
  },
  {
    name: "Robotics Engineer",
    stream: "science",
    minAge: 10,
    steps: [
      "Play with programmable robots like LEGO Mindstorms",
      "Watch robotics shows and competitions",
      "Learn basic coding (Python, Scratch)",
      "Join school robotics clubs",
      "Build mini robots or bots from kits",
      "Understand electronics basics",
      "Do simple automation projects",
      "Take part in STEM or RoboFests",
      "Explore Arduino or Raspberry Pi",
      "Aim for Mechatronics/Robotics Engineering"
    ],
    img: "https://cdn-icons-png.flaticon.com/512/3522/3522911.png"
  },

  // 10 more coming below
];

  



/* FIXED FILE */

// Consolidated and cleaned-up career list
 [
// Include only unique and complete career entries here
// Avoid duplicates like multiple Pharmacist or Marine Biologist entries
// Keep formatting consistent and logic organized
// This sample includes only a subset; full list should be similarly refactored

{
    name: "Software Engineer",
    stream: "science",
    minAge: 8,
    steps: [
        "Age 8: Play coding games (Scratch, Tynker)",
        "Age 9: Build animations with block coding",
        "Age 10: Learn basic Python/JavaScript",
        "Age 11: Solve logic puzzles & math games",
        "Age 12: Make simple websites",
        "Age 13: Start using HTML/CSS",
        "Age 14: Build mini apps or games",
        "Age 15: Join coding competitions",
        "Age 16: Choose CS in high school",
        "Age 17: Prepare for CS entrance exams"
    ],
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
},
// ... continue with other unique and properly formatted careers
];













// GET user data
const userData = JSON.parse(localStorage.getItem('userData'));
const welcome = document.getElementById('welcome-msg');
const careerList = document.getElementById('career-list');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const title = document.getElementById('career-title');
const steps = document.getElementById('career-steps');
const img = document.getElementById('career-img');

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

closeBtn.onclick = () => (modal.style.display = 'none');
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};

document.addEventListener("DOMContentLoaded", () => {
  const welcomeMsg = document.getElementById("welcome-msg");
  const careerList = document.getElementById("career-list");

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("career-title");
  const modalImg = document.getElementById("career-img");
  const modalSteps = document.getElementById("career-steps");
  const closeBtn = document.getElementById("close-btn");

  if (welcomeMsg && careerList) {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      const { name, age, stream } = userData;
      welcomeMsg.textContent = `Welcome, ${name}!`;

      const filteredCareers = (careerData[stream] || []).filter(
        (career) => age >= career.minAge && age <= career.maxAge
      );

      if (filteredCareers.length === 0) {
        careerList.innerHTML = "<p>No career options found for your input.</p>";
        return;
      }

      filteredCareers.forEach((career) => {
        const card = document.createElement("div");
        card.className = "career-card";
        card.innerHTML = `
          <img src="${career.image}" alt="${career.title}" />
          <h3>${career.title}</h3>
        `;
        card.addEventListener("click", () => {
          modalTitle.textContent = career.title;
          modalImg.src = career.image;
          modalSteps.innerHTML = "";
          career.steps.forEach((step) => {
            const li = document.createElement("li");
            li.textContent = step;
            modalSteps.appendChild(li);
          });
          modal.style.display = "block";
        });
        careerList.appendChild(card);
      });
    }
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
async function getCareerSuggestion() {
  const input = document.getElementById('userInput').value;
  const responseEl = document.getElementById('aiResponse');

  responseEl.textContent = "Thinking... 🤔";

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: `Suggest suitable career options based on this user's interests: ${input}` }),
    });

    const data = await response.json();
    console.log("AI response:", data); // 👈 Add this line

    if (data.reply) {
      responseEl.textContent = data.reply.trim();
    } else {
      responseEl.textContent = "⚠️ No suggestion returned. Try again.";
    }
  } catch (error) {
    console.error(error);
    responseEl.textContent = "❌ Error connecting to the AI.";
  }
}
