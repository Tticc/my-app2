import React from 'react';

// 如果需要导出的class，加上 export
export class ShoppingList extends React.Component{
    render(){
        return (<div className="shopping-list">
            <h1>Shopping list for {this.props.name}</h1>
            <ul>
                <li>Instji</li>
                <li>chicken</li>
                <li>beef</li>
                <li>{this.props.color}</li>
            </ul>
        </div>);
    }
};
ShoppingList.defaultProps = {
    color: 'default props color'
};
export default ShoppingList;