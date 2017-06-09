/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

import '../node_modules/pearson-elements/scss/elements.scss';
import ValidateJs from './components/ValidateJs';

render(<ValidateJs/>,
  document.getElementById('app')
);
