var React = require('react');
var PiggyBank = require('../components/PiggyBank.jsx')

var PiggyBankContainer = React.createClass({
  componentWillMount: function() {
    console.log('PiggyBankContainer.jsx componentWillMount')
    //No access to dom. Component is about to be mounted. think of this like a constructor.
  },
  componentDidMount: function() {
    console.log('PiggyBankContainer.jsx componentDidMount')
    //Component was mounted meaning its rendered to dom. Here we can mess with the dom if need be, like if we wanted to draw on a html canvas. 
  },
  getInitialState: function() {
    console.log('PiggyBankContainer.jsx getInitialState')
    return {
      total: 0,
      unMount: false
    };
  },
  componentWillUpdate: function() {
    console.log('PiggyBankContainer.jsx componentWillUpdate')
    //Component is abount to update. Dont access dom as its about to be changed.
  },
  componentWillReceiveProps(oldProps, newProps) {
    console.log('PiggyBankContainer.jsx componentWillReceiveProps')
    //Component props is about to be updated
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('PiggyBankContainer.jsx shouldComponentUpdate')
    //Should it update? Here we can tell react whether to call render
    return true;
  },
  componentDidUpdate: function() {
    console.log('PiggyBankContainer.jsx componentDidUpdate')
    //Component updated, if you wanted to touch dom do it here and make any changes neccessary.
  },
  addToSavings: function() {
    console.log('PiggyBankContainer.jsx addToSavings')
    this.setState({total: this.state.total+this.props.depositAmount});
  },
  deductFromSavings: function() {
    console.log('PiggyBankContainer.jsx deductFromSavings')
    this.setState({total: this.state.total-this.props.depositAmount});
  },
  keepStateSame: function() {
    console.log('PiggyBankContainer.jsx keepStateSame')
    this.setState({total: this.state.total});
  },
  unMountChild: function() {
    console.log('PiggyBankContainer.jsx unMountChild')
    this.setState({unMount: true});
  },
  propTypes: {
    title: React.PropTypes.string.isRequired,
    owner: React.PropTypes.string.isRequired,
    depositAmount: React.PropTypes.number.isRequired
  },
  render: function(){
    console.log('PiggyBankContainer.jsx render')
    var element;

    if(this.state.unMount) {
      element = <div></div>
    }else {
      element = 
      <div className="bank-box">
          <PiggyBank 
            addToSavings={this.addToSavings}
            deductFromSavings={this.deductFromSavings} 
            keepPropsSame={this.keepStateSame}
            unMount={this.unMountChild}
            total={this.state.total}
            title={this.props.owner + ' ' + this.props.title}
             />
        </div>
    }

    return (element);
  }
});

module.exports = PiggyBankContainer;