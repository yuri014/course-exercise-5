const resultHtml = (result) =>
  `<p class="result inline text-white p-2 rounded-md text-2xl bg-green-400 text-justify">${result}</p>`;

const sumNumbers = () => {
  const firstSumValue = parseFloat(document.getElementById('firstSumValue').value);
  const secondSumValue = parseFloat(document.getElementById('secondSumValue').value);
  const sumResult = firstSumValue + secondSumValue;

  document.getElementById('sumResult').innerHTML = resultHtml(sumResult);
};

const gradesAverage = () => {
  const firstGrade = parseFloat(document.getElementById('firstGrade').value);
  const secondGrade = parseFloat(document.getElementById('secondGrade').value);
  const thirdGrade = parseFloat(document.getElementById('thirdGrade').value);
  const average = (firstGrade + secondGrade + thirdGrade) / 3;

  document.getElementById('averageResult').innerHTML = resultHtml(average);
};

const discountPrice = (discount, id, resultId) => {
  const price = parseFloat(document.getElementById(id).value);
  const discountResult = price * (parseFloat(discount) / 100);

  document.getElementById(resultId).innerHTML = resultHtml(price - discountResult);
};

const invertValues = () => {
  const firstValueToInvert = document.getElementById('firstValueToInvert').value;
  const secondValueToInvert = document.getElementById('secondValueToInvert').value;

  document.getElementById('invertedValueOne').innerHTML = resultHtml(secondValueToInvert);
  document.getElementById('invertedValueTwo').innerHTML = resultHtml(firstValueToInvert);
};

const calculateInstallments = () => {
  const totalInstallments = parseInt(document.getElementById('totalInstallments').value);
  const paidInstallments = parseInt(document.getElementById('paidInstallments').value);
  const installmentsValues = parseFloat(document.getElementById('installmentsValues').value);

  document.getElementById('balance').innerHTML = `R$ ${resultHtml(
    installmentsValues * paidInstallments
  )}`;
  document.getElementById('remainingInstallments').innerHTML = resultHtml(
    totalInstallments - paidInstallments
  );
};

const calculateSells = () => {
  const fruitAmount = parseInt(document.getElementById('fruitAmount').value);
  const creamyAmount = parseInt(document.getElementById('creamyAmount').value);
  const stuffedAmount = parseInt(document.getElementById('stuffedAmount').value);
  const result = fruitAmount * 2.5 + creamyAmount * 3.5 + stuffedAmount * 4.5;

  document.getElementById('totalSells').innerHTML = resultHtml(result);
};

const calculatePartialTotal = (inputId, resultId, price) => {
  const element = parseInt(document.getElementById(inputId).value);

  document.getElementById(resultId).innerHTML = resultHtml(element * price);
};

const cleanAllResults = () => {
  const results = document.querySelectorAll('.result');
  results.forEach((e) => e.remove());
};

const cleaner = (idElements) => {
  idElements.map((idElement) => (document.getElementById(idElement).value = ''));
  cleanAllResults();
};
