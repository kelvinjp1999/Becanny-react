import styles from "./Login.module.css"
import { useState } from "react"
import { logarUsuario } from "../../services/auth"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    if (!email || !password) {
      setError("Preencha todos os campos")
      return
    }

    try {
      await logarUsuario(email, password)
      setSuccess(true)
    } catch (err) {
      setError("E-mail ou senha inválidos")
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.login_box}>
        <h1>Entrar</h1>
        <p>Bem-vindo de volta à família Becanny</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>E-mail:</span>
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Senha:</span>
            <input
              type="password"
              name="password"
              required
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className={styles.btn}>Entrar</button>
          {error && <p className={styles.error}>{error}</p>}
          {success && (
            <div className={styles.success_popup}>
              Login efetuado com sucesso!
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login