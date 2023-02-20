import React from 'react';
import { Browse } from "./Home/Browse";
import tw, { styled } from 'twin.macro';

const MenuPopup = styled.div`
  visibility: hidden;
  position: absolute;
  z-index: 10;
  top: 80px;
  width: 100%;
  background-color: white;


  @media (max-width: 768px) { 
    height: 750px;
  }

  @media (min-width: 769px) { 
    height: 400px;
  }
  

  ${({ menu }) => (menu ? `visibility: visible` : `visibility: hidden`)};
`;



export const Menu = ({ menu }) => {
  return (
    <MenuPopup menu={menu}><Browse /></MenuPopup>
  );
};
