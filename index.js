class Telephone {
  phoneNumbers = [];

  constructor() {
    this.phoneNumbers = [];
    this.observers = new Set();
  }

  AddPhoneNumber(phoneNumber) {
    return this.phoneNumbers.push(phoneNumber);
  }

  RemovePhoneNumber(number) {
    this.phoneNumbers.splice(this.phoneNumbers.indexOf(number), 1);
  }

  DialPhoneNumber(number) {
    if (this.phoneNumbers.indexOf(number) >= 0) {
      this.observers.forEach((observer) => this.notify(observer));
      return number;
    }

    return "Phone number does not exist in list of phone number";
  }

  add(observer) {
    this.observers.add(observer);
  }

  remove(observer) {
    this.observers.delete(observer);
  }

  notify(context) {
    this.observers.forEach((observer) => Observer.update(context));
  }
}

class Observer {
  constructor() {}
  update() {}
}
