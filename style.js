// getting  all required  elements
const html=document.querySelector("#html")
const css=document.querySelector("#css")
const javascript=document.querySelector("#js")
const info_box=document.querySelector(".info_box")
const continue_btn=info_box.querySelector(".info_buttons .restart")
const exit_btn=info_box.querySelector(".info_buttons .quit")
const quiz_box=document.querySelector(".quiz_box")
const timeCount=quiz_box.querySelector(".timer .timer_sec")
const option_list=document.querySelector(".option_list");


// if html quiz btn clicked
html.onclick=()=>{
    info_box.classList.add("activeInfo");  //shows the info box

    continue_btn.onclick=()=>{
        info_box.classList.remove("activeInfo")  //hide the info box
        let md1 = document.querySelector("#md1"); // select the element with id "md1"
        if (md1) md1.remove(); //hide the info box
        quiz_box.classList.add("activequiz")  //hide the info box
        showQuestions(0);
        queCounter(1);
        startTimer(15);
    }
   
    
const next_btn= quiz_box.querySelector(".next_btn");

// if next button clicked for html questions
next_btn.onclick=()=>{
   if(que_count<questions.length-1){
    que_count++;
    que_num++;
    showQuestions(que_count);
    queCounter(que_num);
    clearInterval(counter);
    startTimer(timeValue);
    next_btn.style.display="none";
   }else{
    console.log("questions completed");
    showResultBox();
   }

}

}

// if css quiz btn cilcked
css.onclick=()=>{
    info_box.classList.add("activeInfo");  //shows the info box

    continue_btn.onclick=()=>{
        info_box.classList.remove("activeInfo")  //hide the info box
        let md1 = document.querySelector("#md1"); // select the element with id "md1"
        if (md1) md1.remove(); //hide the info box
        quiz_box.classList.add("activequiz")  //hide the info box
        cssQuestions(0);
        queCounter(1);
        startTimer(15);
    }

  
    
const next_btn= quiz_box.querySelector(".next_btn");

    next_btn.onclick=()=>{
        if(que_count<cssquestions.length-1){
         que_count++;
         que_num++;
         cssQuestions(que_count);
         queCounter(que_num);
         clearInterval(counter);
         startTimer(timeValue);
         next_btn.style.display="none";
        }else{
         console.log("questions completed");
         showResultBox();
        }
     
     }


}
// javascript quizz btn clicked
javascript.onclick=()=>{
    info_box.classList.add("activeInfo"); //shows the info box

    continue_btn.onclick=()=>{
        info_box.classList.remove("activeInfo")  //hide the info box
        let md1 = document.querySelector("#md1"); // select the element with id "md1"
        if (md1) md1.remove(); //hide the info box
        quiz_box.classList.add("activequiz")  //hide the info box
        jsQuestions(0);
        queCounter(1);
        startTimer(15);
    }

  
    
const next_btn= quiz_box.querySelector(".next_btn");

    next_btn.onclick=()=>{
        if(que_count<jsquestions.length-1){
         que_count++;
         que_num++;
         jsQuestions(que_count);
         queCounter(que_num);
         clearInterval(counter);
         startTimer(timeValue);
         next_btn.style.display="none";
        }else{
         console.log("questions completed");
         showResultBox();
        }
     
     }

    

}
// if exit btn clicked
exit_btn.onclick=()=>{
    info_box.classList.remove("activeInfo")  //hide the info box
}



var que_count=0;
var que_num=1;
var counter;
let timeValue =15;
var userScore=0;

var result_box=document.querySelector(".result_box");
var restart_quiz=result_box.querySelector(".buttons .restart");
var quit_quiz=result_box.querySelector(".buttons .quit");

quit_quiz.onclick=()=>{
    location.reload();
}

restart_quiz.onclick=()=>{
    location.reload();
}

// // const next_btn= quiz_box.querySelector(".next_btn");






// getting questions from array

function showQuestions(index){
    const que_text=document.querySelector(".que_text");
    let que_tag= '<span>'+ questions[index].num+'.'+questions[index].question+'</span>';
    let option_tag= '<div class="option"><span>'+ questions[index].options[0]+'</span></div>'
                    +'<div class="option"><span>'+ questions[index].options[1]+'</span></div>'
                    +'<div class="option"><span>'+ questions[index].options[2]+'</span></div>'
                    +'<div class="option"><span>'+ questions[index].options[3]+'</span></div>';
    que_text.innerHTML=que_tag;
    option_list.innerHTML=option_tag;

    const option= option_list.querySelectorAll(".option");
    for(let i=0;i<option.length;i++){
        option[i].setAttribute("onclick","htmloptionSelected(this)")
    }

}

// css questions function 

function cssQuestions(index){
    const que_text=document.querySelector(".que_text");
    let que_tag= '<span>'+ cssquestions[index].num+'.'+cssquestions[index].question+'</span>';
    let option_tag= '<div class="option"><span>'+ cssquestions[index].options[0]+'</span></div>'
                    +'<div class="option"><span>'+ cssquestions[index].options[1]+'</span></div>'
                    +'<div class="option"><span>'+ cssquestions[index].options[2]+'</span></div>'
                    +'<div class="option"><span>'+ cssquestions[index].options[3]+'</span></div>';
    que_text.innerHTML=que_tag;
    option_list.innerHTML=option_tag;

    const option= option_list.querySelectorAll(".option");
    for(let i=0;i<option.length;i++){
        option[i].setAttribute("onclick","cssoptionSelected(this)")
    }

}

// js questions function

function jsQuestions(index){
    const que_text=document.querySelector(".que_text");
    let que_tag= '<span>'+ jsquestions[index].num+'.'+jsquestions[index].question+'</span>';
    let option_tag= '<div class="option"><span>'+ jsquestions[index].options[0]+'</span></div>'
                    +'<div class="option"><span>'+ jsquestions[index].options[1]+'</span></div>'
                    +'<div class="option"><span>'+ jsquestions[index].options[2]+'</span></div>'
                    +'<div class="option"><span>'+ jsquestions[index].options[3]+'</span></div>';
    que_text.innerHTML=que_tag;
    option_list.innerHTML=option_tag;

    const option= option_list.querySelectorAll(".option");
    for(let i=0;i<option.length;i++){
        option[i].setAttribute("onclick","jsoptionSelected(this)")
    }

}



// html style part

function htmloptionSelected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns =questions[que_count].answer;
    let allOptions= option_list.children.length;
    
    if(userAns===correctAns){
        userScore+=1;
        // console.log(userScore)
        answer.classList.add("correct");
        console.log("answer is correct")
    }else{
        answer.classList.add("incorrect");
        console.log("answer is wrong")

        // if  answer is incorrect  then automatically selected the correct answwer
        for(let i=0;i<allOptions;i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class","option correct")
            }
        }


    }
    // once user selected all other options disabled
for(let i=0;i<allOptions;i++){
    option_list.children[i].classList.add("disabled")
}
const next_btn= quiz_box.querySelector(".next_btn");

next_btn.style.display="block";

}
// results box
function showResultBox(){
    info_box.classList.remove("activeInfo"); //hide the info
    quiz_box.classList.remove("activequiz"); //hide the quiz box
    result_box.classList.add("activeResult"); //show the result box
    const ScoreText=result_box.querySelector(".score_text");
    if(userScore>3){
        let scoreTag='<span>You got only <p>'+ userScore +'</p> Out of <p>'+questions.length +'</p></span>'
        ScoreText.innerHTML=scoreTag;
    }else{
        let scoreTag='<span>You got only <p>'+ userScore +'</p> Out of <p>'+questions.length +'</p></span>'
        ScoreText.innerHTML=scoreTag;
    }
}




// css style  part


function cssoptionSelected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns =cssquestions[que_count].answer;
    let allOptions= option_list.children.length;
    if(userAns===correctAns){
        userScore+=1;
        answer.classList.add("correct");
        console.log("answer is correct")
    }else{
        answer.classList.add("incorrect");
        console.log("answer is wrong")

        // if  answer is incorrect  then automatically selected the correct answwer
        for(let i=0;i<allOptions;i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class","option correct")
            }
        }


    }
    // once user selected all other options disabled
for(let i=0;i<allOptions;i++){
    option_list.children[i].classList.add("disabled")
}
const next_btn= quiz_box.querySelector(".next_btn");

next_btn.style.display="block";

}

// js style part

function jsoptionSelected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns =jsquestions[que_count].answer;
    let allOptions= option_list.children.length;
    if(userAns===correctAns){
        userScore+=1;
        answer.classList.add("correct");
        console.log("answer is correct")
    }else{
        answer.classList.add("incorrect");
        console.log("answer is wrong")

        // if  answer is incorrect  then automatically selected the correct answwer
        for(let i=0;i<allOptions;i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class","option correct")
            }
        }


    }
    // once user selected all other options disabled
for(let i=0;i<allOptions;i++){
    option_list.children[i].classList.add("disabled")
}
const next_btn= quiz_box.querySelector(".next_btn");

next_btn.style.display="block";

}

// timercount

function startTimer(time){
    counter= setInterval(timer,1000);
    function timer(){
        timeCount.textContent =time;
        time--;
        if(time<9){
            let addZero= timeCount.textContent;
            timeCount.textContent="0"+addZero;
        }
        if(time<0){
            clearInterval(counter);
            timeCount.counter="00"
        }
    }
}



// html que questions

function queCounter(index){
    const bottom_ques_counter= quiz_box.querySelector(".total_que");
let totalQuesCountTag ='<span><p>'+index+'</p>of<p>'+questions.length+'</p>Questions</span>';
bottom_ques_counter.innerHTML=totalQuesCountTag;
}

