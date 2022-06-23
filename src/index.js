module.exports = function toReadable (number) {
  const firstTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundred = 'hundred';
  if (number < 20) {
      return firstTwenty[number];
  } else if (number >= 20 && number < 100) {
      const firstDigit = (number - number % 10) / 10;
      const secondDigit = number % 10;
      return number % 10 === 0 ? tens[firstDigit - 2] : `${tens[firstDigit - 2]} ${firstTwenty[secondDigit]}`;
  } else  {
      const thirdDigit = number % 10;
      const firstDigit = (number - number % 100) / 100;
      const secondDigit = (number % 100 - thirdDigit) / 10;

      if (number % 100 === 0) {
          return `${firstTwenty[firstDigit]} ${hundred}`;
      }

      if (secondDigit < 2) {
          return `${firstTwenty[firstDigit]} ${hundred} ${firstTwenty[number % 100]}`;
      }

      return number % 10 === 0 ? `${firstTwenty[firstDigit]} ${hundred} ${tens[secondDigit - 2]}` : `${firstTwenty[firstDigit]} ${hundred} ${tens[secondDigit - 2]} ${firstTwenty[thirdDigit]}`;
  }
}
