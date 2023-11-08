const topNav = document.querySelector(".topNav");
if (topNav) {
  topNav.innerHTML = `
    <logo-tag>
    <img src="Logos/logo2.png" alt="">
    </logo-tag>
    <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="blog.html">HelloKS</a>
    <a href="contact.html">Contact</a>
    <a href="donate.html" id="donateSmall">Donate</a>
    </nav>
    <button class="material-symbols-outlined" onclick="toggleMenu()">menu</button>
    `;
}

const topNavMenu = document.querySelector(".topNav nav");

const toggleMenu = () => {
  topNavMenu.classList.toggle("change");
};


const getTimeSince = (unixtime) => {
  const time = new Date(unixtime)
  const now = new Date();
  const timeDiff = now - time; // Calculate the time difference in milliseconds

  const minutes = Math.floor(timeDiff / (1000 * 60)); // Calculate minutes
  const hours = Math.floor(timeDiff / (1000 * 60 * 60)); // Calculate hours
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Calculate days

  if (minutes < 60) {
    return `${minutes} min${minutes !== 1 ? 's' : ''} ago`;
  } else if (hours < 24) {
    return `${hours} hr${hours !== 1 ? 's' : ''} ago`;
  } else {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
}

const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('main');

if(sidebar){
  sidebar.innerHTML = `
  <section class="loader"></section>
  <button class="material-symbols-outlined absolute left-full" onclick="toggleSidebar()">menu</button>
  <header class="flex items-center gap-2">
  <span>HelloKS</span>
  <i class="material-symbols-outlined">chat</i>
  </header>
  <section class="flex flex-col gap-2">
  <a href="homeManager.html" class="flex items-center gap-1 text-lg"><i class="material-symbols-outlined">home</i> Homepage</a>
  <a href="dashboard.html" class="flex items-center gap-1 text-lg"><i class="material-symbols-outlined">post_add</i> Posts</a>
  <a href="services.html" class="flex items-center gap-1 text-lg"><i class="material-symbols-outlined">design_services</i> Services</a>
  </section>
  <section style="display:flex; flex-direction:column; align-items:center; gap:1rem">
    <span id='username' class="bg-cyan-400 text-white p-2 rounded-md"></span>
    <strong style="cursor:pointer;" class="material-symbols-outlined" id='logout'>power_settings_new</strong>
  </section>
  `
}

const socialBoxes = document.querySelectorAll('.socialBox');
socialBoxes.forEach((box)=>{
  box.innerHTML = `
  <a target="_blank" href="https://www.tiktok.com/search?q=kwamestevens911&t=1699407219471" class="fa-brands fa-tiktok"></a>
  <a target="_blank" href="https://www.instagram.com/kwamestevens911/" class="fa-brands fa-instagram"></a>
  <a target="_blank" href="" class="fa-brands fa-facebook-f"></a>
  <a target="_blank" href="" class="fa-brands fa-youtube"></a>
  `
})

const toggleSidebar = () => {
  if(sidebar){
    sidebar.classList.toggle('change')
    main.classList.toggle('change')
  }
}

const loader = document.querySelector('.loader')

const startLoader = () => {
  if(loader){
    loader.classList.remove('hide')
  }
}
const endLoader = () => {
  if(loader){
    loader.classList.add('hide')
  }
}