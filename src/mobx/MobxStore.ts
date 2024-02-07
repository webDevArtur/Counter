import { makeAutoObservable } from "mobx";

class MobxStore {

    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    incrementByAmount(amount: number) {
        this.count += amount;
    }

    decrementByAmount(amount: number) {
        this.count -= amount;
    }
}

export default new MobxStore()