import React,{Fragment} from 'react';
import ShoppingListModel from "../../components/ShoppingList"

export class ShoppingList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {"aa":false}
    }
    render() {
        return (
            <Fragment>
                <ShoppingListModel name = "wenccccc"/>
            </Fragment>

        );
    }
}
export default ShoppingList;


