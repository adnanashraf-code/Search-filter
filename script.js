const container = document.querySelector(".me");
const searchInput = document.querySelector(".yo");

/* ===========================
   USERS DATA
=========================== */

const users = [
  {
    username: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Frontend developer who loves building modern UI with clean design.",
  },
  {
    username: "Isha Verma",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "UX designer passionate about user-centered digital experiences.",
  },
  {
    username: "Rohan Mehta",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Full-stack developer exploring scalable web applications.",
  },
  {
    username: "Ananya Kapoor",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    bio: "Creative content strategist and social media enthusiast.",
  },
  {
    username: "Kabir Khan",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "Backend engineer focused on performance and clean architecture.",
  },
  {
    username: "Meera Joshi",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    bio: "Product designer blending creativity with usability.",
  },
  {
    username: "Arjun Patel",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    bio: "AI enthusiast learning machine learning and data science.",
  },
  {
    username: "Sneha Reddy",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    bio: "Marketing specialist with a love for digital branding.",
  },
  {
    username: "Dev Malhotra",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    bio: "Tech blogger sharing knowledge about JavaScript and React.",
  },
  {
    username: "Priya Nair",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "Software engineer building efficient and scalable systems.",
  },
  {
    username: "Ayaan Roy",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Frontend engineer building responsive and interactive web interfaces using modern JavaScript.",
  },
  {
    username: "Zara Siddiqui",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "UI UX designer focused on accessibility, clean layouts, and delightful user experiences.",
  },
  {
    username: "Vivaan Gupta",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    bio: "Full stack developer working with Node.js, Express, and MongoDB to build scalable apps.",
  },
  {
    username: "Aditi Rao",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Product thinker who bridges design and development for impactful digital solutions.",
  },
  {
    username: "Reyansh Kulkarni",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    bio: "Backend developer passionate about APIs, system design, and database optimization.",
  },
  {
    username: "Myra Thomas",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    bio: "Creative strategist blending branding with modern web technologies.",
  },
  {
    username: "Kunal Arora",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    bio: "Aspiring AI engineer exploring machine learning and data driven systems.",
  },
  {
    username: "Riya Sen",
    image: "https://randomuser.me/api/portraits/women/39.jpg",
    bio: "Digital marketer specializing in growth strategies and performance campaigns.",
  },
  {
    username: "Ishaan Bhatia",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
    bio: "JavaScript enthusiast building projects with React and exploring advanced concepts.",
  },
  {
    username: "Naina Kapoor",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    bio: "Software developer focused on writing clean, maintainable, and testable code.",
  },
];
/* ===========================
   RENDER USERS
=========================== */

function renderUsers(data) {
  container.innerHTML = "";

  if (!data.length) {
    container.innerHTML = `<p class="no-user">No users found</p>`;
    return;
  }

  const fragment = document.createDocumentFragment();

  data.forEach(({ username, image, bio }) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${image}" class="bg-img" />
      <div class="blurred-layer"></div>
      <div class="content">
        <h3>${username}</h3>
        <p>${bio}</p>
      </div>
    `;

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

renderUsers(users);

/* ===========================
   SEARCH
=========================== */

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase().trim();

  const filtered = users.filter((user) =>
    user.username.toLowerCase().includes(value),
  );

  renderUsers(filtered);
});

/* ===========================
   TOASTER SYSTEM
=========================== */

function createToaster({
  positionX = "right",
  positionY = "top",
  theme = "dark",
  duration = 3,
}) {
  const parent = document.createElement("div");
  parent.className = `
    toast-container
    ${positionX}
    ${positionY}
    ${positionY === "bottom" ? "reverse" : ""}
  `;

  document.body.appendChild(parent);

  return function showToast(message) {
    const toast = document.createElement("div");
    toast.className = `toast ${theme}`;
    toast.textContent = message;

    parent.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, duration * 1000);
  };
}

/* ===========================
   INIT TOASTER
=========================== */

const toaster = createToaster({
  positionX: "left",
  positionY: "top",
  theme: "dark",
  duration: 3,
});
toaster("Search Users Project Loaded");
setTimeout(() => {
  toaster("Welcome to the User Search App!");
}, 2000);
setTimeout(() => {
  toaster("Try searching for users using the input above!");
}, 2500);
setTimeout(() => {
  toaster("Enjoy exploring the user profiles!");
}, 3000);
