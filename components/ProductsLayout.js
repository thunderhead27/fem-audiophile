import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { CartPopup } from "./Cart/CartPopup";
import { Nav } from "./Category/Nav";
import { Footer } from "./Footer";
import { BestAudioGear } from "./Home/BestAudioGear";
import { Browse } from "./Home/Browse";
import { Menu } from "./Menu";
import OutsideAlerter from "../Hooks/useOutsideAlerter";

const Container = styled.div`
  ${({ menu }) => (menu ? `background-color: rgba(0,0,0,0.5); filter: brightness(50%)` : ``)};
  ${({ popup }) => (popup ? `background-color: rgba(0,0,0,0.5); filter: brightness(50%)` : ``)};
`;

export const ProductsLayout = ({ children, popup, setPopup }) => {
    const [menu, setMenu] = useState(false);

    return (
        <div tw="flex flex-col">
            <Nav menu={menu} setMenu={setMenu} popup={popup} setPopup={setPopup} />
            <Menu menu={menu} />
            <OutsideAlerter popup={popup} setPopup={setPopup}><CartPopup popup={popup} /></OutsideAlerter>
            <Container tw="flex flex-col items-center" menu={menu} popup={popup}>
                <main>{children}</main>
                <Browse />
                <BestAudioGear />
                <Footer />
            </Container>
        </div>
    );
};
