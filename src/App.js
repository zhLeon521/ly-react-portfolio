import { lightTheme } from "./components/Themes"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./GlobalStyles"
import { Switch, Route } from "react-router-dom"

// components
import Main from "./components/Main"
import AboutPage from "./components/AboutPage"
import WorkPage from "./components/WorkPage"
import BlogPage from "./components/BlogPage"
import MySkillsPage from "./components/MySkillsPage"


function App() {
  return <>
    <GlobalStyle />


    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/work" component={WorkPage} />
        <Route exact path="/skills" component={MySkillsPage} />
        <Route exact path="/" component={Main} />
      </Switch>
    </ThemeProvider>
  </>

}

export default App

