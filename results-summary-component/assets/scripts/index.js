const userScore = document.body.querySelector('.user-score>strong');

const summaryItemsList = document.body.querySelectorAll('.summary-item');

fetch('/assets/data/data.json')
  .then((response) => response.json())
  .then((data) => {
    let score = 0;
    summaryItemsList.forEach((item, idx) => {
      item.querySelector('.item-title').innerText = data[idx].category;
      item.querySelector('.item-score>strong').innerText = data[idx].score;
      score += data[idx].score;
    });
    const average = Math.round(score / data.length);

    userScore.innerText = average;
  }
  );