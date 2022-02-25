console.log("Test");
document.querySelector("#btnInterest").addEventListener("click", check);
// let interest = document.querySelector("#interest").value;

function check() {
  let amountBorrowed = document.querySelector("#borrowed").value;
  let interestAmount = document.querySelector("#interest").value;
  // other Variables
  // dailyInterestRate gets us from 7% format to 0.07 format
  let interestRateHundredths = interestAmount / 100;
  // dailyinterestRateTenThousandths to get us 0.00019
  let dailyinterestRateTenThousandths = (interestRateHundredths / 365).toFixed(
    5
  );
  let dailyinterestRateTenThousandthsDOM = document.querySelectorAll(
    ".dailyinterestRateTenThousandths"
  );
  let amountPerDayDOM = document.querySelectorAll(".amountPerDay");
  let dailyinterestRateHundredths = interestAmount / 365;
  // 0.07
  document.querySelector(".interestRateHundredths").innerText =
    interestRateHundredths;
  // 0.00019
  //   document.querySelector(".dailyinterestRateTenThousandths").innerText =
  //     dailyinterestRateTenThousandths;
  for (let i = 0; i < dailyinterestRateTenThousandthsDOM.length; i++) {
    dailyinterestRateTenThousandthsDOM[i].innerText =
      dailyinterestRateTenThousandths;
  }
  // 0.019
  document.querySelector(".dailyinterestRateHundredths").innerText =
    dailyinterestRateHundredths.toFixed(3);
  // 2. Amount Borrowed - $10,000
  document.querySelector(".amountBorrowed").innerText = amountBorrowed;
  // 2. Amount Per Day
  let dailyCost = (amountBorrowed * dailyinterestRateTenThousandths).toFixed(2);
  for (let i = 0; i < amountPerDayDOM.length; i++) {
    amountPerDayDOM[i].innerText = dailyCost;
  }
  document.querySelector(".dailyCalculation").innerText = dailyCost * 30;
}
