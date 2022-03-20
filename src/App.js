import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ListTodo from "./Components/ListTodo";
import { addTodo, setTextCurrent, setTheme } from "./Store/Actions";
import {
  ChooseTheme,
  ChooseThemeItem,
  TaskComponent,
  TaskTodo,
  TaskCompleted,
} from "./Components";
import { darkTheme, lightTheme } from "./Theme";
import { ThemeProvider } from "styled-components";
import { Container } from "./Container/Container";

function App() {
  const { textCurrent, theme } = useSelector((state) => state);
  const dispatch = useDispatch();

  const getTheme = () => {
    switch (theme) {
      case "DARK":
        return darkTheme;
      case "LIGHT":
        return lightTheme;
      default:
        break;
    }
  };

  return (
    <div className="App container">
      <ThemeProvider theme={getTheme()}>
        <Container>
          <ChooseTheme
            defaultValue={"DARK"}
            onChange={(e) => dispatch(setTheme(e.target.value))}
          >
            <ChooseThemeItem value={"DARK"}>DarkTheme</ChooseThemeItem>
            <ChooseThemeItem value={"LIGHT"}>LightTheme</ChooseThemeItem>
          </ChooseTheme>
          <h2
            style={{
              borderColor: `${getTheme().border}`,
            }}
          >
            To do list
          </h2>
          <TaskComponent />
          <TaskTodo />
          <TaskCompleted />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
