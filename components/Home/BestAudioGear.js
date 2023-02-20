import tw from 'twin.macro';

export const BestAudioGear = () => {
    return (
        <div tw="flex flex-col laptop:flex-row-reverse laptop:pb-[200px] items-center laptop:justify-center">
            <div tw="w-[327px] h-[300px] bg-[url('/assets/shared/mobile/image-best-gear.jpg')] tablet:w-[689px] bg-[url('/assets/shared/tablet/image-best-gear.jpg')] laptop:w-[540px] laptop:h-[588px] laptop:bg-[url('/assets/shared/desktop/image-best-gear.jpg')] bg-center bg-cover bg-no-repeat rounded-lg mb-10"></div>
            <div tw="flex flex-col w-[327px] tablet:w-[689px] laptop:h-[295px] laptop:w-[460px] laptop:pr-[125px] laptop:self-center">
                <span tw="font-sans font-bold text-3xl tablet:text-4xl text-center laptop:text-start mb-8">BRINGING YOU THE <span tw="text-darkOrange">BEST</span> AUDIO GEAR</span>
                <span tw="font-sans text-sm font-medium text-center laptop:text-start opacity-50 pb-[120px] tablet:pb-24 leading-6">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</span>
            </div>
        </div>
    );
};
