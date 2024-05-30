const fs = require("fs");

const min = 1,
    max = 100;

const data = {
    spiderverse: [],
};

for (let i = min; i <= max; i++) {
    const spiderverse = {
        spiderManName: `${i}`,
        spiderManPassword: `${i}`,
        earth: i,
        powers: `${i}`,
    };
    data.spiderverse.push(spiderverse);
}

const file = "./static/spiderverse_data.json";
const jsonData = JSON.stringify(data, null, 4);

fs.writeFileSync(file, jsonData, () => {
    console.log("data created!");
});
