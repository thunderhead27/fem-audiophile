import tw from 'twin.macro';
import { Layout } from "../components/Layout";
import Link from 'next/link';

const speakers = () => {
    return (
        <div>
            <Layout>
                <div tw="flex flex-col items-center gap-y-32 laptop:gap-y-40 mb-32">
                    {/* ZX9 SPEAKER */}
                    <div tw="flex flex-col laptop:flex-row items-center laptop:justify-center w-full laptop:gap-x-[125px]">
                        <div tw="h-[352px] w-[327px] tablet:h-[352px] tablet:w-[689px] laptop:h-[560px] laptop:w-[540px] bg-[url('/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg')] tablet:bg-[url('/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg')] laptop:bg-[url('/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg')] bg-cover bg-no-repeat"></div>
                        <div tw="flex flex-col items-center laptop:items-start font-sans mt-8 tablet:mt-[52px] laptop:mt-4">
                            <span tw="tracking-[.5em] text-sm text-darkOrange mb-6 tablet:mb-4">NEW PRODUCT</span>
                            <span tw="text-3xl tablet:text-4xl font-bold">ZX9</span>
                            <span tw="text-3xl tablet:text-4xl font-bold">SPEAKER</span>
                            <span tw="font-medium text-sm opacity-50 w-[327px] tablet:w-[572px] laptop:w-[445px] mt-6 tablet:mt-8 leading-6">Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</span>
                            <Link href="/products/6"><button tw="h-12 w-40 bg-darkOrange text-white font-bold text-sm mt-6 laptop:mt-10">SEE PRODUCT</button></Link>
                        </div>
                    </div>

                    {/* ZX7 SPEAKER */}
                    <div tw="flex flex-col laptop:flex-row-reverse items-center laptop:justify-center w-full laptop:gap-x-[125px]">
                        <div tw="h-[352px] w-[327px] tablet:h-[352px] tablet:w-[689px] laptop:h-[560px] laptop:w-[540px] bg-[url('/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg')] tablet:bg-[url('/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg')] laptop:bg-[url('/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg')] bg-cover bg-no-repeat"></div>
                        <div tw="flex flex-col items-center laptop:items-start font-sans mt-8 tablet:mt-[52px] laptop:mt-4">
                            <span tw="tracking-[.5em] text-sm text-darkOrange mb-6 tablet:mb-4">NEW PRODUCT</span>
                            <span tw="text-3xl tablet:text-4xl font-bold">ZX7</span>
                            <span tw="text-3xl tablet:text-4xl font-bold">SPEAKER</span>
                            <span tw="font-medium text-sm opacity-50 w-[327px] tablet:w-[572px] laptop:w-[445px] mt-6 tablet:mt-8 leading-6">Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</span>
                            <Link href="/products/5"><button tw="h-12 w-40 bg-darkOrange text-white font-bold text-sm mt-6 laptop:mt-10">SEE PRODUCT</button></Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default speakers;