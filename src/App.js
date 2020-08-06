import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Router>
      <div>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;


function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est velit eum minus blanditiis delectus illo inventore! Ducimus eveniet omnis repellat repudiandae, nihil vel possimus porro, dolorum veniam ipsum quasi fugit!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Asnostrum aspernatur omnis asperiores quos ad, voluptas beatae possimus sapinpm startorem, ipsum dolor sit amet consectetur adipisicing elit. Sit animi accusantium distinctio porro nostrum aspernatur omnis asperiores quos ad, voluptas beatae possimus sapiente amet dignissimos velit voluptate ipsa molestias praesentium?</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Magnam iste aspernatur, sint dignissimos eum animi porro? Illum repudiandae repellat reiciendis tempore ratione fugiat veniam quasi velit? Reprehenderit consequunLorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iste aspernatur, sint dignissimos eum animi porro? Illum repudiandae repellat reiciendis tempore ratione fugiat veniam quasi velit? Reprehenderit consequuntur velit sit.</p>
    </div>
  );
}

