'use strict';

class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value = this.#value.split('');
    this.#value.push(str);
    this.#value = this.#value.join('');
  }

  padStart(str) {
    this.#value = this.#value.split('');
    this.#value.unshift(str);
    this.#value = this.#value.join('');
  }

  padBoth(str) {
    this.#value = this.#value.split(',');
    this.#value.unshift(str);
    this.#value.push(str);
    this.#value = this.#value.join('');
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
