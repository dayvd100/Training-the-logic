import React, { useState, useCallback } from 'react';

interface ButtonProps {
incrementButton: (num: number) => void;
}

const Button = React.memo(({ incrementButton }: ButtonProps) => {
console.log('Filho, renderizou');
return <button onClick={() => incrementButton(1)}>+</button>;
});

function App(): JSX.Element {
const [counter, setCounter] = useState<number>(0);

const incrementCounter = useCallback((num: number) => {
setCounter((c) => c + num);
}, []);

console.log('Pai, renderizou');

return (
<div className="App">
<p>Teste 3</p>
<h1>C1: {counter}</h1>
<Button incrementButton={incrementCounter} />
</div>
);
}

export default App;