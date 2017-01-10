var React = require('react');

var PiggyBank = React.createClass({
  componentWillMount: function() {
    console.log('PiggyBank.jsx componentWillMount')
    //No access to dom. Component is about to be mounted. think of this like a constructor.
  },
  componentDidMount: function() {
    console.log('PiggyBank.jsx componentDidMount')
    //Component was mounted meaning its rendered to dom. Here we can mess with the dom if need be, like if we wanted to draw on a html canvas. 
  },
  componentWillUpdate: function() {
    console.log('PiggyBank.jsx componentWillUpdate')
    //Component is abount to update. Dont access dom as its about to be changed.
  },
  componentWillUnmount: function() {
    console.log('PiggyBank.jsx componentWillUnmount')
    //Component to be unmounted. This means this class will be destroyed. Can handle cleanup of logic, log it etc.
  },
  componentWillReceiveProps(oldProps, newProps) {
    console.log('PiggyBank.jsx componentWillReceiveProps')
    //Component props is about to be updated
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('PiggyBank.jsx shouldComponentUpdate')
    //Should it update? Here we can tell react whether to call render
    return true;
  },
  componentDidUpdate: function(prevProps, prevState) {
    console.log('PiggyBank.jsx componentDidUpdate')
    //Component updated, if you wanted to touch dom do it here and make any changes neccessary.
  },
  propTypes: {
    total: React.PropTypes.number.isRequired,
    addToSavings: React.PropTypes.func.isRequired,
    deductFromSavings: React.PropTypes.func.isRequired,
    keepPropsSame: React.PropTypes.func.isRequired,
    unMount: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired
  },
  render: function(){
    console.log('PiggyBank.jsx render')
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Total savings: {this.props.total}</p>
        <button onClick={this.props.addToSavings}>Deposit Change!</button>
        <button onClick={this.props.deductFromSavings}>Widthdraw Change!</button>
        <button onClick={this.props.keepPropsSame}>Keep state same</button>
        <button onClick={this.props.unMount}> Unmount </button>
      </div>
      );
  }
});

module.exports = PiggyBank;