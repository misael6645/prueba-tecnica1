import Router from './routes'
import ThemeProvider from './theme'
import Scrollbar from './components/scrollbar/Scrollbar'

function App() {
  return (
    <ThemeProvider>
      <Scrollbar>
        <Router />
      </Scrollbar>
    </ThemeProvider>
  )
}

export default App
