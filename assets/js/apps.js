function calculateProduct() {
  var numbersInput = document.getElementById('productInput').value;
  var numbers = numbersInput.split(',');

  // Validate input
  for (var i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i].trim())) {
      document.getElementById('productResult').innerHTML = 'Invalid input. Please enter numbers separated by commas.';
      return;
    }
  }

  // Calculate product
  var product = 1;
  for (var i = 0; i < numbers.length; i++) {
    product *= parseFloat(numbers[i].trim());
  }

  document.getElementById('productResult').innerHTML = 'Total Combination: ' + product;
}

function calculateSum() {
  var numbersInput = document.getElementById('sumInput').value;
  var numbers = numbersInput.split(',');

  // Validate input
  for (var i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i].trim())) {
      document.getElementById('sumResult').innerHTML = 'Invalid input. Please enter numbers separated by commas.';
      return;
    }
  }

  // Calculate sum
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += parseFloat(numbers[i].trim());
  }

  document.getElementById('sumResult').innerHTML = 'Total Options: ' + sum;
}

function pigeonQuiz() {
  var answer = document.getElementById('pigeonInput').value;

  if (isNaN(answer)) {
    document.getElementById('pigeonResult').innerHTML = 'Invalid input. Please enter numbers only.';
    return;
  }

  if (parseInt(answer) === 4) {
    document.getElementById('pigeonResult').innerHTML = '<b>Correct!</b> <br> To guarantee that you have at least two socks of the same color, you need to consider the worst-case scenario. In this case, the worst-case scenario would be if you pick one sock of each color (red, green, and blue) with the first three picks.';
  } else {
    document.getElementById('pigeonResult').innerHTML = "Wrong Answer. Please try again.";
  }
}

function calculateCombination() {
  var n = parseInt(document.getElementById('nInput').value);
  var r = parseInt(document.getElementById('rInput').value);

  // Validate input
  if (isNaN(n) || isNaN(r)) {
    document.getElementById('combinationResult').innerHTML = 'Invalid input. Please enter valid numbers for n and r.';
    return;
  }

  if (n < r || r < 0) {
    document.getElementById('combinationResult').innerHTML = 'Invalid input. Please enter n ≥ r ≥ 0';
    return;
  }

  // Calculate factorial
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }

  // Calculate combination
  var combination = factorial(n) / (factorial(r) * factorial(n - r));

  document.getElementById('combinationResult').innerHTML = 'Combination: ' + combination;
}

function calculatePermutation() {
  var n = parseInt(document.getElementById('pnInput').value);
  var r = parseInt(document.getElementById('prInput').value);

  // Validate input
  if (isNaN(n) || isNaN(r)) {
    document.getElementById('permutationResult').innerHTML = 'Invalid input. Please enter valid numbers for n and r.';
    return;
  }

  if (n < r || r < 0) {
    document.getElementById('permutationResult').innerHTML = 'Invalid input. Please enter n ≥ r ≥ 0';
    return;
  }

  // Calculate factorial
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }

  // Calculate permutation
  var permutation = factorial(n) / factorial(n - r);

  document.getElementById('permutationResult').innerHTML = 'Permutation: ' + permutation;
}

function checkQ1Answer() {
  var answer = document.querySelector('input[name="answer"]:checked').value;
  if (answer === 'c') {
    document.getElementById('q1Result').innerHTML = 'You are correct! The probability of drawing a red ball is 5/10.';
  } else {
    document.getElementById('q1Result').innerHTML = 'Incorrect. Please try again.';
  }
}

function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

function calculateExpectedValue() {
  var probabilitiesInput = document.getElementById('probabilities').value;
  var valuesInput = document.getElementById('values').value;

  var probabilities = probabilitiesInput.split(',').map(parseFloat);
  var values = valuesInput.split(',').map(parseFloat);

  if (probabilities.length !== values.length) {
    document.getElementById('result').innerText = 'The number of probabilities and values must be the same.';
    return;
  }

  var expectedValue = 0;
  for (var i = 0; i < probabilities.length; i++) {
    if (probabilities[i] > 1) {
      document.getElementById('result').innerText = 'P(x) should be 0 < P(x) < 1';
      return;
    }
    expectedValue += probabilities[i] * values[i];
  }

  document.getElementById('result').innerText = 'Expected Value: ' + expectedValue;
}

function calculateVariance() {
  var numbersInput = document.getElementById('numbersInput').value;
  var numbers = numbersInput.split(',');

  // Validate input
  for (var i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i].trim())) {
      document.getElementById('varianceResult').innerHTML = 'Invalid input. Please enter numbers separated by commas.';
      return;
    }
  }

  // Calculate mean
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += parseFloat(numbers[i].trim());
  }
  var mean = sum / numbers.length;

  // Calculate variance
  var variance = 0;
  for (var i = 0; i < numbers.length; i++) {
    var deviation = parseFloat(numbers[i].trim()) - mean;
    variance += Math.pow(deviation, 2);
  }
  variance /= numbers.length;

  document.getElementById('varianceResult').innerHTML = 'Variance: ' + variance;
}

function checkGraphQuiz() {
  var quizForm = document.getElementById("quizForm");
  var score = 0;

  // Check answers
  var question1Answer = quizForm.elements.question1.value;
  if (question1Answer === "simple_graph") {
    score++;
  }

  var question2Answer = quizForm.elements.question2.value;
  if (question2Answer === "directed_graph") {
    score++;
  }

  var question3Answer = quizForm.elements.question3.value;
  if (question3Answer === "multigraph") {
    score++;
  }

  // Display score
  document.getElementById('graphQuizResult').innerHTML = "Your score: " + score + "/3";

  // var result = document.createElement("p");
  // result.textContent = "Your score: " + score + "/3";

  // // Remove previous result if exists
  // var previousResult = document.getElementById("result");
  // if (previousResult) {
  //   previousResult.remove();
  // }

  // result.setAttribute("id", "result");
  // quizForm.appendChild(result);
}

function checkEulerQuiz() {
  var quizForm = document.getElementById("quizEuler");
  var score = 0;

  // Check answers
  var question1Answer = quizEuler.elements.question1.value;
  if (question1Answer === "no_euler") {
    score++;
  }

  var question2Answer = quizEuler.elements.question2.value;
  if (question2Answer === "path_circuit") {
    score++;
  }

  // Display score
  document.getElementById('eulerQuizResult').innerHTML = "Your score: " + score + "/2";
}

function checkHamiltonianQuiz() {
  var quizForm = document.getElementById("quizHamiltonian");
  var score = 0;

  // Check answers
  var question1Answer = quizHamiltonian.elements.question1.value;
  if (question1Answer === "path_circuit") {
    score++;
  }

  var question2Answer = quizHamiltonian.elements.question2.value;
  if (question2Answer === "path_only") {
    score++;
  }

  // Display score
  document.getElementById('hamiltonianQuizResult').innerHTML = "Your score: " + score + "/2";
}