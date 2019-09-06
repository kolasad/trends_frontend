import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.data = '';

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleRefresh(){
    this.forceUpdate()
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get('http://127.0.0.1:8000/api/report/', {
      params: {
        keywords: this.state.value
      }
    })
      .then( (response) => {
      console.log(response.data);
      this.data = response.data.map(object => {
        var values = object.values.map(value => {
            return `${value.date}: ${value.value}`
          }
        )
        return `${object.keyword} : ${values}`
      });
      this.handleRefresh();
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter keywords divided with  semicolon ','
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Generate report" />
        <p>{this.data}</p>
      </form>
    );
  }
}

export default Form;