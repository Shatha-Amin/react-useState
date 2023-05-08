import React, { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [users, setUsers] = useState([])

  const deleteAccount = (email) => {
    const filteredUsers = users.filter((user) => {
      return user.email !== email
    })
    setUsers(filteredUsers)
  }

  const handleSingup = () => {
    if (email === '' || password === '' || confirmPass === '') {
      alert('submitted an empty input')
    }else{
      if (password !== confirmPass) {
        alert("two passwords are not matched")
      } else {
        setUsers([
          ...users,
          {
            email,
            password,
            confirmPass,
          }
        ])
        setEmail('')
        setPassword('')
        setConfirmPass('')
      }
    }
  }
  return (
    <div>
      <input placeholder='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <input placeholder='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <input placeholder='confirm password' type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} /><br /><br />
      <button type="submit" onClick={handleSingup}>Sing up</button>
      <br /><br />

      <div>
        {users.map((user) => (
          <div key={user.email}>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <button onClick={() => deleteAccount(user.email)}>Delete Account</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Signup