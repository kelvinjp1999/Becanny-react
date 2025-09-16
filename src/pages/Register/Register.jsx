import styles from "./Register.module.css"
import wallpaper from "../../assets/walpa.png"

import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom"

import { cadastrarUsuario } from "../../services/auth.js";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [displayName,setDisplayName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [error,setError] = useState("")
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate();


  const handleSubmit = async (e)=>{
    e.preventDefault()

    setLoading(true)
    setError("")


    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais")
      return
    }

    try{
      const res = await cadastrarUsuario(email,password)
      await updateProfile(res.user, {
        displayName: displayName
      });
      navigate("/login");
    } catch(err){
      if(err.message.includes("Password")){
        setError("A senha Precisa conter pelo menos 6 caracteres")
      }else if(err.message.includes('email-already')){
        setError("E-mail já cadastrado")
      } else {
        setError("Ocoreu um erro, por favor tente mais tarde")
      }

    }

    setLoading(false)
  }



  return (
    <div className={styles.register}>
      <div className={styles.register_img}>
        <img src={wallpaper} alt="" />
      </div>

      <div>
        <h1>Faça seu Cadastro</h1>
        <p>Faça parte da familia Becanny</p>
        <form onSubmit={handleSubmit} className={styles.form}>
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
            <input type="password" name="confirmPaswword" required  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </label>
          {loading == true ? <button className={styles.btn} disabled>Carregando ...</button> : <button className={styles.btn}>Cadastrar-se</button>}
          <h2>Já possui uma conta? <Link to="/login">Clique aqui</Link></h2>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default Register