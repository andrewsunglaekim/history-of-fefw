class MyCoolReactComponent extends React.Component {
  constructor(props) {
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Wow, js is cool!');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Dope Button
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
