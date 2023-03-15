import React, { useContext, useState } from 'react';
import './App.css';

type GlobalState = {
  title: string;
  counter: number;
  body: string;
};

const globalState: GlobalState = {
  title: "The component title",
  counter: 0,
  body: "the body",
};

const GlobalContext = React.createContext<{
  contextState: GlobalState;
  setContextState: React.Dispatch<React.SetStateAction<GlobalState>>;
}>({
  contextState: globalState,
  setContextState: () => {},
});

const Div = (): JSX.Element => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

const H1 = () => {
  const { contextState } = useContext(GlobalContext);
  const { title, counter } = contextState;
  return <h1>{title} {counter}</h1>;
};

const P = () => {
  const { contextState } = useContext(GlobalContext);
  const { body } = contextState;
  return <p>{body}</p>;
};

function App() {
  const [contextState, setContextState] = useState<GlobalState>(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;