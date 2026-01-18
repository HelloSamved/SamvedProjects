/**
 * PROJECT CONFIGURATION
 * Add your hosted websites here. Each project needs:
 * - title: The name of your website
 * - description: A short blurb about what it is
 * - url: The full link to your hosted site
 * - icon: FontAwesome icon class (optional, default is 'fa-rocket')
 */
const projects = [
    {
        title: "Expense Tracker",
        description: "A full-stack application to track daily expenses with clean UI.",
        url: "https://hellosamved.github.io/expensetrackernobackend/",
        icon: "fa-wallet"
    },
    {
        title: "FocusFlow",
        description: "A productivity app designed to help you stay in the zone.",
        url: "https://focusflow-app.vercel.app",
        icon: "fa-brain"
    }
];

// --- RENDER LOGIC (No need to touch this unless you want to change how it works) ---

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('projects-grid');
    const yearSpan = document.getElementById('year');

    // Set current year
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Clear loader
    grid.innerHTML = '';

    // Render projects
    projects.forEach((project, index) => {
        const card = document.createElement('a');
        card.href = project.url;
        card.target = "_blank";
        card.className = 'project-card';
        card.setAttribute('rel', 'noopener noreferrer');

        card.innerHTML = `
            <div class="project-info">
                <h3 class="project-title">
                    <i class="fas ${project.icon || 'fa-rocket'}"></i>
                    ${project.title}
                </h3>
                <p class="project-description">${project.description}</p>
            </div>
            <div class="external-icon">
                <i class="fas fa-arrow-up-right-from-square"></i>
            </div>
        `;

        grid.appendChild(card);

        // Add visibility class with delay for animation
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 100);
    });
});
