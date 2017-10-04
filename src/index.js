import React from 'react';
import { render } from 'react-dom';

import Home from './scenes/Home';

var reactRoot = document.createElement('div');
document.body.appendChild(reactRoot);

render(<Home />, reactRoot);
