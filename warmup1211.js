// You are given a string to measure the healing and damage to a boss, and a total boss HP. 
//Your task is to split the string into two categories and total the amounts of 
//healing and damage. If at any point the boss is at zero HP return "Dead"

const actions1 = "damage:22, damage:32, heal:19, damage:17, heal:12, damage:73";
const boss1 = 100;
const actions2 = "damage:4, damage:7, damage:8, damage:12, heal:40, damage:7, damage:9, damage:10, damage:120"
const boss2 = 130;
const actions3 = "damage:3, damage:12, damage:9";
const boss3 = 100;
const actions4 = "damage:400, heal:400";
const boss4 = 1;
const bossFight = (actions, hp) => {
    
    let events = actions.split(',');
    let curHP = hp;
    events.forEach((event) => {
        let type = event.split(':')[0];
        let num = event.split(':')[1];
        if (curHP > 0) {
            if (type === 'heal') {
                curHP += num;
                if (curHp > hp) curHp = hp;
            } else {
                curHP -= num;
            }
        }
    });
    if (curHP < 1) return "DEAD";
    return curHP;
}
console.log(bossFight(actions1, boss1));
console.log(bossFight(actions2, boss2));
console.log(bossFight(actions3, boss3));
console.log(bossFight(actions4, boss4));