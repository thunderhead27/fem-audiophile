import React, { useState } from "react";
import tw, { styled } from 'twin.macro';
import { Nav } from "../components/Category/Nav";
import { Footer } from "../components/Footer";
import { BestAudioGear } from "../components/Home/BestAudioGear";
import { Browse } from "../components/Home/Browse";
import { Menu } from "../components/Menu";
import { CartPopup } from "./Cart/CartPopup";
import OutsideAlerter from "../Hooks/useOutsideAlerter";


const Container = styled.div`
  ${({ menu }) => (menu ? `background-color: rgba(0,0,0,0.5); filter: brightness(50%)` : ``)};
  ${({ popup }) => (popup ? `background-color: rgba(0,0,0,0.5); filter: brightness(50%)` : ``)};
`;

export const Layout = ({ children }) => {
    const [menu, setMenu] = useState(false);
    const [popup, setPopup] = useState(false);


    return (
        <div tw="flex flex-col">
            <Nav menu={menu} setMenu={setMenu} popup={popup} setPopup={setPopup} />
            <Menu menu={menu} />
            <OutsideAlerter popup={popup} setPopup={setPopup}><CartPopup popup={popup} /></OutsideAlerter>
            <Container tw="pt-16 tablet:pt-32 laptop:pt-40" menu={menu} popup={popup}>
                <main>{children}</main>
                <Browse />
                <BestAudioGear />
                <Footer />
            </Container>
        </div>
    );
};
