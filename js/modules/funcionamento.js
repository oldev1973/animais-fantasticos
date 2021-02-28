export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.agora = new Date();
    this.diaAtual = this.agora.getDay();
    this.horarioAtual = this.agora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAtual) !== -1;
    const horarioAberto =
      this.horarioAtual >= this.horarioSemana[0] &&
      this.horarioAtual < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) this.funcionamento.classList.add(this.activeClass);
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
