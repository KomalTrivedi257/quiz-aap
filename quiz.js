const question =[
    {
        question: 'Who had composed the original Ramayana?',
        options:['Rishi Valmiki','Tulsi Das','Kalidash','Vyas'],
        answer:'Rishi Valmiki'
    },
    {
        question: 'Who challenged Ram to bend the Vishnu Dhanush??',
        options:['Vlmiki','Vibishan','Narayan','Parshuram'],
        answer:'Parshuram'
    },
    {
      question: 'What was the name of place where lord Rama visited for sita’s swayambar to marry her?',
      options:['Mithila','Ayodhya','Lanka','Panchwati'],
      answer:'Mithila'
    },
    {
        question: 'Who informs Rama first that Ravana has abducted Sita?',
        options:['Jatayu','Jambuvan','Hanuman','Sugreev'],
        answer:'Jatayu'
    },
    {
        question: 'This was the weapon used by Indrajeet against Hanuman. Identify the weapon used.?',
        options:['Brahmastra','Gada','Trisul','Vishnu astra'],
        answer:'Brahmastra'
    }
]
  let index = 0
  const optionContainer = document.getElementById('option-container')
  const totalScore = question.length
let score = 0

const  showQuizQuestion = () =>{
    const  firstQuestion = question[index]
     
    const questionPlaceholder = document.getElementById('question')
    questionPlaceholder.innerText = firstQuestion.question
    // const optionContainer = document.getElementById('option-container')

    firstQuestion.options.forEach((option)=>{
        const div=document.createElement('div')
        div.classList.add('options')
        div.innerText = option

        if(option == firstQuestion.answer){
            div.id="correct-answer"
        }

        div.addEventListener('click',function(){
            if(option == firstQuestion.answer){
               div.style.backgroundColor = '#63AB50'
               alert(`Hooray! That's correct 🥳`)
               score++
            }else{
                 div.style.backgroundColor = '#A11F12'
                 alert(`oops! that's incorrect 🥺`)
                 document.getElementById("correct-answer").
                  style.backgroundColor = '#63AB50'
            }

            if(index < question.length - 1){
             document.getElementById('next-btn').style.visibility = 'visible'
            }else{
                // document.getElementById('quiz-container').style.display='none' 
                // document.getElementById('quiz-completed').style.display='block'
                quizCompleted()
            }
          })

        optionContainer.append(div)
    })
    }
    const nextBtn = document.getElementById('next-btn')
nextBtn.addEventListener('click',()=>{
    optionContainer.innerHTML = ''
    index = index + 1
   showQuizQuestion()
// const nextBtn = document.getElementById('next-btn')
// nextBtn.addEventListener('click',()=>{
//     optionContainer.innerHTML = ''
//     index = index + 1
 

    document.getElementById('next-btn').style.visibility = 'hidden' 
})

const startQuiz = () =>{
document.getElementById('start-btn').style.display='none'
document.getElementById('quiz-container').style.display='block'
showQuizQuestion()
}

const quizCompleted = () =>{
    document.getElementById('quiz-container').style.display='none'
    document.getElementById('quiz-completed').style.display='block'
    document.getElementById('final-score').innerText =`${score} / ${totalScore}`
    }


