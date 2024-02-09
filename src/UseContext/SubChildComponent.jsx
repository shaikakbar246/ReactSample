import React,{useContext} from 'react'
import { UserContext } from '../context/userContext'

const SubChildComponent = () => {
    const data=useContext(UserContext);
    const { firstname, phonenimber, email } = data;
  return (
    <div>
    <div>SubChildComponent</div>

    <div>firstName:{firstname}</div>
      <div>PhoneNumber:{phonenimber}</div>
      <div>email:{email}</div>
    </div>
  )
}

export default SubChildComponent