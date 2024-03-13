$(".btn").on("click", function(){
    const ticks = document.getElementById("ticks");
    const ticksValue = ticks.value;
    const outOF = document.getElementById("outOf");
    const outOfValue = outOf.value;
    const maxScore = document.getElementById("maxScore");
    const maxScoreValue = maxScore.value;
    const deviser = outOfValue/maxScoreValue;
    const trueScore = ticksValue/deviser;
    console.log(trueScore+"/"+maxScoreValue);
    alert(trueScore+"/"+maxScoreValue);
});
