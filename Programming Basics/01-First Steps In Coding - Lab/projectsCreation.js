function projectsCreation(input){
    
    const ONE_PROJECT = 3;
    let arcName = input[0];
    let numberOfProject = Number(input[1]);

    let timeForTheProjects = numberOfProject * ONE_PROJECT;

    console.log(`The architect ${arcName} will need ${timeForTheProjects} hours to complete ${numberOfProject} project/s.`);

}

projectsCreation(["Sanya ",
"9 "]
)