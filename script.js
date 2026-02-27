const container = document.querySelector(".me");
const searchInput = document.querySelector(".yo");

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
];

function showUsers(arr) {
  container.innerHTML = "";

  if (arr.length === 0) {
    container.innerHTML = "<p style='color:white'>No users found</p>";
    return;
  }

  const fragment = document.createDocumentFragment();

  arr.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = user.image;
    img.className = "bg-img";

    const blur = document.createElement("div");
    blur.className = "blurred-layer";

    const content = document.createElement("div");
    content.className = "content";

    const title = document.createElement("h3");
    title.textContent = user.username;

    const bio = document.createElement("p");
    bio.textContent = user.bio;

    content.append(title, bio);
    card.append(img, blur, content);
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

showUsers(users);

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const filtered = users.filter((user) =>
    user.username.toLowerCase().includes(value),
  );
  showUsers(filtered);
});
