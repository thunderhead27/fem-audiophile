import Link from "next/link";
import tw, { styled } from 'twin.macro';
import Arrow from '../../public/assets/shared/desktop/icon-arrow-right.svg';

export const Browse = () => {
  return (
    <div tw="flex flex-col tablet:flex-row gap-y-16 tablet:gap-x-8 pt-36 my-[120px] laptop:my-[160px]">
      <Link href="/headphones">
        <div tw="flex flex-col mb-4">
          <div tw="flex flex-col h-40 w-80 tablet:w-48 tablet:h-40 laptop:h-52 laptop:w-[350px] bg-darkGray rounded-lg pt-20 laptop:pt-32 text-center font-sans font-bold">
            <div tw="flex flex-col relative top-[-150px] laptop:top-[-260px]">
              <img tw="self-center relative" src="/assets/shared/desktop/image-category-thumbnail-headphones.png" srcSet="/assets/shared/desktop/image-category-thumbnail-headphones-mobile.png 400w, /assets/shared/desktop/image-category-thumbnail-headphones.png 400w" sizes="(max-width: 1439px) 200px, 400px" />
              <span>HEADPHONES</span>
              <div tw="flex flex-row items-center justify-center">
                <span tw="opacity-50 mr-2">SHOP</span>
                <Arrow />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/speakers">
        <div tw="flex flex-col">
          <div tw="flex flex-col h-40 w-80 tablet:w-48 tablet:h-40 laptop:h-52 laptop:w-[350px] bg-darkGray z-[-10] self-center rounded-lg pt-20 laptop:pt-32 text-center font-sans font-bold">
            <div tw="flex flex-col relative top-[-140px] laptop:top-[-250px]">
              <img tw="self-center relative" src="/assets/shared/desktop/image-category-thumbnail-speakers.png" srcSet="/assets/shared/desktop/image-category-thumbnail-speakers-mobile.png 400w, /assets/shared/desktop/image-category-thumbnail-speakers.png, 400w" sizes="(max-width: 1439px) 200px, 400px" />
              <span>SPEAKERS</span>
              <div tw="flex flex-row items-center justify-center">
                <span tw="opacity-50 mr-2">SHOP</span>
                <Arrow />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link href="earphones">
        <div tw="flex flex-col">
          <div tw="flex flex-col h-40 w-80 tablet:w-48 tablet:h-40 laptop:h-52 laptop:w-[350px] bg-darkGray z-[-10] self-center rounded-lg pt-20 laptop:pt-32 text-center font-sans font-bold">
            <div tw="flex flex-col relative top-[-130px] laptop:top-[-230px]">
              <img tw="self-center relative" src="/assets/shared/desktop/image-category-thumbnail-earphones.png" srcSet="assets/shared/desktop/image-category-thumbnail-earphones-mobile.png 400w, /assets/shared/desktop/image-category-thumbnail-earphones.png, 400w" sizes="(max-width: 1439px) 200px, 400px" />
              <span>EARPHONES</span>
              <div tw="flex flex-row items-center justify-center">
                <span tw="opacity-50 mr-2">SHOP</span>
                <Arrow />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
