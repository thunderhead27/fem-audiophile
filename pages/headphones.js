import Link from "next/link";
import React, { useState } from "react";
import tw from 'twin.macro';
import { Layout } from "../components/Layout";

const headphones = () => {
    return (
        <div>
            <Layout>
                <div tw="flex flex-col items-center gap-y-32 laptop:gap-y-40 mb-32">
                    {/* XX99 MARK II */}
                    <div tw="flex flex-col laptop:flex-row items-center laptop:justify-center w-full laptop:gap-x-[125px]">
                        <div tw="h-[352px] w-[327px] tablet:h-[352px] tablet:w-[689px] laptop:h-[560px] laptop:w-[540px] bg-[url('/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg')] tablet:bg-[url('/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg')] laptop:bg-[url('/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg')] bg-cover bg-no-repeat"></div>
                        <div tw="flex flex-col items-center laptop:items-start font-sans mt-8 tablet:mt-[52px] laptop:mt-4">
                            <span tw="tracking-[.5em] text-sm text-darkOrange mb-6 tablet:mb-4">NEW PRODUCT</span>
                            <span tw="text-3xl tablet:text-4xl font-bold">XX99 MARK II</span>
                            <span tw="text-3xl tablet:text-4xl font-bold">HEADPHONES</span>
                            <span tw="font-medium text-sm opacity-50 w-[327px] tablet:w-[572px] laptop:w-[445px] mt-6 tablet:mt-8 leading-6">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</span>
                            <Link href="/products/4"><button tw="h-12 w-40 bg-darkOrange text-white font-bold text-sm mt-6 laptop:mt-10">SEE PRODUCT</button></Link>
                        </div>
                    </div>

                    {/* XX59 MARK I */}
                    <div tw="flex flex-col laptop:flex-row-reverse items-center laptop:justify-center w-full laptop:gap-x-[125px]">
                        <div tw="h-[352px] w-[327px] tablet:h-[352px] tablet:w-[689px] laptop:h-[560px] laptop:w-[540px] bg-[url('/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg')] tablet:bg-[url('/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg')] laptop:bg-[url('/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg')] bg-cover bg-no-repeat"></div>
                        <div tw="flex flex-col items-center laptop:items-start font-sans mt-8 tablet:mt-[52px] laptop:mt-4">
                            <span tw="text-3xl tablet:text-4xl font-bold">XX99 MARK I</span>
                            <span tw="text-3xl tablet:text-4xl font-bold">HEADPHONES</span>
                            <span tw="font-medium text-sm opacity-50 w-[327px] tablet:w-[572px] laptop:w-[445px] mt-6 tablet:mt-8 leading-6">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</span>
                            <Link href="/products/3"><button tw="h-12 w-40 bg-darkOrange text-white font-bold text-sm mt-6 laptop:mt-10">SEE PRODUCT</button></Link>
                        </div>
                    </div>

                    {/* XX59 HEADPHONES */}
                    <div tw="flex flex-col laptop:flex-row items-center laptop:justify-center w-full laptop:gap-x-[125px]">
                        <div tw="h-[352px] w-[327px] tablet:h-[352px] tablet:w-[689px] laptop:h-[560px] laptop:w-[540px] bg-[url('/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg')] tablet:bg-[url('/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg')] laptop:bg-[url('/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg')] bg-cover bg-no-repeat"></div>
                        <div tw="flex flex-col items-center laptop:items-start font-sans mt-8 tablet:mt-[52px] laptop:mt-4">
                            <span tw="text-3xl tablet:text-4xl font-bold">XX59</span>
                            <span tw="text-3xl tablet:text-4xl font-bold">HEADPHONES</span>
                            <span tw="font-medium text-sm opacity-50 w-[327px] tablet:w-[572px] laptop:w-[445px] mt-6 tablet:mt-8 leading-6">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</span>
                            <Link href="/products/2"><button tw="h-12 w-40 bg-darkOrange text-white font-bold text-sm mt-6 laptop:mt-10">SEE PRODUCT</button></Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default headphones;