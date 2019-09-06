import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', display: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

  handleChange(event) {
    this.setState({value: event.target.value, display: false});
  }

  handleReportRender(event) {
  console.log('render');
    this.forceUpdate();
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get('http://127.0.0.1:8000/api/report/', {
      params: {
        keywords: this.state.value
      }
    })
      .then( (response) => {
        this.state = {
          value: response.data,
          display: true
        };
        console.log(this.state)
        handleReportRender();
        }
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  render() {
  console.log(this.state.display)
    if(this.state.display === true) {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter keywords divided with  semicolon ','
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Generate report" />
      </form>
          <p>this.state.value</p>
    );
  } else {
    <form onSubmit={this.handleSubmit}>
        <label>
          Enter keywords divided with  semicolon ','
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Generate report" />
      </form>
  }
}

export default Form;