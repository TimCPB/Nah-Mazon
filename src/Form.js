import React from 'react';

class Form extends React.Component {

  onSubmitFn = (event) => {
    console.log(event)
  }

  render() {
    return (
      <form onSubmit={this.onSubmitFn}>
        <input type='submit'/>
      </form>
    )

  }
}

export default Form