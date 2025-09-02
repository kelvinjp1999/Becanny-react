import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const listarProdutos = async () => {
  const ref = collection(db, "estoque");
  const snapshot = await getDocs(ref);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};