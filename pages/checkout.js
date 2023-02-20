import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Nav } from "../components/Category/Nav";
import { Footer } from "../components/Footer";
import { useCartContext } from "../context/cart";
import data from '../utils/data/data.json';
import { Menu } from "../components/Menu";
import { CartPopup } from "../components/Cart/CartPopup";
import OutsideAlerter from "../Hooks/useOutsideAlerter";

const Container = styled.div`

  ${({ menu }) => (menu ? `background-color: rgba(0,0,0,0.5); filter: brightness(50%)` : ``)};
  ${({ popup }) => (popup ? `background-color: rgba(0,0,0,0.5); filter: brightness(50%)` : ``)};
  ${({ confirm }) => (confirm ? `background-color: rgba(0,0,0,0.5); filter: brightness(50%)` : ``)};
`;

const Confirm = styled.div`
visibility: hidden;
position: absolute;
background-color: white;
z-index: 20;
top: 200px;
left: 50%;
transform: translate(-50%, 0);
background-color: white;

  @media (max-width: 768px) { 
    width: 327px;
    height: 600px
  }

  @media (min-width: 769px) { 
    width: 540px;
    height: 581px;
  }

${({ confirm }) => (confirm ? `visibility: visible` : `visibility: hidden`)};
`;

const Button = styled.button`
background-color: #D87D4A !important;`;

const checkout = () => {
    const router = useRouter();
    const [cart, setCart] = useCartContext();
    const [menu, setMenu] = useState(false);
    const [popup, setPopup] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const [info, setInfo] = useState({
        name: '',
        address: '',
        phone: '',
        address: '',
        zipCode: '',
        city: '',
        country: '',
        payment: 'eMoney',
        eMoney: '',
        eMoneyPin: ''
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setInfo({
            ...info,
            [e.target.name]: value
        });
    };

    const handleRadioChange = (e) => {
        setInfo({
            ...info,
            payment: e.target.value
        });
    };

    const isBrowser = () => typeof window !== 'undefined';

    const scrollToTop = () => {
        if (!isBrowser()) return;
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirm(true);
        scrollToTop();
        console.log(info);
    };

    const getTotal = (cart) => {
        return Intl.NumberFormat('en-US').format(cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0));
    };

    const getGrandTotal = (cart) => {
        return Intl.NumberFormat('en-US').format(cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0) + 50);
    };

    const getImageUrl = (name) => {
        return data.find(product => product.name === name).image.mobile;
    };

    return (
        <div tw="flex flex-col w-screen">
            <Head>
                <title>Checkout</title>
            </Head>
            <Nav menu={menu} setMenu={setMenu} popup={popup} setPopup={setPopup} />
            <Menu menu={menu} />
            <Confirm tw="rounded-lg" confirm={confirm}>
                <div tw="flex flex-col font-sans py-8 px-8">
                    <Image tw="mb-8" src="/assets/checkout/icon-order-confirmation.svg" width={64} height={64} alt="checkMark" />
                    <span tw="w-[284px] font-bold text-2xl">THANK YOU</span>
                    <span tw="text-2xl font-bold mb-6">FOR YOUR ORDER</span>
                    <span tw="text-sm opacity-50 mb-6">You will receive an email confirmation shortly.</span>
                    <div tw="flex flex-col tablet:flex-row mb-12">
                        {
                            cart[0] && 
                            <div tw="flex flex-col bg-darkGray rounded-t-lg tablet:rounded-t-none tablet:rounded-l-lg w-full">
                                <div tw="flex flex-row justify-between px-4 py-4 items-center">
                                    <Image src={getImageUrl(cart[0]?.name)} width={32} height={32} />
                                    <div tw="flex flex-col">
                                        <span tw="text-sm font-bold">{cart[0].name}</span>
                                        <span tw="text-xs font-bold opacity-50">{`$ ${Intl.NumberFormat('en-US').format(cart[0].price)}`}</span>
                                    </div>
                                    <div tw="text-xs opacity-50">{`x${cart[0].quantity}`}</div>
                                </div>
                                {
                                    cart.length > 1 && 
                                    <div>
                                        <div tw="border border-[1px] border-gray-300 mx-4"></div> 
                                        <div tw="text-xs opacity-50">{`and ${cart.length - 1} other item(s)`}</div>
                                    </div>
                                }
                            </div>
                        }
                        <div tw="flex flex-col rounded-b-lg h-[92px] bg-black py-4 pl-6 gap-y-2 w-full tablet:w-[250px] tablet:rounded-l-none tablet:rounded-r-lg">
                            <span tw="text-sm text-white opacity-50">GRAND TOTAL</span>
                            <span tw="text-white">$ {getGrandTotal(cart)}</span>    
                        </div>                            
                    </div>
                    <button onClick={(e) => {e.preventDefault(); setConfirm(false); setCart([]); router.push('/')}} tw="w-full h-12 bg-darkOrange text-white font-bold tracking-widest text-sm">BACK TO HOME</button>
                </div>
            </Confirm>
            <OutsideAlerter popup={popup} setPopup={setPopup}><CartPopup popup={popup} /></OutsideAlerter>
            <Container menu={menu} popup={popup} confirm={confirm}>
                <form onSubmit={(e) => { handleSubmit(e); }} tw="w-[327px] tablet:w-[690px] laptop:w-[1110px] items-center left-0 right-0 ml-auto mr-auto pb-8">
                    <button tw="font-sans text-sm opacity-50 font-medium mb-6 laptop:mb-14 mt-4 tablet:mt-8 laptop:mt-20" onClick={() => router.back()}>Go Back</button>
                    <div tw="pt-6 pb-6 font-sans">
                        <div tw="mb-8">
                            <span tw="text-2xl tablet:text-2xl font-bold">CHECKOUT</span>
                        </div>
                        <span tw="text-sm font-medium text-darkOrange tracking-widest">BILLING DETAILS</span>
                        <div tw="flex flex-col tablet:grid tablet:grid-rows-2 tablet:grid-cols-2 pt-4 tablet:gap-x-4 tablet:gap-y-6 mb-7">
                            <div tw="flex flex-col">
                                <label htmlFor="name" tw="text-xs mb-2 font-bold">Name</label>
                                <input tw="h-[56px] border-[2px] border-gray-300 hover:border-darkOrange focus:outline-none focus:border-none focus:ring-darkOrange focus:ring-2 rounded-lg pl-6 text-sm" id="name" name="name" type="text" value={info.name} onChange={handleChange} placeholder="Alexei Ward" required></input>
                            </div>
                            <div tw="flex flex-col tablet:col-start-2">
                                <label htmlFor="email" tw="text-xs mb-2 font-bold">Email</label>
                                <input tw="h-[56px] border-[2px] border-gray-300 hover:border-darkOrange focus:outline-none focus:border-none focus:ring-darkOrange focus:ring-2 rounded-lg pl-6 text-sm" id="email" name="email" type="email" value={info.email} onChange={handleChange} placeholder="alexei@mail.com" required></input>
                            </div>
                            <div tw="flex flex-col tablet:row-start-2">
                                <label htmlFor="phone" tw="text-xs mb-2 font-bold">Phone Number</label>
                                <input tw="h-[56px] border-[2px] border-gray-300 hover:border-darkOrange focus:outline-none focus:border-none focus:ring-darkOrange focus:ring-2 rounded-lg pl-6 text-sm" id="phone" name="phone" type="text" value={info.phone} onChange={handleChange} placeholder="+1202-555-0136" required></input>
                            </div>
                        </div>
                        <span tw="text-sm font-medium text-darkOrange tracking-widest">SHIPPING INFO</span>
                        <div tw="flex flex-col pt-4 tablet:grid tablet:grid-rows-3 tablet:grid-cols-2 tablet:gap-x-4 tablet:gap-y-6 mb-7">
                            <div tw="flex flex-col tablet:col-span-2">
                                <label htmlFor="address" tw="text-xs mb-2 font-bold">Address</label>
                                <input tw="h-[56px] border-[2px] border-gray-300 hover:border-darkOrange focus:outline-none focus:border-none focus:ring-darkOrange focus:ring-2 rounded-lg pl-6 text-sm" id="address" name="address" type="text" value={info.address} onChange={handleChange} placeholder="1137 Williams Avenue" required></input>
                            </div>
                            <div tw="flex flex-col tablet:row-start-2">
                                <label htmlFor="zipCode" tw="text-xs mb-2 font-bold">Zip Code</label>
                                <input tw="h-[56px] border-[2px] border-gray-300 hover:border-darkOrange focus:outline-none focus:border-none focus:ring-darkOrange focus:ring-2 rounded-lg pl-6 text-sm" id="zipCode" name="zipCode" type="text" value={info.zipCode} onChange={handleChange} placeholder="10001" required></input>
                            </div>
                            <div tw="flex flex-col tablet:col-start-2">
                                <label htmlFor="city" tw="text-xs mb-2 font-bold">City</label>
                                <input tw="h-[56px] border-[2px] border-gray-300 hover:border-darkOrange focus:outline-none focus:border-none focus:ring-darkOrange focus:ring-2 rounded-lg pl-6 text-sm" id="city" type="text" name="city" value={info.city} onChange={handleChange} placeholder="New York" required></input>
                            </div>
                            <div tw="flex flex-col tablet:row-start-3">
                                <label htmlFor="country" tw="text-xs mb-2 font-bold">Country</label>
                                <input tw="h-[56px] border-[2px] border-gray-300 hover:border-darkOrange focus:outline-none focus:border-none focus:ring-darkOrange focus:ring-2 rounded-lg pl-6 text-sm" id="country" name="country" type="text" value={info.country} onChange={handleChange} placeholder="United States" required></input>
                            </div>
                        </div>
                        <span tw="text-sm font-medium text-darkOrange tracking-widest">PAYMENT DETAILS</span>
                        <div tw="flex flex-col tablet:grid tablet:grid-cols-2 tablet:grid-rows-3 pt-4 tablet:gap-x-4 tablet:gap-y-2">
                            <span tw="text-xs mb-2 font-bold">Payment Method</span>
                            <div tw="flex flex-row items-center tablet:row-start-1 tablet:col-start-2 cursor-pointer h-14 border-2 border-gray-300 rounded-lg"><label htmlFor="eMoney" tw="font-bold"><input tw="accent-darkOrange ml-4 mr-4" id="eMoney" type="radio" checked={info.payment === 'eMoney'} value="eMoney" onChange={handleRadioChange} name="payment" required /> e-Money</label></div>
                            <div tw="flex flex-row items-center tablet:row-start-2 tablet:col-start-2 cursor-pointer h-14 border-2 border-gray-300 rounded-lg"><label htmlFor="cash" tw="font-bold"><input tw="accent-darkOrange ml-4 mr-4" id="cash" type="radio" checked={info.payment === 'cash'} value="cash" onChange={handleRadioChange} name="payment" /> Cash on Delivery</label></div>
                            <div tw="flex flex-col tablet:col-start-1 tablet:row-start-3">
                                <label htmlFor="eMoney" tw="text-xs mb-2 font-bold">e-Money Number</label>
                                <input type="text" tw="h-[56px] border-[2px] border-gray-300 hover:border-darkOrange focus:outline-none focus:border-none focus:ring-darkOrange focus:ring-2 rounded-lg pl-6 text-sm" name="eMoney" value={info.eMoney} onChange={handleChange} placeholder="238521993" disabled={info.payment === 'cash'} required={info.payment === 'eMoney'}></input>
                            </div>
                            <div tw="flex flex-col tablet:col-start-2 tablet:row-start-3">
                                <label htmlFor="eMoneyPin" tw="text-xs mb-2 font-bold">e-Money Pin</label>
                                <input type="text" tw="h-[56px] border-[2px] border-gray-300 hover:border-darkOrange focus:outline-none focus:border-none focus:ring-darkOrange focus:ring-2 rounded-lg pl-6 text-sm" name="eMoneyPin" value={info.eMoneyPin} onChange={handleChange} placeholder="6891" disabled={info.payment === 'cash'} required={info.payment === 'eMoney'}></input>
                            </div>
                        </div>
                    </div>
                    <div tw="font-sans flex flex-col justify-between">
                        <div tw="flex flex-row justify-between mb-8">
                            <span tw="font-bold text-2xl">SUMMARY</span>
                            <span onClick={() => setCart([])} tw="underline text-sm opacity-50 cursor-pointer">Remove all</span>
                        </div>
                        <div tw="flex flex-col gap-y-6 mb-8">
                            {cart.map((product, i) =>
                                <div tw="flex flex-row items-center" key={i}>
                                    <img tw="w-16 h-16 mr-4" src={getImageUrl(product.name)} alt="product image" />
                                    <div tw="flex flex-col font-bold">
                                        <span tw="text-xs">{product.name}</span>
                                        <span tw="text-xs opacity-50">$ {Intl.NumberFormat('en-US').format(product.price)}</span>
                                    </div>
                                    <div tw="text-sm ml-auto opacity-50"><span>x{product.quantity}</span></div>
                                </div>
                            )}
                        </div>
                        <div tw="flex flex-row justify-between mb-6">
                            <span tw="text-sm opacity-50">TOTAL</span>
                            <span tw="font-bold">$ {getTotal(cart)}</span>
                        </div>
                        <div tw="flex flex-row justify-between mb-6">
                            <span tw="text-sm opacity-50">SHIPPING</span>
                            <span tw="font-bold">$ 50</span>
                        </div>
                        <div tw="flex flex-row justify-between mb-6">
                            <span tw="text-sm opacity-50">GRAND TOTAL</span>
                            <span tw="font-bold">$ {getGrandTotal(cart)}</span>
                        </div>
                    </div>
                    <Button type="submit" tw="font-sans font-bold text-sm text-white h-12 w-full" disabled={cart.length === 0}>CONTINUE & PAY</Button>
                </form>
                <Footer />
            </Container>
        </div >
    );
};

export default checkout;