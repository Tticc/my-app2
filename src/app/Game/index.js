import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from "../../components/Game/Game"
// const Game = React.lazy(() => import("./components/Game/Game"));





  
  // ========================================

  ReactDOM.render(
      <fragment>
          <fragment>
              <Game />
          </fragment>
      </fragment>,
    document.getElementById('root')
  );
  