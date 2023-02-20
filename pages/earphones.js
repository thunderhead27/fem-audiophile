import React, { useState } from "react";
import tw from 'twin.macro';
import { Layout } from "./../components/Layout";
import Link from 'next/link';

const earphones = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div>
            <Layout>
                <div tw="flex flex-col items-center gap-y-32 laptop:gap-y-40 mb-32">
                    {/* ZX9 SPEAKER */}
                    <div tw="flex flex-col laptop:flex-row items-center laptop:justify-center w-full laptop:gap-x-[125px]">
                        <div tw="h-[352px] w-[327px] tablet:h-[352px] tablet:w-[689px] laptop:h-[560px] laptop:w-[540px] bg-[url('/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg')] tablet:bg-[url('/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg')] laptop:bg-[url('/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg')] bg-cover bg-no-repeat"></div>
                        <div tw="flex flex-col items-center laptop:items-start font-sans mt-8 tablet:mt-[52px] laptop:mt-4">
                            <span tw="tracking-[.5em] text-sm text-darkOrange mb-6 tablet:mb-4">NEW PRODUCT</span>
                            <span tw="text-3xl tablet:text-4xl font-bold">YX1 WIRELESS</span>
                            <span tw="text-3xl tablet:text-4xl font-bold">EARPHONES</span>
                            <span tw="font-medium text-sm opacity-50 w-[327px] tablet:w-[572px] laptop:w-[445px] mt-6 tablet:mt-8 leading-6">Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</span>
                            <Link href="/products/1"><button tw="h-12 w-40 bg-darkOrange text-white font-bold text-sm mt-6 laptop:mt-10">SEE PRODUCT</button></Link>
                        </div>
                    </div>


                </div>
            </Layout>
        </div>
    );
};

export default earphones;