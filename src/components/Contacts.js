import React, { Component } from 'react';
import Contact from './Contact'

class Contacts extends Component {
  state = {
      contacts: [
        {
          id:1,
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '555-5555-555'
        },
        {
          id:2,
          name: 'Karen Williams',
          email: 'karen@gmail.com',
          phone: '2222-222-222'
        },
        {
          id:3,
          name: 'Henry Johnson',
          email: 'henry@gmail.com',
          phone: '111-111-111'
        }
      ]
    }


  render() {
      const {contacts} = this.state;
    return(
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
          key={contact.id}
          contact={contact}/>
        ))}
      </React.Fragment>)
  }
}

export default Contacts
