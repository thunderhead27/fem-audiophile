import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';

import { HomeNav } from "../components/Home/HomeNav";
import { Browse } from "../components/Home/Browse";
import { Zx9 } from "../components/Home/Zx9";
import { Zx7 } from "../components/Home/Zx7";
import { Yx1 } from "../components/Home/Yx1";
import { BestAudioGear } from "../components/Home/BestAudioGear";
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { CartPopup } from "../components/Cart/CartPopup";

const Container = styled.div`
  ${({ menu }) => (menu ? `background-color: rgba(0,0,0,0.5);` : ``)};
  ${({ popup }) => (popup ? `background-color: rgba(0,0,0,0.5);` : ``)};
`;

const IndexPage = () => {
  const [menu, setMenu] = useState(false);
  const [popup, setPopup] = useState(false);

  return (
    <div>
      <Menu menu={menu}>
        <Browse />
      </Menu>
      <CartPopup popup={popup} />
      <Container menu={menu} popup={popup}>
        <HomeNav menu={menu} setMenu={setMenu} popup={popup} setPopup={setPopup} />
        <div tw="flex flex-col items-center gap-y-6 tablet:gap-y-8 laptop:gap-y-12">
          <Browse />
          <Zx9 />
          <Zx7 />
          <Yx1 />
          <BestAudioGear />

        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default IndexPage;
