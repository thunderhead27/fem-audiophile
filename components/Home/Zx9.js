import tw from 'twin.macro';
import Circles from '../../public/assets/home/desktop/pattern-circles.svg';

export const Zx9 = () => {
    return (
        <div tw="h-[600px] w-[327px] tablet:h-[720px] tablet:w-[689px] laptop:w-[1110px] laptop:h-[560px] bg-darkOrange rounded-lg overflow-x-hidden overflow-y-hidden">
            <img src="/assets/home/desktop/image-speaker-zx9.png" srcSet="/assets/home/desktop/image-speaker-zx9.png 918w, /assets/home/tablet/image-speaker-zx9.png 444w, /assets/home/mobile/image-speaker-zx9.png 170w" sizes="(max-width: 767px) 170px, (max-width: 1439px) 200px, 493px" tw="relative z-20 top-[55px] left-[90px] tablet:left-[260px] tablet:top-[57px] laptop:left-[117px] laptop:top-[75px]" />
            <Circles tw="relative top-[-400px] left-[-300px] tablet:top-[-500px] tablet:left-[-140px] laptop:top-[-550px] laptop:left-[-100px] z-10" />
            <div tw="flex flex-col relative bottom-[850px] left-[15px] tablet:bottom-[800px] tablet:left-[200px] laptop:bottom-[1300px] laptop:left-[650px] z-30 w-[300px] text-center laptop:text-start">
                <span tw="text-white font-sans font-bold text-4xl tablet:text-5xl">ZX9</span>
                <span tw="text-white font-sans font-bold text-4xl tablet:text-5xl mb-6">SPEAKER</span>
                <span tw="text-white font-sans font-medium text-sm mb-10">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</span>
                <button tw="bg-black h-12 w-40 text-white font-sans text-sm font-bold self-center laptop:self-start">SEE PRODUCT</button>
            </div>
        </div>
    );
};
