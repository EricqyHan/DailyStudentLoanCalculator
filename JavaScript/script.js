//Example fetch using pokemonapi.co
fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    //   formatter to turn bitcoin float to USD currency
    const bitcoinFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 4,
    });
    console.log(`Bitcoin current USD Price is ${data.bpi.USD.rate_float}`);
    document.querySelector(".bitcoin").innerText = bitcoinFormatter.format(
      data.bpi.USD.rate_float
    );

    //  document.querySelector(".priceTime").innerText = data.time.updated;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

document.querySelector("#btnInterest").addEventListener("click", check);
document.querySelector("#btnBitcoin").addEventListener("click", bitcoin);

function check() {
  // Variables
  // amountBorrowed - get amout borrowed from input
  let amountBorrowed = document.querySelector("#borrowed").value;
  // interestAmount - get interest from input
  let interestAmount = document.querySelector("#interest").value;
  // Other Variables
  let interestRateHundredths = interestAmount / 100; //7% == 0.07
  let dailyInterestRateTenThousandths = (interestRateHundredths / 365).toFixed(
    5
  );
  let dailyInterestRateTenThousandthsDOM = document.querySelectorAll(
    ".dailyinterestRateTenThousandths"
  );
  let dailyinterestRateHundredths = interestAmount / 365;
  let amountPerDayDOM = document.querySelectorAll(".amountPerDay");
  // DOM
  document.querySelector(".interestRateHundredths").innerText =
    interestRateHundredths;
  for (let i = 0; i < dailyInterestRateTenThousandthsDOM.length; i++) {
    dailyInterestRateTenThousandthsDOM[i].innerText =
      dailyInterestRateTenThousandths;
  }
  // 0.019% - Daily Interest Rate %
  document.querySelector(".dailyinterestRateHundredths").innerText =
    dailyinterestRateHundredths.toFixed(3);

  // 2 - Calculate Amount of Interest
  //  Amount borrowed
  document.querySelector(".amountBorrowed").innerText = amountBorrowed;
  // Daily interest calculation
  let dailyCost = (amountBorrowed * dailyInterestRateTenThousandths).toFixed(2);
  for (let i = 0; i < amountPerDayDOM.length; i++) {
    amountPerDayDOM[i].innerText = dailyCost;
  }
  document.querySelector(".dailyCalculation").innerText = dailyCost * 30;
}

function bitcoin() {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      //   formatter to turn bitcoin float to USD currency
      // const bitcoinFormatter = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      //   minimumFractionDigits: 4,
      // });
      let totalLoan = document.querySelector(".amountBorrowed").innerText;
      let dailyCalculation =
        document.querySelector(".dailyCalculation").innerText;
      document.querySelector(".bitcoinAmountFromTotaLoan").innerText = (
        parseInt(totalLoan) / data.bpi.USD.rate_float
      ).toFixed(4);
      document.querySelector(".bitcoinAmountFromMonthlyInterest").innerText = (
        dailyCalculation / data.bpi.USD.rate_float
      ).toFixed(4);
      //  document.querySelector(".priceTime").innerText = data.time.updated;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
