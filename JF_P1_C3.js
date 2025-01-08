var scoreDolphins = [96, 108, 89];
var scoreKoalas = [88, 91, 110];

var avgScore = (scores) => {
    return scores.reduce((sum, score) => sum + score ,0) / scores.length;
}

var avgScoreDolphin = avgScore(scoreDolphins);
var avgScoreKoala = avgScore(scoreKoalas);

if(avgScoreDolphin > avgScoreKoala){
    if(avgScoreDolphin >= 100)
        console.log("Dolphins win!");
    else console.log("Dolphins is higher but not at least 100 points");
}
else if(avgScoreDolphin < avgScoreKoala){
    if(avgScoreKoala >= 100)
    console.log("Koalas win!");
else console.log("Koalas is higher but not at least 100 points");
}
else {
    if(avgScoreDolphin >= 100)
        console.log("Draw");
    else console.log("No team wins");
}

