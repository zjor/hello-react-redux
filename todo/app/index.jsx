import React from 'react';
import {render} from 'react-dom';

import {App} from 'components/App';

render(
    <App
        tasks={["Go to work", "Buy milk", "Jogging", "Go to bed"]}
        filter="All"
    />, document.getElementById('root'));