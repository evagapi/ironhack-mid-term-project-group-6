const API_ENDPOINT =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

export async function fetchProjects() {
  const response = await fetch(API_ENDPOINT);
  return await response.json();
}
