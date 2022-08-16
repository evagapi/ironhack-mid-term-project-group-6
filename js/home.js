const API_ENDPOINT =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

function renderProjects(projects) {
  let html = "";

  const projectsWrapper = document.getElementById("projects-wrapper");
  for (let i = 0; i < 3; i++) {
    const project = projects[i];
    html += `
       <div class="project">
          <img
            src="${project.image}"
            alt="colorful geometric shapes"
            class="project-image"
          />
          <div class="project-text-wrapper">
            <p class="intro-text-medium">${project.name}</p>
            <p class="headline-text-regular">${project.description}</p>
            <a href="#" class="headline-text-regular">Learn more</a>
          </div>
        </div>
    `;
  }
  projectsWrapper.innerHTML = html;
}

async function load() {
  try {
    const response = await fetch(API_ENDPOINT);
    const projects = await response.json();
    renderProjects(projects);
  } catch {
    const projectsWrapper = document.getElementById("projects-wrapper");
    projectsWrapper.parentElement.innerHTML = `<p class="alert intro-text-regular">Failed to fetch recent projects 🥲</p>`;
  }
}

load();
