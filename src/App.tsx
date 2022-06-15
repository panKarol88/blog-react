import React from "react"
import { Article } from "./ui/components/article/Article"
import s from "./App.module.scss"

function App() {
  return (
    <div className={s.app}>
        <Article />
        <Article />
        <Article />
    </div>
  );
}

export default App;
