/*  data file to update projects */ 
const projects = [
  {
    project: 'Art gallery showcase',
    imageDesktop: 'assets/images/thumbnail-project-6-large.webp',
    //TO-Do => update img with view port resize
    imageMobile: 'assets/images/thumbnail-project-6-small.webp',
    tooling: ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript'],
    linkToProject: 'https://legendary-maamoul-0b4a74.netlify.app/',
    linkToCode: 'https://github.com/Chanda-Abdul/Angular-Galleria-Slideshow',
  },
  {
    project: 'Dine restaurant landing page',
    imageDesktop: 'assets/images/dine-thumbnail-desktop.webp',
    imageMobile: 'assets/images/dine-thumbnail-desktop.webp',
    tooling: ['Angular', 'JavaScript', 'Sass', 'TypeScript', 'Figma', 'HTML'],
    linkToProject: 'https://phenomenal-crisp-7a42d8.netlify.app/',
    linkToCode:
      'https://github.com/Chanda-Abdul/Frontend-Mentor-Angular-Dine-Restaurant',
  },
  {
    project: 'IP Address Tracker',
    imageDesktop: 'assets/images/IP-address-desktop.webp',
    imageMobile: 'assets/images/IP-address-desktop.webp',
    tooling: ['APIs', 'Angular', 'HTML', 'JavaScript', 'CSS', 'TypeScript'],
    linkToProject: 'https://tubular-cheesecake-3b5f91.netlify.app/',
    linkToCode:
      'https://github.com/Chanda-Abdul/Frontend-Mentor-IP-address-tracker-Angular',
  },

  {
    project: 'Interactive card details form',
    imageDesktop:
      'assets/images/interactive-card-details-form-thumbnail-desktop.webp',
    imageMobile:
      'assets/images/interactive-card-details-form-thumbnail-desktop.webp',
    tooling: ['TypeScript', 'Angular', 'HTML', 'JavaScript', 'Sass'],
    linkToProject: 'https://stalwart-twilight-d769cf.netlify.app/',
    linkToCode:
      'https://github.com/Chanda-Abdul/Angular-Interactive-Card-Details-Form-Frontend-Mentor',
  },
  {
    project: 'Password generator app',
    imageDesktop: 'assets/images/password-thumbnail-desktop.webp',
    imageMobile: 'assets/images/password-thumbnail-mobile.webp',
    tooling: [
      'Angular',
      'CSS',
      'Material UI',
      'TypeScript',
      'Sass',
      'JavaScript',
    ],
    linkToProject: 'https://stalwart-alpaca-aa2da3.netlify.app/',
    linkToCode:
      'https://github.com/Chanda-Abdul/frontend-mentor-angular-password-generator-app',
  },
  {
    project: 'Multi-step Reactive form',
    imageDesktop: 'assets/images/form-thumbnail-desktop.webp',
    imageMobile: 'assets/images/form-thumbnail-mobile.webp',
    tooling: ['Angular', 'Material UI', 'Sass', 'TypeScript', 'JavaScript'],
    linkToProject: 'https://github.com/Chanda-Abdul/Angular-Multi-step-form',
    linkToCode: 'https://github.com/Chanda-Abdul/Angular-Multi-step-form',
  },
  {
    project: 'Landing page with dropdown navigation',
    imageDesktop: 'assets/images/dropdown-thumbnail-desktop.webp',
    imageMobile: 'assets/images/dropdown-thumbnail-desktop.webp',
    tooling: ['React', 'HTML', 'CSS', 'JavaScript'],
    linkToProject: 'https://darling-boba-0cc95f.netlify.app/',
    linkToCode:
      'https://github.com/Chanda-Abdul/react-dropdown-navigation-frontend-mentor',
  },
  {
    project: 'Modern Art Gallery Landing Page',
    imageDesktop: 'assets/images/gallery-landing-thumbnail-desktop.webp',
    imageMobile: 'assets/images/gallery-landing-thumbnail-desktop.webp',
    tooling: ['Leaflet JS', 'React', 'HTML', 'JavaScript', 'CSS'],
    linkToProject: 'https://friendly-benz-de5b74.netlify.app/',
    linkToCode: 'https://github.com/Chanda-Abdul/Modern-Art-Gallery-Website',
  },

  {
    project: 'Interactive Expenses chart component',
    imageDesktop: 'assets/images/chart-thumbnail-desktop.webp',
    imageMobile: 'assets/images/chart-thumbnail-desktop.webp',
    tooling: ['React', 'Chart JS', 'JavaScript', 'Tailwind CSS'],
    linkToProject: 'https://curious-pastelito-182280.netlify.app/',
    linkToCode:
      'https://github.com/Chanda-Abdul/Frontend-Mentor-Expenses-chart-component-using-React-ChartJS-TailwindCSS',
  },
  {
    project: 'Sunnyside agency landing page',
    imageDesktop: 'assets/images/sunnyside-thumbnail-desktop.webp',
    imageMobile: 'assets/images/sunnyside-thumbnail-desktop.webp',
    tooling: ['React', 'Sass', 'JavaScript', 'CSS', 'HTML'],
    linkToProject: 'https://suspicious-booth-344c3d.netlify.app/',
    linkToCode: 'https://github.com/Chanda-Abdul/Sunnyside-Agency-Landing-Page',
  },
];

let projectsList = document.getElementById('projects');

projects.forEach((item) => {
  /* Details container for each project */
  let projectDetails = document.createElement('div');
  projectDetails.className = 'project_details';

  /* Create project thumbnail image */
  let img = document.createElement('img');
  img.className = 'project_image';
  img.src = item.imageMobile;

  /* Create project title */
  let projectTitle = document.createElement('h5');
  projectTitle.innerHTML = item.project;

  /* Create project tooling/tech list */
  let projectTools = document.createElement('ul');
  projectTools.className = 'project_tools_list';

  item.tooling.forEach((tool) => {
    let toolItem = document.createElement('li');
    toolItem.innerHTML = tool;
    projectTools.appendChild(toolItem);
  });

  /* Create list to hold project link */
  let projectLinksList = document.createElement('div');
  projectLinksList.className = 'project_links_list';

  /* Create project link */
  let projectLink = document.createElement('a');
  projectLink.href = item.linkToProject;
  projectLink.innerHTML = 'View Project';
  projectLinksList.appendChild(projectLink);

  /* Create project code link */
  let projectCodeLink = document.createElement('a');
  projectCodeLink.href = item.linkToCode;
  projectCodeLink.innerHTML = 'View Code';
  projectLinksList.appendChild(projectCodeLink);

  /* append thumbnail, title, tools, and links to project container */
  projectDetails.appendChild(img);
  projectDetails.appendChild(projectTitle);
  projectDetails.appendChild(projectTools);
  projectDetails.appendChild(projectLinksList);

  /* append project container to project list */
  projectsList.appendChild(projectDetails);
});
