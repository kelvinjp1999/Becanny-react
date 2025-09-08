import styles from "./Register.module.css"
import wallpaper from "../../assets/walpa.png"

import { useState,useEffect } from "react"

const Register = () => {
  const [displayName,setDisplayName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [error,setError] = useState("")

  const handleSubmit =(e)=>{
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais")
      return
    }

    console.log(user)



  }



  return (
    <div className={styles.register}>
      <div className={styles.register_img}>
        <img src={wallpaper} alt="" />
      </div>

      <div>
        <h1>Faça seu Cadastro</h1>
        <p>Faça parte da familia Becanny</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text" name="displayName" required placeholder="Nome do usuário" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
          </label>
          <label>
            <span>E-mail:</span>
            <input type="email" name="email" required placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>
            <span>Senha:</span>
            <input type="password" name="password" required placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <label>
            <span>Confirme sua senha:</span>
            <input type="text" name="confirmPaswword" required placeholder="Confirme sua senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </label>
          <button className={styles.btn}>Cadastrar-se</button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default Register