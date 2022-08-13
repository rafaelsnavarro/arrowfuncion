import { Component } from "react";
export default class app extends Component {
  name = () => {
    return <h1>Teste</h1>;
  };

  soma = () => 5 * 2;

  render() {
    return (
      <>
        <h2>{this.name()}</h2>
        <p>{this.soma()}</p>
      </>
    );
  }
}
