function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var randomInt = Math.floor(Math.random() * (max - min)) + min;
    return randomInt;
}//The maximum is exclusive and the minimum is inclusive

function updatePointTotal(points) {
    totalPoints += points;
    return totalPoints;
}//One f(x) to handle the point increments during the game

function writeToScreen(htmlSelector, newValue) {
    if (typeof(newValue) === 'object') {
        $(htmlSelector).text(newValue.join(' '));
    }
    else {
        $(htmlSelector).text(newValue);
    }
}//One f(x) to handle all of the screen printing capabilities

function isGameOver() {
    if (totalPoints === cpuNum) {
        winCount++;
        writeToScreen(wins, winCount);
        resetScoreboard();
        return true;
    }
    else if (totalPoints > cpuNum) {
        lossCount++;
        writeToScreen(losses, lossCount);
        resetScoreboard();
        return true;
    }
    else {
        return false;
    }
}

function resetScoreboard() {
    cpuNum = getRandomInt(cpuMinScore, cpuMaxScore);
    totalPoints = 0;
    diamond.setValue();
    topaz.setValue();
    emerald.setValue();
    sapphire.setValue();
    writeToScreen(userScore, totalPoints);
    writeToScreen(cpuScore, cpuNum);
    writeToScreen(diamondHTML, "");
    writeToScreen(topazHTML, "");
    writeToScreen(emeraldHTML, "");
    writeToScreen(sapphireHTML, "");
}

var diamond = {
    value: 0,
    
    setValue: function() {
        this.value = getRandomInt(minJewelValue, maxJewelValue);
        return this.value;
    }
}

var topaz = {
    value: 0,
    
    setValue: function() {
        this.value = getRandomInt(minJewelValue, maxJewelValue);
        return this.value;
    }
}

var emerald = {
    value: 0,
    
    setValue: function() {
        this.value = getRandomInt(minJewelValue, maxJewelValue);
        return this.value;
    }
}

var sapphire = {
    value: 0,
    
    setValue: function() {
        this.value = getRandomInt(minJewelValue, maxJewelValue);
        return this.value;
    }
}




const userScore = "#user-number";
const cpuScore = "#cpu-number"
const diamondHTML = "#diamond-value";
const topazHTML = "#topaz-value";
const emeraldHTML = "#emerald-value";
const sapphireHTML = "#sapphire-value";
const wins = "#wins";
const losses = "#losses";
const cpuMinScore = 19;
const cpuMaxScore = 120;
const minJewelValue = 1;
const maxJewelValue = 12;

var winCount = 0;
var lossCount = 0;
var totalPoints = 0;
var cpuNum = 0;
var diamondValue = 0;
var topazValue = 0;
var emeraldValue = 0;
var sapphireValue = 0;
var gameOver = false;





$(document).ready(function() {

    resetScoreboard();
    diamond.setValue();
    topaz.setValue();
    emerald.setValue();
    sapphire.setValue();

    if (!gameOver) { 
    
        $("#diamond-button").click(function() {
            totalPoints = updatePointTotal(diamond.value);
            writeToScreen(userScore, totalPoints);
            gameOver = isGameOver();
        });

        $("#topaz-button").click(function() {
            totalPoints = updatePointTotal(topaz.value);
            writeToScreen(userScore, totalPoints);
            gameOver = isGameOver();
        });

        $("#emerald-button").click(function() {
            totalPoints = updatePointTotal(emerald.value);
            writeToScreen(userScore, totalPoints);
            gameOver = isGameOver();
        });

        $("#sapphire-button").click(function() {
            totalPoints = updatePointTotal(sapphire.value);
            writeToScreen(userScore, totalPoints);
            gameOver = isGameOver();
        });

    }
    else {
        resetScoreboard();
    }

});