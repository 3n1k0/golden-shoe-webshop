import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

export const Item = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  gap: 8px;
  background: white;
  border-radius: 2px;
  justify-content: space-evenly;
  align-items: center;
  background: whitesmoke;

  select {
    padding: 10px 17px;
    height: 50px;
  }

  img {
    width: 100px;
  }
`;

export const DeleteButton = styled.div`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out;

  &:hover {
  }
  &:focus {
  }
  &:active {
    color: black;
    transform: scale(1.2);
  }
`;

export const Trashcan = styled(FaRegTrashAlt)`
  color: red;
  padding: 3px;
  font-size: 1.3em;
`;

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <Item>
      <img src={item.imageUrl} alt={item.name} />
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">€{item.price}</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
        {new Array(item.countInStock).fill(0).map((item, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <DeleteButton>
        <Trashcan onClick={() => removeHandler(item.product)}></Trashcan>
      </DeleteButton>
    </Item>
  );
};

export default CartItem;
