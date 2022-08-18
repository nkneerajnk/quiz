const quizQuestions=[
{
    question:"HTML Full Form !",
    a: "hyper text markup language",
    b: "hoops",
    c: "none of the above",
    d:"all",
    rightAns:"ans1"
},
{
    question:"which are the high level language !",
    a:"java",
    b:"python",
    c:"all of the above",
    d:"none of the above",
    rightAns:"ans3"
},
{
    question:"which web developer is neccessary !",
    a:"nobe",
    b:"begginer",
    c:"intermediate",
    d:"experinced",
    rightAns:"ans4"
},
{
    question:"what is the full form of css!",
    a:"create style sheet",
    b:"creation style sheet",
    c:"casecading style sheet",
    d:"experinced",
    rightAns:"ans3"
}
];
const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const answers=document.querySelectorAll(".answer");

const submit=document.querySelector("#submit");
const showScore=document.querySelector("#showScore");
let questionCount=0;
let score=0;
const loadQuestion=()=>{
    let list=quizQuestions[questionCount];
    question.innerText=list.question;
    option1.innerText=list.a;
    option2.innerText=list.b;
    option3.innerText=list.c;
    option4.innerText=list.d;
}
loadQuestion();

const getCheckedAnswer=()=>{
    let ans;

    answers.forEach((i)=>{
        if(i.checked){
            ans=i.id;
        }
    });
    return ans;
};
const uncheckAnswer=()=>{
    answers.forEach((i)=>{i.checked=false;})
}
submit.addEventListener("click",()=>{
    const x=getCheckedAnswer();
    if(x === quizQuestions[questionCount].rightAns){
        score++;
    }
    questionCount++;
    uncheckAnswer();
    if(questionCount<quizQuestions.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=
        `
        <h3 class="h3">your score is ${score}/${quizQuestions.length}:)</h3>
        <button class="btn" onclick="location.reload()">play Again</button>
        `
        showScore.classList.remove("score");
    }
})