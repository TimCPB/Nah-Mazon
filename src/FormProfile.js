import React from 'react';

class FormProfile extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        name: '',
        description: '',
        address: ''
      }
    }

    render(){
      return (
        <div>
          <form >
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="submit" value = "update" />
          </form>
        </div>

      )
    }



}





export default FormProfile
