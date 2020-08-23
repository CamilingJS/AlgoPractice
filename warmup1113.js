let town1 = {
    p0: 1500,
    percent: 5,
    aug: 50,
    p: 5000
}; //Output: 15
let town2 = {
    p0: 1500000,
    percent: 2.5,
    aug: 10000,
    p: 2000000
}; //Output: 10
let town3 = {
    p0: 1500000,
    percent: .25,
    aug: 1000,
    p: 2000000
}; //Output: 94



const populationGrowth = (town) =>  {
       
    let percent = (town.percent/100) + 1;
    let curPopulation = town.P0;
    let numberOfYears = 0;

        while (curPopulation < town.p) {
            curPopulation = {curPopulation * percent} + town.aug
        
            numberOfYears++;
        }
        


    }

}

const poluationGrowth = (town) => {
    y=0;

    for (let y = 0; town.p0 < town.p; i++) {
        town.p0 += town.p0 * (1 + town.percent / 100) + town.aug;
        y++;
    }

    return y;
}


console.log(populationGrowth(town1)); //15
console.log(populationGrowth(town2)); //10
console.log(populationGrowth(town3)); //94