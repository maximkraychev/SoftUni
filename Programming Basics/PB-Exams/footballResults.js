function footballResults(input) {

    let index = 0;
    let mtachResult = input[index];
    index++;
    
    let win = 0;
    let lost = 0;
    let draw = 0;

    for(let i = 0; i < 3; i++) {
        let ourTeamGoal = Number(mtachResult[0]);
        let enemyTeamGoal = Number(mtachResult[2]);

        if(ourTeamGoal > enemyTeamGoal){
            win++
        } else if(enemyTeamGoal > ourTeamGoal) {
            lost++
        } else if (ourTeamGoal === enemyTeamGoal) {
            draw++
        }

    mtachResult = input[index];
    index++;
    }

    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${draw}`);
    
}

footballResults(["4:2",
"0:3",
"1:0"])

