var scoreDolphins = [44, 23, 71];
var scoreKoalas = [65, 54, 49];

var calcAverage = (scores) => {
    return scores.reduce((sum, score) => sum + score ,0) / scores.length;
}

var avgScoreDolphin = calcAverage(scoreDolphins);
var avgScoreKoala = calcAverage(scoreKoalas);

var checkWinner = (a, b) => {
    if(a >= b * 2){
        console.log(`Dolphins win (${a} vs. ${b})`);
    }
    else console.log(`Koalas win (${b} vs. ${a})`);
}
console.log("Data 1: ");
checkWinner(avgScoreDolphin, avgScoreKoala);

scoreDolphins = [85, 54, 41];
scoreKoalas = [23, 34, 27];

var avgScoreDolphin = calcAverage(scoreDolphins);
var avgScoreKoala = calcAverage(scoreKoalas);

console.log("Data 2: ");
checkWinner(avgScoreDolphin, avgScoreKoala);


