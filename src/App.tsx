import "./App.css";
import keyConcepts from "./assets/images/key-concepts.png";
import ListOfCard from "./component/listofcard";
import components from "./assets/images/components.png";
import events from "./assets/images/events.png";
import state from "./assets/images/state.png";
import { useState } from "react";
function App() {
  const [title, setTitle] = useState("Key Concepts of React");
  const titleChange = () => {
    setTitle(
      title === "Key Concepts of React" ? "React ❤️" : "Key Concepts of React"
    );
  };
  return (
    <>
      <header>
        <img src={keyConcepts} alt="key concepts" />
        <h1>{title}</h1>
        <h3 style={{ opacity: 0.5 }}>Made with ❤️ by Mitesh</h3>
      </header>
      <button onClick={titleChange}>
        Change ref to state rerender all child
      </button>
      <div id="concepts">
        <ListOfCard
          img={components}
          title="React"
          summary="React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
        />
        <ListOfCard
          img={events}
          title="React"
          summary="React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
        />
        <ListOfCard
          img={state}
          title="React"
          summary="React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
        />
      </div>
      <h2 style={{ opacity: 0.5 }}>Made with ❤️ by Mitesh</h2>
    </>
  );
}

export default App;
