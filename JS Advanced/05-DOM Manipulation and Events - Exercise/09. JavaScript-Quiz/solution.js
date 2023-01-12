function solve() {
  const allPossibleAnswersElements = Array.from(document.getElementsByClassName('answer-text'));
  const mainDivElement = document.getElementById('quizzie');
  const allSectionsElements = document.querySelectorAll('section');
  const resultUnorderedListElement = document.getElementById('results');
  const resultH1Element = resultUnorderedListElement.querySelector('h1');

  const trueAnswersElements = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

  let answeredQuestions = 0;
  let rightAnswers = 0;

  mainDivElement.addEventListener('click', onPressedAnswer);

  function onPressedAnswer(e) {
    if (allPossibleAnswersElements.includes(e.target)) {
      checkIfAnswerIsTrue(e);
      const currentQuestion = allSectionsElements[answeredQuestions - 1];
      const nextQuestion = allSectionsElements[answeredQuestions];
      currentQuestion.style.display = 'none';

      if (answeredQuestions !== allSectionsElements.length) {
        nextQuestion.style.display = 'block';
      }

      if (answeredQuestions === allSectionsElements.length) {
        if (rightAnswers === answeredQuestions) {
          resultH1Element.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          resultH1Element.textContent = `You have ${rightAnswers} right answers`
        }

        resultUnorderedListElement.style.display = 'block'
      }
    }
  }

  function checkIfAnswerIsTrue(e) {
    if (trueAnswersElements.includes(e.target.textContent)) {
      rightAnswers++;
    }
    answeredQuestions++;
  }
}
