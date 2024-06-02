rock = document.querySelector("#rock");
paper = document.querySelector("#paper");
scissors = document.querySelector("#scissors");
userEle = document.querySelector(".userChoice");
result = document.querySelector(".result");
cpuEle = document.querySelector(".cpuChoice");
uScore = document.querySelector(".uScore");
cScore = document.querySelector(".cScore");
hand1 = document.querySelector(".hand1");
hand2 = document.querySelector(".hand2");
reset = document.querySelector(".reset");


rock.addEventListener("click",URock);
paper.addEventListener("click",UPaper);
scissors.addEventListener("click",UScissors);
reset.addEventListener("click",resetBack)


let user;
let cpu;
let UserScore = 0;
let CpuScore = 0;

let cpuArr = ["Rock","Paper","Scissors"]
let cpuImg = ["CatRock.png","CatPaper.png","CatScissors.png"]


function URock(){

    hand1.style.backgroundImage = "url('CatRock.png')";
    result.innerText = "";
    user = "Rock";
    let ind = getRandomInt(3);
    cpu = cpuArr[ind];
    userEle.innerText = user;
    cpuEle.innerText = cpu;
    hand2.style.backgroundImage = `url('${cpuImg[ind]}')`;
    winnerCheck(user);
}

function UPaper(){

    hand1.style.backgroundImage = "url('CatPaper.png')";
    result.innerText = "";
    user = "Paper";
    let ind = getRandomInt(3);
    cpu = cpuArr[ind];
    userEle.innerText = user;
    cpuEle.innerText = cpu;
    hand2.style.backgroundImage = `url('${cpuImg[ind]}')`;
    winnerCheck(user);
}

function UScissors(){

    hand1.style.backgroundImage = "url('CatScissors.png')";
    result.innerText = "";
    user = "Scissors";
    let ind = getRandomInt(3);
    cpu= cpuArr[ind];
    userEle.innerText = user;
    cpuEle.innerText = cpu;
    hand2.style.backgroundImage = `url('${cpuImg[ind]}')`;
    winnerCheck(user);
}


function winnerCheck(user){
    if(user === cpu){
        result.innerText = " Draw";
    }
    else if(user == "Rock" && cpu == "Scissors" || user == "Paper" && cpu == "Rock" || user == "Scissors" && cpu == "Paper"){
        result.innerText = " You Won";
        UserScore++
        uScore.innerText = UserScore;

    }
    else{
        result.innerText = " You Lose";
        CpuScore++
        cScore.innerText = CpuScore;
    }
}


function resetBack(){
    userEle.innerText = "User";
    cpuEle.innerText = "CPU";
    result.innerText = "Result";
    uScore.innerText = "0";
    cScore.innerText = "0";
    UserScore = 0;
    CpuScore = 0;
}




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }