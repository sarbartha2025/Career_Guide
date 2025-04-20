export const careers = [
    // Initial careers array (first 15 science careers)
    {
        name: "Software Engineer",
        stream: "science",
        minAge: 8,
        steps: [
            "Age 8: Play coding games (Scratch, Tynker)",
            // ... rest of steps
        ],
        img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
    },
    // ... all other initial career objects
];

// Add subsequent career objects using push()
careers.push(
    {
        name: "Astronomer",
        stream: "science",
        minAge: 10,
        steps: [
            "Explore space books and documentaries",
            // ... steps
        ],
        img: "https://cdn-icons-png.flaticon.com/512/8524/8524670.png"
    },
    // ... other science careers
);

careers.push(
    {
        name: "Chemist",
        stream: "science",
        minAge: 10,
        steps: [
            "Do fun chemistry experiments at home",
            // ... steps
        ],
        img: "https://cdn-icons-png.flaticon.com/512/4331/4331807.png"
    },
    // ... other pushed careers
);

careers.push(
    // Last batch of careers including commerce ones
    {
        name: "Chartered Accountant (CA)",
        stream: "commerce",
        minAge: 17,
        steps: [
            "Focus on math and accountancy in school",
            // ... steps
        ],
        img: "https://cdn-icons-png.flaticon.com/512/2721/2721286.png"
    },
    // ... other commerce careers
);