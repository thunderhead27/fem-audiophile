import tw from 'twin.macro';

export const Yx1 = () => {
    return (
        <div tw="flex flex-col tablet:flex-row gap-y-6 tablet:gap-x-[11px] laptop:gap-x-[30px]">
            <div tw="h-[200px] w-[327px] bg-[url('/assets/home/mobile/image-earphones-yx1.jpg')] tablet:w-[339px] tablet:h-[320px] bg-[url('/assets/home/tablet/image-earphones-yx1.jpg')] laptop:w-[540px] laptop:h-[320px] laptop:bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')] bg-cover bg-no-repeat bg-center rounded-lg"></div>
            <div tw="bg-darkGray h-[200px] w-[327px] tablet:w-[339px] tablet:h-[320px] laptop:w-[540px] laptop:h-[320px] rounded-lg">
                <div tw="flex flex-col pt-10 pl-6 tablet:pt-[100px] tablet:pl-10 laptop:pl-[95px]">
                    <span tw="font-sans font-bold text-3xl mb-8">YX1 EARPHONES</span>
                    <button tw="border border-2 border-black w-40 h-12 font-sans font-bold text-sm">SEE PRODUCT</button>
                </div>
            </div>
        </div>
    );
};
