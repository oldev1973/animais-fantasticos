export default function fetchBitcoins(url, target) {
  fetch(url)
    .then((res) => res.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((err) => {
      console.log(Error(err));
    });
}
