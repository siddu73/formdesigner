var CC = React.createClass({
 
    handleClick: function(i, event) {
                alert(i);
    },
 
    render: function() {
        var s = {
            border: '1px solid #ddd',
            display: 'block',
            padding: '10px'
        };
        var items = this.props.arr.map(function(a, i) {
            return (
                <li key={i} onClick={this.handleClick.bind(this, i)} style={s}>
                    <img src="images/joy.png"/>
                </li>
                );
        }, this);
 
        return (
            <ul >
                {items}
            </ul>
            );
    }
});
 

var App = React.createClass({
    getInitialState: function () {
        return {
            arr: [1,2,3]
        };
    },
 
    render: function() {
        return (
            <div>
                <CC arr={this.state.arr}/>
            </div>
        );
    }
});
 
ReactDOM.render(<App/>, document.getElementById('app'));