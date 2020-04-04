import React,{Fragment} from 'react';
import GameModel from "../../components/Game"

export class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {"aa":false}
    }
    render() {
        return (
            <Fragment>
                <GameModel/>
            </Fragment>

        );
    }
}
export default Game;


  
  // ========================================

  // ReactDOM.render(
  //     <fragment>
  //         <fragment>
  //             <Index />
  //         </fragment>
  //     </fragment>,
  //   document.getElementById('root')
  // );
  