import Link from "next/link";
import tw, { styled } from 'twin.macro';
import Image from "next/image";

export const HomeNav = ({ menu, setMenu, popup, setPopup }) => {
  return (
    <div tw="flex flex-col bg-mobileHero tablet:bg-tabletHero laptop:bg-desktopHero h-[40rem] tablet:h-[48rem] desktop:h-screen bg-no-repeat bg-cover">
      <div tw="flex flex-row justify-between items-center h-[90px] pl-6 pr-6 tablet:pl-10 tablet:pr-10 laptop:pl-[165px] laptop:pr-[165px] tablet:w-full">
        <div onClick={() => setMenu(!menu)} tw="flex flex-col gap-y-[3px] laptop:hidden tablet:mr-10 laptop:mr-0">
          <span tw="h-[3px] w-4 bg-white"></span>
          <span tw="h-[3px] w-4 bg-white"></span>
          <span tw="h-[3px] w-4 bg-white"></span>
        </div>
        <Image src="/assets/shared/desktop/logo.svg" priority width={143} height={25} />
        <div tw="flex flex-row justify-between laptop:w-[650px] hidden laptop:flex">
          <Link href="/" tw="font-sans text-white font-bold text-sm tracking-[.25em]">HOME</Link>
          <Link href="/headphones" tw="font-sans text-white font-bold text-sm tracking-[.25em]">HEADPHONES</Link>
          <Link href="/speakers" tw="font-sans text-white font-bold text-sm tracking-[.25em]">SPEAKERS</Link>
          <Link href="/earphones" tw="font-sans text-white font-bold text-sm tracking-[.25em]">EARPHONES</Link>
        </div>
        <Image onClick={() => setPopup(!popup)} src="/assets/shared/desktop/icon-cart.svg" priority width={23} height={20} />
      </div>
      <div tw="tablet:pl-10 tablet:pr-10 laptop:pl-[165px] laptop:pr-[165px]">
        <div tw="border border-gray-700"></div>
      </div>
      <div tw="flex flex-col h-full self-center justify-center laptop:self-start tablet:pl-10 tablet:pr-10 laptop:pl-[165px] laptop:pr-[165px]">
        <span tw="tracking-[.25em] font-sans text-white opacity-50 mb-6 text-center laptop:text-start">NEW PRODUCT</span>
        <span tw="text-white text-5xl font-sans tracking-wider font-bold text-center laptop:text-start">XX99 MARK II</span>
        <span tw="text-white text-5xl font-sans tracking-wider mb-6 font-bold text-center laptop:text-start">HEADPHONES</span>
        <span tw="text-white text-sm opacity-75 font-sans w-[350px] text-center laptop:text-start mb-10">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</span>
        <Link href="/products/4"><button tw="bg-darkOrange font-sans self-center laptop:self-start h-12 w-[160px] text-sm text-white font-bold">SEE PRODUCT</button></Link>
      </div>
    </div>
  );
};
