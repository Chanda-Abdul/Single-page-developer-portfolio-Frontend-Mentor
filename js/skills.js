/*  data file to update skills */ 
const skills = [
    { skill: 'Angular', level: '1 Years Experience' },
    { skill: 'APIs', level: '4 Years Experience' },
    { skill: 'Accessibility', level: '4 Years Experience' },
    { skill: 'CSS', level: '4 Years Experience' },
    { skill: 'Express', level: '3 Years Experience' },
    { skill: 'GraphQL', level: '1 Years Experience' },
    // { skill: 'HTML', level: '4 Years Experience' },
    { skill: 'JavaScript', level: '4 Years Experience' },
    { skill: 'Node.js', level: '3 Years Experience' },
    { skill: 'PostgreSQL', level: '3 Years Experience' },
    { skill: 'React', level: '3 Years Experience' },
    { skill: 'Sass', level: '3 Years Experience' },
    { skill: 'TypeScript', level: '2 Years Experience' },
  ];
  
  let skillsList = document.getElementById('skills');
  
  skills.forEach((item) => {
    let li = document.createElement('li');
    li.className = 'skill_detail'
    let itemTitle = document.createElement('p');
    
    itemTitle.className = 'skill';
    let subitem = document.createElement('p');
    itemTitle.innerText = item.skill;
    subitem.className = 'level';
    subitem.innerText = item.level;
    li.appendChild(itemTitle);
    li.appendChild(subitem);
    skillsList.appendChild(li);
   
  });