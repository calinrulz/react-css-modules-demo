import React, { Component } from 'react';
import 'antd/dist/antd.css';
import styles from './App.scss';

import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <h2>
            Congrats, you now have Sass and CSS Modules in your React project!
            <span role="img" aria-label="emoji"> 🤑 </span>
          </h2>

          <Button type="primary">Button</Button>
        </div>
      </div>
    );
  }
}

export default App;
