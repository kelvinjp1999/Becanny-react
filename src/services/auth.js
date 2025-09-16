// src/services/auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';

export const cadastrarUsuario = (email, senha) => {
  return createUserWithEmailAndPassword(auth, email, senha);
};

export const logarUsuario = (email, senha) => {
  return signInWithEmailAndPassword(auth, email, senha);
};