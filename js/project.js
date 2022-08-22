import { fetchProjects } from "./common.js";

function getIdFromURL() {
  const params = new URLSearchParams(window.location.search);

  return params.get("id");
}

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

const MAX_PROJECTS_TO_RENDER = 3;

function renderOtherProjects(projects) {
  let html = "";
  let counter = 0;
  for (
    let i = 0;
    counter < MAX_PROJECTS_TO_RENDER && i < projects.length;
    i++
  ) {
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
            <a href="/project-page?id=${project.uuid}" class="headline-text-regular">Learn more</a>
          </div>
        </div>
  `;
    counter += 1;
  }

  const otherProjects = document.getElementById("other-projects-wrapper");

  otherProjects.innerHTML = html;
}

function parseProjects(projects) {
  const id = getIdFromURL();
  return projects.reduce(
    (acc, project) => {
      if (project.uuid === id) {
        acc.project = project;
      } else {
        acc.otherProjects.push(project);
      }
      return acc;
    },
    {
      project: null,
      otherProjects: [],
    }
  );
}

async function load() {
  try {
    const projects = await fetchProjects();
    const parsedProjects = parseProjects(projects);
    if (parsedProjects.project == null) {
      window.location.replace("/error-page");
    } else {
      renderProject(parsedProjects.project);
      renderOtherProjects(parsedProjects.otherProjects);
    }
  } catch (error) {
    const projectAndProjectsWrapper = document.getElementById(
      "project-and-projects-wrapper"
    );
    projectAndProjectsWrapper.innerHTML = `
    <p class="alert intro-text-regular">Failed to fetch project 🥲</p>
    `;
  }
}

load();
