import Link from "next/link";
import tw, { styled } from 'twin.macro';
import Arrow from '../../public/assets/shared/desktop/icon-arrow-right.svg';

export const Browse = () => {
  return (
    <div tw="flex flex-col tablet:flex-row place-content-center pt-10 gap-x-4 laptop:gap-x-8">
      <Link href="/headphones">
        <div tw="flex flex-col mb-4">
          <img tw="self-center" src="/assets/shared/desktop/image-category-thumbnail-headphones.png" srcSet="/assets/shared/desktop/image-category-thumbnail-headphones-mobile.png 400w, /assets/shared/desktop/image-category-thumbnail-headphones.png 400w" sizes="(max-width: 1439px) 200px, 400px" />
          <div tw="flex flex-col h-40 w-80 tablet:w-48 tablet:h-40 laptop:h-52 laptop:w-[350px] relative bg-darkGray top-[-90px] tablet:top-[-90px] laptop:top-[-155px] desktop:top-[-160px] z-[-10] self-center rounded-lg pt-20 laptop:pt-32 text-center font-sans font-bold">
            <span>HEADPHONES</span>
            <div tw="flex flex-row items-center justify-center">
              <span tw="opacity-50 mr-2">SHOP</span>
              <Arrow />
            </div>
          </div>
        </div>
      </Link>
      <Link href="/speakers">
        <div tw="flex flex-col">
          <img tw="self-center" src="/assets/shared/desktop/image-category-thumbnail-speakers.png" srcSet="/assets/shared/desktop/image-category-thumbnail-speakers-mobile.png 400w, /assets/shared/desktop/image-category-thumbnail-speakers.png, 400w" sizes="(max-width: 1439px) 200px, 400px" />
          <div tw="flex flex-col h-40 w-80 tablet:w-48 tablet:h-40 laptop:h-52 laptop:w-[350px] relative bg-darkGray top-[-80px] tablet:top-[-86px] laptop:top-[-145px] desktop:top-[-151px] z-[-10] self-center rounded-lg pt-20 laptop:pt-32 text-center font-sans font-bold">
            <span>SPEAKERS</span>
            <div tw="flex flex-row items-center justify-center">
              <span tw="opacity-50 mr-2">SHOP</span>
              <Arrow />
            </div>
          </div>
        </div>
      </Link>
      <Link href="earphones">
        <div tw="flex flex-col">
          <img tw="self-center" src="/assets/shared/desktop/image-category-thumbnail-earphones.png" srcSet="/assets/shared/desktop/image-category-thumbnail-earphones.png 400w, /assets/shared/desktop/image-category-thumbnail-earphones.png, 400w" sizes="(max-width: 1439px) 150px, 300px" />
          <div tw="flex flex-col h-40 w-80 tablet:w-48 tablet:h-40 laptop:h-52 laptop:w-[350px] relative bg-darkGray top-[-90px] tablet:top-[-96px] laptop:top-[-165px] desktop:top-[-171px] z-[-10] self-center rounded-lg pt-20 laptop:pt-32 text-center font-sans font-bold">
            <span>EARPHONES</span>
            <div tw="flex flex-row items-center justify-center">
              <span tw="opacity-50 mr-2">SHOP</span>
              <Arrow />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
