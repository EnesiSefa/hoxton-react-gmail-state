import Header from "./components/Header";

import initialEmails from "./data/emails";

import "./App.css";
import { useState } from "react";

function App() {
  // Use initialEmails for state
  const [Emails, setEmails] = useState(initialEmails);
  console.log(initialEmails);

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {initialEmails.map(email => (
          <div className={email.read ? "email read" : "email unread"}>
            <input className="read-checkbox" type="checkbox" />
            checked={email.read}
            onClick=
            {() => {

              email.read = !email.read;
            }}
            <input className="star-checkbox" type="checkbox" />
            <span>{email.sender}</span>
            <span className="title">{email.title}</span>
          </div>
        ))}
      </main>
    </div>
  );
}

function ToggleRead() {}
function ToggelStarred() {}

export default App;
// Instructions
// - Download files from => https://codesandbox.io/s/02-intro-to-react-gmail-state-template-z79gwe?file=/src/App.tsx
// - Don't break the code down into components; work in App.tsx only
// - Set state using useState and initialEmails
// - Render a list of emails from state so it looks similar to the screenshot
// - Create a toggleRead function that updates the target email's read property in state, when a user clicks on the checkbox
// - Create a toggleStar function that updates the target email's starred property in state, when a user clicks on the star
// - Make sure these changes take effect in the UI
