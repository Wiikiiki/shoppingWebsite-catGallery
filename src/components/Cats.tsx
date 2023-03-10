import React, { useContext } from "react";
import styles from "./Cat.module.css";
import { appContext, appSetStateContext } from "../AppState";
import { withAddToCart } from "./AddToCart";

export interface CatProps {
  id: number;
  name: string;
  email: string;
  addToCart: (id, name) => void;
}

const Cat: React.FC<CatProps> = ({ id, name, email, addToCart }) => {
  const value = useContext(appContext);

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}?set=set4`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  );
};

export default withAddToCart(Cat);
