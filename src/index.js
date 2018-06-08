import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider, createMuiTheme } from 'material-ui-next/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: 'white',
    },
  },
});

ReactDOM.render(
	<Provider store={store}>
	<MuiThemeProvider theme={theme}>
		<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()