export default function initFetchBitcoins() {
  fetch("https://blockchain.info/ticker")
    .then((res) => res.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((err) => {
      console.log(Error(err));
    });
}
