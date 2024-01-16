class LampakModel {
  #lista = [];
  #jatekmeret;
  #allapot;
  constructor(jatekmeret) {
    this.#jatekmeret = jatekmeret * jatekmeret;
    for (let index = 0; index < this.#jatekmeret; index++) {
      if (Math.random() < 0.2) {
        this.#lista[index] = true;
      } else {
        this.#lista[index] = false;
      }
    }
    console.log(this.#lista)
  }

  getAllapot() {
    return this.#allapot;
  }
  
  getLista() {
    return this.#lista;
  }
  setAllapot(index) {
    this.#lista[index] = !this.#lista[index];
    this.#allapot = this.#lista[index];
  }
}
export default LampakModel;
