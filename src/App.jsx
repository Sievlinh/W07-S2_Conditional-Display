import React from 'react';
import pnLogo from "./assets/pn-logo.png";
import Score from './components/Score';
import { HTML_RESULTS, JAVA_RESULTS, PYTHON_RESULTS, ENGLISH_RESULTS } from './data';

function App() {
  return (
    <>
      <header id="header">
        <img src={pnLogo} alt="PN Logo" />
        <h1>Students results for (fake batch name)</h1>
      </header>

      <main className="scores-container">
        <Score courseName="HTML" courseResults={HTML_RESULTS} />
        <Score courseName="Java" courseResults={JAVA_RESULTS} />
        <Score courseName="Python" courseResults={PYTHON_RESULTS} />
        <Score courseName="English" courseResults={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;
