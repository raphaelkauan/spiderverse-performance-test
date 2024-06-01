const fs = require('fs');

const min = 1,
    max = 50000;

const data = {
    spiderverse: [],
};

const spiderManName = ['Miles_Morales', 'Spider_Gwen', 'Aranha_Escarlate', 'May_Parker', 'Porco_Aranha'];
const earth = [616, 1610, 65, 803, 14512];
const powers = [
    'Super força, Super agilidade, Capacidade de se aderir às superfícies, Sentido Aranha',
    'Escalar paredes, Super agilidade, Equilíbrio, Resistência',
    'Força, Velocidade ampliadas, Capacidade de escalar paredes',
    'Agilidade, Velocidade, Resistência',
    'Sobe paredes, Solta teia',
];

for (let i = min; i <= max; i++) {
    const randomIndex = Math.floor(Math.random() * 5);
    const spiderverse = {
        spiderManName: `${spiderManName[randomIndex]}${i}test`,
        spiderManPassword: `1P5?3K)&9NFk${i}`,
        earth: earth[randomIndex],
        powers: `${powers[randomIndex]}${i}`,
    };
    data.spiderverse.push(spiderverse);
}

const file = './static/spiderverse_data.json';
const jsonData = JSON.stringify(data, null, 4);

fs.writeFileSync(file, jsonData, () => {
    console.log('data created!');
});
