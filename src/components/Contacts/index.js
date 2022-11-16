import {useState, useEffect} from 'react' ;
import  "./styles.css" ;
import List from './List';
import Form from './Form';

function Contacts() {

  const[contacts,setContacts]= useState([
    {
        fullname:'Nisa',
        phone_number:'123123'
    },{
        fullname:'Nur',
        phone_number:'321321'
    },{
        fullname:'Nisanur',
        phone_number:'213213'
    },
  ]);
  useEffect(()=> {
    console.log(contacts);
  },[contacts]);


  return (
    <div id="container">
      <h1>Contacts</h1>  
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;
