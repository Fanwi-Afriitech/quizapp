var returnVal = "";
var questionPosition =0;
var number=1;
// data for the questions
const Questions=[
    {question:`${number++})  Who is the president of cameroon?`, option1:"Paul Biya", option2:"Okalia Bilai",
option3:"Atanga Nji", option4:"Marcel Nyat", answer:"Paul Biya", correct:false, rval:null},
{question:`${number++})  What is the chemical formula of Copper?`, option1:"CO", option2:"C",
option3:"Ca", option4:"Cu", answer:"Cu", correct:false, rval:null},
{question:`${number++})  Who is the SDO of meme?`, option1:"Paul Biya", option2:"Tindong Neverson",
option3:"Atanga Nji", option4:"Marcel Nyat", answer:"Tindong Neverson", correct:false , rval:null}
]


//function to display elements on the screen

function displayOnScreen(){
    mainQuestion(Questions[questionPosition].question, Questions[questionPosition].option1,
        Questions[questionPosition].option2,Questions[questionPosition].option3,
        Questions[questionPosition].option4, Questions[questionPosition].answer, Questions[questionPosition].rval
        )
        }

        //function to display a single question
function mainQuestion(para,op1,op2,op3,op4,cAnswer, rval){
    let mainDiv = document.createElement('div');
    let paragraph= document.createElement('p');

    let labelForRadio1 = document.createElement('div')
    let radio1 = document.createElement('input');
    radio1.setAttribute('type','radio')
    radio1.setAttribute('name','question')
    radio1.setAttribute('value',op1)
    radio1.id = "radio1"
    if(rval==op1){
        radio1.checked=true
    }
    else{
        radio1.checked=false;
    }
   
    let labelForRadio2 = document.createElement('div')
    let radio2 = document.createElement('input');
    radio2.setAttribute('type', 'radio');
    radio2.setAttribute('name','question')
    radio2.setAttribute('value',op2)
    radio2.id = "radio2"
    if(rval==op2){
        radio2.checked=true
    }
    else{
        radio2.checked=false;
    }

    let labelForRadio3 = document.createElement('div')
    let radio3 = document.createElement('input');
    radio3.setAttribute('type', 'radio');
    radio3.setAttribute('name','question')
    radio3.setAttribute('value',op3)
    radio3.id = "radio3"
    if(rval==op3){
        radio3.checked=true
    }
    else{
        radio3.checked=false;
    }


    let radio4 = document.createElement('input');
    let labelForRadio4 = document.createElement('div')
    radio4.setAttribute('type', 'radio');
    radio4.setAttribute('name','question')
    radio4.setAttribute('value',op4)
    radio4.id = "radio4"
    if(rval==op4){
        radio4.checked=true
    }
    else{
        radio4.checked=false;
    }

    document.getElementById("forQuestions").appendChild(mainDiv)
    mainDiv.appendChild(paragraph);
    const labelRadios = [labelForRadio1,labelForRadio2,labelForRadio3,labelForRadio4];
    for(x of labelRadios){
        mainDiv.appendChild(x);
    }
    
    paragraph.appendChild(document.createTextNode(para))
    labelForRadio1.appendChild(radio1)
    labelForRadio1.appendChild(document.createTextNode(op1))
    
    labelForRadio2.appendChild(radio2)
    labelForRadio2.appendChild(document.createTextNode(op2))
    
    labelForRadio3.appendChild(radio3)
    labelForRadio3.appendChild(document.createTextNode(op3))
    
    labelForRadio4.appendChild(radio4)
    labelForRadio4.appendChild(document.createTextNode(op4))

    if(questionPosition<Questions.length-1){
        nextAndPreviousButton()
    }
    else{
        submitAndPreviousButton()
    } 
    
}

// Function to displau the submit and previous button
function submitAndPreviousButton(){
    let Submit = document.createElement('button')
    let previousButton = document.createElement('button')
    document.getElementById('forQuestions').appendChild(previousButton)
    document.getElementById('forQuestions').appendChild(Submit)
    previousButton.addEventListener('click',()=>goToPreviousQuestion())
    Submit.addEventListener('click',()=>{
        let popupDivforSubmit= document.createElement('div');
        popupDivforSubmit.classList.add('popforsubmit')
        let paragraphforpopup = document.createElement('p');
        let cancelButton = document.createElement('button');
        let confirmButton = document.createElement('button');
        document.getElementById('forQuestions').appendChild(popupDivforSubmit);
        popupDivforSubmit.appendChild(paragraphforpopup)
        popupDivforSubmit.appendChild(cancelButton);
        popupDivforSubmit.appendChild(confirmButton);
        paragraphforpopup.appendChild(document.createTextNode("Are you sure you want submit?"))
        cancelButton.appendChild(document.createTextNode("Cancel"))
        confirmButton.appendChild(document.createTextNode("Submit"));
        cancelButton.addEventListener('click', ()=>popupDivforSubmit.remove())
        confirmButton.addEventListener('click', ()=>{goToNextQuestion(); popupDivforSubmit.remove()})

    })
    
    previousButton.appendChild(document.createTextNode("<-- Previous"))
    Submit.appendChild(document.createTextNode("Submit"))
}

//Function to display the next and previous button
function nextAndPreviousButton(){
    let nextButton = document.createElement('button')
    let previousButton = document.createElement('button')
    document.getElementById('forQuestions').appendChild(previousButton)
    document.getElementById('forQuestions').appendChild(nextButton)
    nextButton.addEventListener('click',()=>goToNextQuestion())
    previousButton.addEventListener('click',()=>goToPreviousQuestion())
    
    previousButton.appendChild(document.createTextNode("<-- Previous"))
    nextButton.appendChild(document.createTextNode("Next -->"))
}

//fucntion to take the quiz to the next question
function goToNextQuestion(){  
    keepTrackOfRadioStates(Questions[questionPosition].answer) 
questionPosition++;
if(questionPosition==Questions.length){
    pageUponCompletionOfQuiz();  
}
else{
    document.getElementById("forQuestions").innerHTML="";
mainQuestion(Questions[questionPosition].question, Questions[questionPosition].option1,
    Questions[questionPosition].option2,Questions[questionPosition].option3,
    Questions[questionPosition].option4,Questions[questionPosition].answer, Questions[questionPosition].rval
    ) 
}
}

//function to go back to the previous question
function goToPreviousQuestion(){
    keepTrackOfRadioStates(Questions[questionPosition].answer)
    if(questionPosition>0){
        questionPosition--;
document.getElementById("forQuestions").innerHTML="";
mainQuestion(Questions[questionPosition].question, Questions[questionPosition].option1,
    Questions[questionPosition].option2,Questions[questionPosition].option3,
    Questions[questionPosition].option4,Questions[questionPosition].answer,Questions[questionPosition].rval
    )
    }
    
    
}
//function to show the completion page when the quiz is over 
function pageUponCompletionOfQuiz(){
    let finished = document.createElement('div');
    let paragraph = document.createElement('p');
    let displayScoreParagraph = document.createElement('p')
    let displaywrong = document.createElement('button');
    
    
    finished.appendChild(paragraph)
    finished.appendChild(displayScoreParagraph)
    finished.appendChild(displaywrong)
    
    document.getElementById("forQuestions").innerHTML="";
    document.getElementById("forQuestions").appendChild(finished)
    paragraph.appendChild(document.createTextNode("You are done with your quiz!!!"))
    displayScoreParagraph.appendChild(document.createTextNode("Your score is\t\t "+trackCorrectAnswer() + "/" + Questions.length))
    displaywrong.appendChild(document.createTextNode("Display wrong answers"))
    displaywrong.addEventListener('click', ()=>{Displayallwrong()})
    if(trackCorrectAnswer()==Questions.length){
        displaywrong.remove();
    }
}
//function to give the score
function trackCorrectAnswer(){
    let numberOfCorrectQuestions =0;
    for(x of Questions){
        if(x.correct==true){
            numberOfCorrectQuestions++;
        }
    }
    return numberOfCorrectQuestions;
}

//function to keep track of the radio states
function keepTrackOfRadioStates(ans){
    let radio1 = document.getElementById('radio1');
    let radio2 = document.getElementById('radio2');
    let radio3 = document.getElementById('radio3');
    let radio4 = document.getElementById('radio4');
    if(radio1.checked && radio1.value==ans){
        Questions[questionPosition].correct=true
        Questions[questionPosition].rval=radio1.value; 
    }
    else if(radio1.checked){
        Questions[questionPosition].rval=radio1.value;
        Questions[questionPosition].correct=false
    }
    else if(radio2.checked && radio2.value==ans){
        Questions[questionPosition].correct=true 
        Questions[questionPosition].rval=radio2.value;
    }
    else if(radio2.checked){
        Questions[questionPosition].rval=radio2.value;
        Questions[questionPosition].correct=false
    }
    else if(radio3.checked && radio3.value==ans){
        Questions[questionPosition].correct=true 
        Questions[questionPosition].rval=radio3.value;
    }
    else if(radio3.checked){
        Questions[questionPosition].rval=radio3.value;
        Questions[questionPosition].correct=false
    }
    else if(radio4.checked && radio4.value==ans){
        Questions[questionPosition].correct=true 
        Questions[questionPosition].rval=radio4.value; 
    }
    else if(radio4.checked){
        Questions[questionPosition].rval=radio4.value;
        Questions[questionPosition].correct=false
    }
    else{
        Questions[questionPosition].correct=false
    }

}
function DisplaywrongAnswers(q,c,d){
    let divforwronganswers = document.createElement('div');
    let pwrong = document.createElement('label')
    let pcorrect = document.createElement('label')
    document.getElementById('forControlButtons').appendChild(divforwronganswers)
    divforwronganswers.appendChild(document.createTextNode(q))
    divforwronganswers.appendChild(pwrong)
    divforwronganswers.appendChild(pcorrect)
    pwrong.appendChild(document.createTextNode("Your answer: " + c));
    pcorrect.appendChild(document.createTextNode("The right answer: "+ d));
}
function Displayallwrong(){
    for(x of Questions){
        if(x.correct==false){
            DisplaywrongAnswers(x.question,x.rval, x.answer);
        }
    }
}
//function to display time on the screen
y=1
var mtime;
var stime;
var time=70;
var myvar = setInterval(()=>{
    document.getElementById('thetime').innerHTML="";
    mtime = Math.floor((time-y)/60)
    stime = (time-y)%60
    if(stime.toString().length==1){
        stime= "0"+stime;
    }
   //console.log(mtime + ":" + stime);
   document.getElementById('thetime').appendChild(document.createTextNode(""+ mtime + ":" + stime));
   y++;
}, 1000);
function stopthis(){
    setTimeout(()=>{
        clearInterval(myvar)
    },70000 )
    
}







