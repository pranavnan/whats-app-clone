import Lists from "./components/leftside/Lists";
import classes from "./App.module.css";
import ChatScreen from "./components/rightside/ChatScreen";

function App() {
  return (
    <main className={classes.wrapper}>
      <Lists />
      <ChatScreen />
    </main>
  );
}

export default App;
