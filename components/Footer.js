import tw from 'twin.macro';
import Logo from '../public/assets/shared/desktop/logo.svg';
import Facebook from '../public/assets/shared/desktop/icon-facebook.svg';
import Twitter from '../public/assets/shared/desktop/icon-twitter.svg';
import Instagram from '../public/assets/shared/desktop/icon-instagram.svg';
import Link from 'next/link';

export const Footer = () => {
    return (
        <div tw="grid grid-cols-1 grid-rows-5 tablet:grid-cols-2 tablet:grid-rows-[100px_25px_auto_auto] tablet:pl-20 tablet:pr-20 laptop:pl-[165px] laptop:pr-[165px] laptop:grid-rows-[100px_auto_auto] bg-black h-[654px] tablet:h-[400px]">
            <Logo tw="mt-[52px] mb-12 tablet:mt-[60px] justify-self-center tablet:justify-self-start laptop:col-span-1" />
            <div tw="flex flex-col tablet:flex-row text-center tablet:text-start tablet:mt-4 tablet:row-start-2 laptop:row-start-1 laptop:col-start-2 laptop:mt-16 laptop:justify-self-end tablet:gap-x-[34px] gap-y-4">
                <Link href="/" tw="font-sans text-white font-bold text-sm tracking-[.25em]">HOME</Link>
                <Link href="/headphones" tw="font-sans text-white font-bold text-sm tracking-[.25em]">HEADPHONES</Link>
                <Link href="/speakers" tw="font-sans text-white font-bold text-sm tracking-[.25em]">SPEAKERS</Link>
                <Link href="/earphones" tw="font-sans text-white font-bold text-sm tracking-[.25em]">EARPHONES</Link>
            </div>
            <span tw="font-sans font-medium text-sm text-white opacity-50 text-center tablet:text-start tablet:col-span-2 tablet:row-start-3 laptop:row-start-2 laptop:col-span-1  pt-12 pl-6 pr-6 tablet:pl-0 tablet:pr-0 leading-6">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</span>
            <span tw="font-sans font-medium text-sm text-white opacity-50 text-center tablet:text-start tablet:row-start-4 pt-12">Copyright 2021. All Rights Reserved</span>
            <div tw="flex flex-row gap-x-4 tablet:row-start-4 justify-center tablet:justify-end tablet:pt-12 laptop:row-start-2 laptop:col-start-2 laptop:self-end">
                <Facebook />
                <Twitter />
                <Instagram />
            </div>
        </div>
    );
};
