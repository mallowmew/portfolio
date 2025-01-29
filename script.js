"use strict";

const portfolio = document.querySelector("#portfolio")

async function makeProjects() {
    const data = await (fetch('projects.json').then(response => response.json()))
    data.projects.reverse().forEach((project) => {
        portfolio.innerHTML += `
        <div class="flex mx-auto my-6 bg-stone-900 p-6">
            <div class="flex-1 overflow-hidden mr-6 basis-1/2 shrink-0 grow-0">
                <img src="images/${project.thumbnail}" />
            </div>
            <div>
                <h1 class="text-4xl my-6 mt-12">${project.title}</h1>
                <h2 class="text-xl font-semibold my-6">${project.subtitle}</h2>
                <p class="my-3">
                    ${project.description}
                </p>
                <p class="my-3">
                    <a class="text-yellow-600 font-semibold" href="${project.link}">Here</a>
                </p>
                <p class="my-3">
                    <a class="text-yellow-600 font-semibold" href="${project.repository}">Repository</a>
                </p>
            </div>
        </div>
        `
        // todo: multiline (paragraph) descriptions
        // todo: check if fields actually exist, provide sensible placeholders or remove blank fields from template
    });
}

makeProjects()


const footer_date = document.querySelector("#footer-date")
footer_date.innerHTML = new Date().getFullYear().toString()
