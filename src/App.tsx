import './App.css'
import {FC} from 'react'
import {AppDispatch} from "./redux/store.ts";
import {RootState} from "./redux/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, incrementByAmount, decrementByAmount} from "./redux/counterSlice.ts";
import {observer} from "mobx-react-lite";
import MobxStore from "./mobx/MobxStore.ts";

const App: FC = observer(() => {
    const dispatch: AppDispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counter);

    return (
        <div>
            <h1>Using Redux</h1>
            <h2>Counter: {counter.value}</h2>
            <button onClick={() => dispatch(increment())}>Увеличить на 1</button>
            <button onClick={() => dispatch(decrement())}>Уменьшить на 1</button>
            <button onClick={() => dispatch(incrementByAmount(Number(prompt('На сколько увеличить счётчик?'))))}>Увеличить на ...</button>
            <button onClick={() => dispatch(decrementByAmount(Number(prompt('На сколько уменьшить счётчик?'))))}>Уменьшить на ...</button>
            <h1>__________________________________________</h1>
            <h1>Using MobX</h1>
            <h2>Counter: {MobxStore.count}</h2>
            <button onClick={() => MobxStore.increment()}>Увеличить на 1</button>
            <button onClick={() => MobxStore.decrement()}>Уменьшить на 1</button>
            <button onClick={() => MobxStore.incrementByAmount(Number(prompt('На сколько увеличить счётчик?')))}>Увеличить на ...</button>
            <button onClick={() => MobxStore.decrementByAmount(Number(prompt('На сколько уменьшить счётчик?')))}>Уменьшить на ...</button>
        </div>
    );
});

export default App
