import { fetchProjects } from "./common.js";

function getIdFromURL() {
  const params = new URLSearchParams(window.location.search);

  return params.get("id");
}

//Render Project in Project Page
function renderProject(project) {
  let html = `
  <h1 class="project-title">${project.name}</h1>
      <div class="date-line">
        <p class="intro-text-medium">${project.description}</p>
        <p class="intro-text-regular">
          Completed on <span class="date">${project.completed_on}</span>
        </p>
      </div>
      <div class="proj-main-img-back">
        <img
          class="proj-main-img"
          src="${project.image}"
          alt="imagen proyecto"
        />
        <img
          class="shadow-main-img"
          src="${project.image}"
          alt="imagen proyecto"
        />
      </div>
      <div class="proj-parraf intro-text-regular">
        <p>
          ${project.content}
        </p>
      </div>
  `;

  const projectInDetail = document.getElementById("project-in-detail");

  projectInDetail.innerHTML = html;
}

//Render other projects
function renderOtherProjects(projects, id) {
  let html = "";
  let counter = 0;
  for (let i = 0; counter < 3 && i < projects.length; i++) {
    const project = projects[i];
    if (project.uuid !== id) {
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
            <a href="/project-page?id=${project.uuid}" class="headline-text-regular">Learn more</a>
          </div>
        </div>
  `;
      counter += 1;
    }
  }

  const otherProjects = document.getElementById("other-projects-wrapper");

  otherProjects.innerHTML = html;
}

//Fetch API data
async function load() {
  const projects = await fetchProjects();
  const id = getIdFromURL();
  const project = projects.find((project) => project.uuid == id);
  renderProject(project);
  renderOtherProjects(projects, id);
}

load();

//Catch errors
//Placeholder while loading
