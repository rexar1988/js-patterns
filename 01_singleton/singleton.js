class Singleton {

  constructor() {
    if (typeof Singleton.instance === 'object') {
      return Singleton.instance;
    }

    this.count = 0;
    Singleton.instance = this;
  }

  getCount() {
    return this.count;
  }

  increase() {
    return this.count++;
  }
}
