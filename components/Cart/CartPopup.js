import Link from "next/link";
import { useRouter } from "next/router";
import React from 'react';
import tw, { styled } from 'twin.macro';
import { useCartContext } from "../../context/cart";
import data from '../../utils/data/data.json';

const Popup = styled.div`
  visibility: hidden;
  position: absolute;
  z-index: 30;
  top: 100px;

  @media (max-width: 768px) { 
    width: 327px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  @media (min-width: 769px), (max-width: 1439px) { 
    width: 377px;
    right: 40px;
  }

  @media (min-width: 1440px) {
    width: 377px;
    right: 165px;
  }

  ${({ popup }) => (popup ? `visibility: visible` : `visibility: hidden`)};
`;

export const CartPopup = ({ popup }) => {
  const [cart, setCart] = useCartContext();

  const getImageUrl = (name) => {
    return data.find(product => product.name === name).image.mobile;
  };

  const decreaseQuantity = (i) => {
    const newQuantity = cart[i];
    const cartCopy = [...cart];
    newQuantity.quantity -= 1;
    cartCopy.splice(i, 1, newQuantity);
    setCart(cartCopy);
    console.log(cart);
  };

  const addQuantity = (i) => {
    const newQuantity = cart[i];
    const cartCopy = [...cart];
    newQuantity.quantity += 1;
    cartCopy.splice(i, 1, newQuantity);
    setCart(cartCopy);
    console.log(cart);
  };

  const router = useRouter();

  const removeZeroQuantity = (e) => {
    e.preventDefault();
    const nonZero = cart.filter(product => product.quantity !== 0);
    setCart(nonZero);
    router.push('/checkout')
  };

  const getTotal = (cart) => {
    return Intl.NumberFormat('en-US').format(cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0));
  };

  return (
    <Popup tw="flex flex-col bg-white pt-8 pb-8 pl-7 pr-7 rounded-lg font-sans text-lg" popup={popup}>
      <div tw="flex flex-row justify-between mb-8">
        <span tw="font-bold">CART ({cart.length})</span>
        <span onClick={() => setCart([])} tw="underline text-sm opacity-50 cursor-pointer">Remove all</span>
      </div>
      <div tw="flex flex-col gap-y-6 mb-8">
        {cart.map((product, i) =>
          <div tw="flex flex-row items-center" key={i}>
            <img tw="w-16 h-16 mr-4" src={getImageUrl(product.name)} />
            <div tw="flex flex-col font-bold">
              <span tw="text-xs">{product.name}</span>
              <span tw="text-xs opacity-50">$ {Intl.NumberFormat('en-US').format(product.price)}</span>
            </div>
            <div tw="flex flex-row h-8 font-bold ml-auto">
              <button tw="h-8 w-8 bg-darkGray" onClick={() => decreaseQuantity(i)} disabled={product.quantity === 0}><span tw="opacity-50">-</span></button>
              <div tw="flex flex-row h-8 w-8 bg-darkGray items-center justify-center text-sm"><span>{product.quantity}</span></div>
              <button onClick={() => addQuantity(i)} tw="h-8 w-8 bg-darkGray"><span tw="opacity-50">+</span></button>
            </div>
          </div>
        )}
      </div>
      <div tw="flex flex-row justify-between mb-6">
        <span tw="text-sm opacity-50">TOTAL</span>
        <span tw="font-bold">$ {getTotal(cart)}</span>
      </div>
      <button onClick={removeZeroQuantity} tw="font-bold text-sm text-white bg-darkOrange h-12 w-full">CHECKOUT</button>
    </Popup >
  );
};
