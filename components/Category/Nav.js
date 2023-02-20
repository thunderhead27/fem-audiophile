import tw from 'twin.macro';
import Link from "next/link";
import Image from "next/image";

export const Nav = ({ menu, setMenu, popup, setPopup }) => {
    return (
        <div>
            <div tw="flex flex-row bg-black justify-between items-center h-[90px] pl-6 pr-6 tablet:pl-10 tablet:pr-10 laptop:pl-[165px] laptop:pr-[165px] tablet:w-full">
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
        </div>
    );
};
