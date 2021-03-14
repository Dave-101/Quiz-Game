const quizData = [
	{
		question: "The computer's main circuit board is known as?" ,
		a: 'Hard Drive',
		b: 'Processor',
		c: 'Motherboard',
		d: 'Monitor',
		correct: 'c'
	},{
		question: 'What is the popular programming language?',
		a: 'Python',
		b: 'Java',
		c: 'JavaScript',
		d: 'C++',
		correct : 'c'
	},{
		question: 'Which company launched ReactJs?',
		a: 'Amazon',
		b: 'Facebook',
		c: 'Adobe',
		d: 'TCS',
		correct: 'b'
	},{
		question: 'Which one is the Backend Language?',
		a: 'Java',
		b: 'Python',
		c: 'C++',
		d: 'PHP',
		correct: 'd'
	},{
		question: 'Full form of ATM?',
		a: 'Any Time Money',
		b: 'Automated Transaction Machine',
		c: 'Automated Teller Machine',
		d: 'None of the above',
		correct: 'c'
	}
];

const questionEl = document.getElementById('que');
const a_text = document.getElementById('o1'); 
const b_text = document.getElementById('o2'); 
const c_text = document.getElementById('o3'); 
const d_text = document.getElementById('o4');
const submitBtn = document.getElementById('btn1');

const l1El = document.getElementById('l1');
const l2El = document.getElementById('l2');
const l3El = document.getElementById('l3');
const l4El = document.getElementById('l4');


function loadQuiz(){
	let currentQuizData = quizData[currentQuiz];
	questionEl.innerHTML = currentQuizData.question;
	a_text.innerHTML = currentQuizData.a;
	b_text.innerHTML = currentQuizData.b;
	c_text.innerHTML = currentQuizData.c;
	d_text.innerHTML = currentQuizData.d;
	
}

function correctAnswers(){

	let currentAnsData = quizData[currentAnswer];

	a_text.onclick = function(){
		if (l1El.textContent === currentAnsData.correct){
			a_text.disabled = true;
			b_text.disabled = true;
			c_text.disabled = true;
			d_text.disabled = true;
			a_text.style.backgroundColor = "#32cd32";
			rightAnswerCount++;
		}
		else{
			a_text.disabled = true;
			b_text.disabled = true;
			c_text.disabled = true;
			d_text.disabled = true;
			a_text.style.backgroundColor = "#cc0000";
			wrongAnswerCount++;
		}
	}

	b_text.onclick = function(){
		if (l2El.textContent === currentAnsData.correct){
			a_text.disabled = true;
			b_text.disabled = true;
			c_text.disabled = true;
			d_text.disabled = true;
			b_text.style.backgroundColor = "#32cd32";
			rightAnswerCount++;
		}
		else{
			a_text.disabled = true;
			b_text.disabled = true;
			c_text.disabled = true;
			d_text.disabled = true;
			b_text.style.backgroundColor = "#cc0000";
			wrongAnswerCount++;
		}
	}

	c_text.onclick = function(){
		if (l3El.textContent === currentAnsData.correct){
			a_text.disabled = true;
			b_text.disabled = true;
			c_text.disabled = true;
			d_text.disabled = true;
			c_text.style.backgroundColor = "#32cd32";
			rightAnswerCount++;
		}
		else{
			a_text.disabled = true;
			b_text.disabled = true;
			c_text.disabled = true;
			d_text.disabled = true;
			c_text.style.backgroundColor = "#cc0000";
			wrongAnswerCount++;
		}
	}

	d_text.onclick = function(){
		if (l4El.textContent === currentAnsData.correct){
			a_text.disabled = true;
			b_text.disabled = true;
			c_text.disabled = true;
			d_text.disabled = true;
			d_text.style.backgroundColor = "#32cd32";
			rightAnswerCount++;
		}
		else{
			a_text.disabled = true;
			b_text.disabled = true;
			c_text.disabled = true;
			d_text.disabled = true;
			d_text.style.backgroundColor = "#cc0000";
			wrongAnswerCount++;
		}
	}
}

let currentQuiz = 0;
let currentAnswer = 0;
let rightAnswerCount = 0;
let wrongAnswerCount = 0;

loadQuiz();
correctAnswers();

if((a_text.disabled == true) && (b_text.disabled == true) && (c_text.disabled == true) && (d_text.disabled = true))	{
	submitBtn.disabled = true;
}

submitBtn.addEventListener('click', () => {
	a_text.disabled = false;
	b_text.disabled = false;
	c_text.disabled = false;
	d_text.disabled = false;

	a_text.style.backgroundColor = "#24a0ed";
	b_text.style.backgroundColor = "#24a0ed";
	c_text.style.backgroundColor = "#24a0ed";
	d_text.style.backgroundColor = "#24a0ed";

	currentQuiz++;	
	currentAnswer++;
	if (currentQuiz <= (quizData.length-1)){
		loadQuiz();
		correctAnswers();
	}
	else{
		var x = rightAnswerCount;
		document.getElementById("result").innerHTML = "Right Guesses:" + x;

		var y = wrongAnswerCount;
		document.getElementById("result2").innerHTML = "Wrong Guesses:" + y;		
	}
});
