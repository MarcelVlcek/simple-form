import { useState } from "react"

const App = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [users, setUsers] =useState([])

  const formSubmit = (e) => {
    e.preventDefault()

    if ( fullName && email ) {
      const oneUser = {fullName, email, age}
      setUsers( (users) => {
          return [...users,oneUser]
      } )
    } else {
      alert('Nevyplnil si položku ty vajíčko')
    }
    
    setFullName('')
    setEmail('')
    setAge('')
  }

  return (
    <section>
      <form onSubmit={formSubmit} >
        <input 
        className="userInfo" 
        type="text" 
        placeholder="Meno" 
        value={fullName}
        onChange={ (e) => setFullName(e.target.value)}
        /> 

        <input 
        className="userInfo" 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={ (e) => setEmail(e.target.value)}
        />

<input 
        className="userInfo" 
        type="text" 
        placeholder="Vek" 
        value={age}
        onChange={ (e) => setAge(e.target.value)}
        />

        <input type="submit" />
      </form> 

      {users.map( (oneUser, index) => {
        const {fullName, email, age} = oneUser
        return <div className="item" key={index}>
          <h3>{fullName}</h3>
          <p>{email}</p>
          <p>{age} rokov</p>
        </div>
      } )}

    </section>
  )
}

export default App