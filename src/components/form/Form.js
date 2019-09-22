import React, {Component} from 'react';
import './Form.scss';

const themeOptions = [
  {
    name: 'Blank',
    value: 'none'
  },
  {
    name: 'Cats',
    value: 'cats'
  },
  {
    name: 'Dinos',
    value: 'dinos'
  },
  {
    name: 'Random',
    value: 'random'
  }
];

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeValue: '',
      themeValue: ''
    };
  }

  renderSelectInput = () =>(
      <select value={this.state.themeValue} onChange={this.handleThemeChange}>
        {themeOptions.map((theme) =>
          <option value={theme.value}>{theme.name}</option>
        )}
      </select>
  );

  handleNumberChange = event => {
    this.setState({timeValue: event.target.value});
  }

  handleThemeChange = event => {
    this.setState({themeValue: event.target.value});
  }

  handleSubmit = event => {
    alert(`A form was submitted: ${this.state.timeValue} minutes and a theme of: ${this.state.themeValue}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Set the time:
          <input 
            type="number" 
            value={this.state.timeValue} 
            onChange={this.handleNumberChange}  
            min="0"
          />
        </label>

        <label>
          Pick a theme:
          {this.renderSelectInput()}
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
