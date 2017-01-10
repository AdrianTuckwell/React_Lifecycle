var React = require('react');
var ReactDOM = require('react-dom');
var PiggyBankContainer = require('./containers/PiggyBankContainer.jsx')

window.onload = function(){
  ReactDOM.render(
    <PiggyBankContainer 
      title="piggy bank"
      owner="Beth" 
      depositAmount={2} />,
    document.getElementById('app')
  );
}
