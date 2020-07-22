// import React from 'react';
// class Form extends React.Component {
//
//   onSubmitFn = (event) => {
//     console.log(event)
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.onSubmitFn}>
//         <input type='submit'/>
//       </form>
//     )
//
//   }
// }
//
// export default Form


import React from 'react';
class Form extends React.Component {
  state = { data: {} };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  }
  render() {
    return (
      <form method="post" onSubmit={this.onSubmit}>
        <input type="text"/>
      </form>
    );
  }
}

export default Form
