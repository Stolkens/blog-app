import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';


const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App tab="home"/>
    </Provider>
  </BrowserRouter> 
);

