import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Routes></Routes>
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
