import React from 'react';
import './scss/App.scss';//npm i node-sass
//import './css/App.css';

class App extends React.Component {
  state = {
    active: false
  }
  handleChange = () => {
    this.setState({
      active: !this.state.active //odwracamy wartość logiczną active
    })
  }
  render(){
    const stylesActiveFalse = {padding:'10px', color:'red'};//(METODA 1)
    const stylesActiveTrue = {padding:'20px', color:'black'};//(METODA 1)
    
    let btn = 'active-false';//nadanie klasy o tej nazwie (METODA 2)
    let btnArrayClass = ['active-false'];//(METODA 3)
    if (this.state.active) {//jeśli zmieniamy active na true to zmień też klase //(METODA 2) (METODA 3)
      btn = btn + " active-true";//(METODA 2)
      btnArrayClass.pop();//(METODA 3)
      btnArrayClass.push("active-true");//(METODA 3)
    }
    return (
      <div className="App">
        <button //(METODA 1)
          onClick={this.handleChange}
          // style = {{padding: "20px"}}//sposób na przekazanie inlinenowo styli
          style={this.state.active ? stylesActiveTrue : stylesActiveFalse}
        >
            Przycisk aktywny? {this.state.active.toString()}
        </button><br/>

        <button //(METODA 2)
          onClick={this.handleChange}
          className={btn}
        >
            Przycisk2 aktywny? {this.state.active.toString()}
        </button><br/>
      
        <button //(METODA 3)
          onClick={this.handleChange}
          className={btnArrayClass.join(' ')}
        >
            Przycisk2 aktywny? {this.state.active.toString()}
        </button><br/>
      </div>
    );
  }
}

export default App;
