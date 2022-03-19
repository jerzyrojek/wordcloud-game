import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import MainContent from './components/MainContent';

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
