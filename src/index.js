import Preact from './preact';
const MyTitle = Preact.createClass({
  render() {
    return Preact.createElement('div', null, [
      Preact.createElement('h1', null, this.props.message),
      Preact.createElement('div', null, [
        Preact.createElement('h1', null, 'description'),
        Preact.createElement('h1', null, 'description'),
        Preact.createElement('h1', null, 'description'),
        Preact.createElement('h1', null, 'description')
      ])
    ]);
    // return <div />;
  }
});
Preact.render(
  Preact.createElement(MyTitle, { message: 'Hello World' }),
  document.getElementById('root')
);
