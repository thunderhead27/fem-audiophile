import React, { useState } from 'react';
import Head from "next/head";
import { ProductsLayout } from "../../components/ProductsLayout";
import tw from 'twin.macro';
import data from '../../utils/data/data.json';
import Link from "next/link";
import { useCartContext } from "../../context/cart";
import { useRouter } from "next/router";

export default function Product({ productInfo }) {
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useCartContext();
    const [popup, setPopup] = useState(false);

    const addToCart = (name, price, quantity) => {
        setCart([...cart, {
            name,
            price,
            quantity
        }]);
    };

    const router = useRouter();

    const getProductId = (productSlug) => {
        return data.find(product => (productSlug === product.slug));
    };

    return (
        <>
            <Head>
                <title>{productInfo.name}</title>
            </Head>
            <ProductsLayout popup={popup} setPopup={setPopup}>
                <div tw="flex flex-col w-[327px] tablet:w-[690px] laptop:w-[1110px] justify-center">
                    <button tw="self-start font-sans text-sm opacity-50 font-medium mb-6 laptop:mb-14 mt-4 tablet:mt-8 laptop:mt-20" onClick={() => router.back()}>Go Back</button>
                    <div tw="flex flex-col tablet:flex-row gap-y-8 tablet:gap-x-[69px] laptop:gap-x-[125px] tablet:items-center mb-20 tablet:mb-32 laptop:mb-40">
                        <img tw="tablet:w-[280px] laptop:w-[540px]" src={productInfo.image.desktop} srcSet={`${productInfo.image.desktop} 540w, ${productInfo.image.tablet} 280w, ${productInfo.image.mobile} 327w`} sizes="(max-width: 767px) 327px, (max-width: 1439px) 100px, 540px" />
                        <div tw="flex flex-col font-sans">
                            {productInfo.new && <span tw="tracking-[.5em] text-sm text-darkOrange mb-6 tablet:mb-4">NEW PRODUCT</span>}
                            <span tw="w-[300px] text-3xl laptop:text-4xl font-bold uppercase mb-6 tablet:mb-8">{productInfo.name}</span>
                            <span tw="font-medium tablet:w-[340px] laptop:w-[445px] text-sm opacity-50 mb-6 tablet:mb-8 leading-6">{productInfo.description}</span>
                            <span tw="text-sm font-bold mb-8 laptop:mb-12">{`$ ${Intl.NumberFormat('en-US').format(productInfo.price)}`}</span>
                            <div tw="flex flex-row gap-x-4">
                                <div tw="flex flex-row place-content-center bg-darkGray h-12">
                                    <button onClick={() => setQuantity(quantity - 1)} tw="w-10 font-bold opacity-25" disabled={quantity === 1}>-</button>
                                    <span tw="w-10 font-bold text-center self-center">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} tw="w-10 font-bold opacity-25">+</button>
                                </div>
                                <button onClick={() => { addToCart(productInfo.name, productInfo.price, quantity); setPopup(true); }} tw="font-bold text-sm text-white bg-darkOrange w-40">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    {/* Features and In The Box */}
                    <div tw="flex flex-col laptop:flex-row laptop:gap-x-[125px] font-sans mb-20 tablet:mb-32 laptop:mb-40">
                        <div tw="flex flex-col mb-20 tablet:mb-32 laptop:mb-0 laptop:w-[635px]">
                            <span tw="font-bold text-2xl tablet:text-3xl mb-6 tablet:mb-8">FEATURES</span>
                            <span tw="font-medium text-sm opacity-50 leading-6">{productInfo.features}</span>
                        </div>
                        <div tw="flex flex-col tablet:flex-row laptop:flex-col">
                            <span tw="font-bold text-2xl tablet:text-3xl mb-6 tablet:mb-8 tablet:mr-40">IN THE BOX</span>
                            <div tw="flex flex-col">
                                {productInfo.includes.map((include, i) => (
                                    <div tw="text-sm" key={i}>
                                        <span tw="font-bold mr-6 text-darkOrange">{include.quantity}x</span>
                                        <span tw="font-medium opacity-50">{include.item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Product Gallery */}
                    <div tw="flex flex-col gap-y-5 tablet:grid tablet:grid-rows-[174px_174px] tablet:grid-cols-[277px_395px] laptop:grid-rows-[280px_280px] laptop:grid-cols-[445px_635px] tablet:gap-x-[18px] tablet:gap-y-[20px] laptop:gap-x-[30px] laptop:gap-y-8 mb-32 laptop:mb-40">
                        <img tw="tablet:col-span-1 rounded-xl" src={productInfo.gallery.first.desktop} srcSet={`${productInfo.gallery.first.desktop} 540w, ${productInfo.gallery.first.tablet} 280w, ${productInfo.gallery.first.mobile} 327w`} sizes="(max-width: 767px) 327px, (max-width: 1439px) 445px, 540px" />
                        <img tw="tablet:row-start-2 rounded-xl" src={productInfo.gallery.second.desktop} srcSet={`${productInfo.gallery.second.desktop} 540w, ${productInfo.gallery.second.tablet} 280w, ${productInfo.gallery.first.mobile} 327w`} sizes="(max-width: 767px) 327px, (max-width: 1439px) 445px, 540px" />
                        <img tw="tablet:col-start-2 tablet:row-span-2 rounded-xl" src={productInfo.gallery.third.desktop} srcSet={`${productInfo.gallery.third.desktop} 540w, ${productInfo.gallery.third.tablet} 400w, ${productInfo.gallery.first.mobile} 327w`} sizes="(max-width: 767px) 327px, (max-width: 1439px) 400px, 540px" />
                    </div>
                    {/* You may also like */}
                    <div tw="font-sans mb-32 laptop:mb-40">
                        <span tw="font-bold text-2xl tablet:text-3xl mb-6 tablet:mb-8 tablet:mr-40">YOU MAY ALSO LIKE</span>
                        <div tw="flex flex-col tablet:flex-row gap-y-16 tablet:gap-x-3 laptop:gap-x-8">
                            {productInfo.others.map((product, i) => (
                                <div tw="flex flex-col items-center gap-y-8" key={i}>
                                    <img tw="rounded-xl w-[327px] tablet:w-[223px] laptop:w-[350px]" src={product.image.desktop} srcSet={`${product.image.desktop} 350w, ${product.image.tablet} 223w, ${product.image.mobile} 327w`} sizes="(max-width: 767px) 350px, (max-width: 1439px) 100px, 327px" />
                                    <span tw="font-bold text-2xl uppercase">{product.name}</span>
                                    <Link href={`/products/${getProductId(product.slug).id}`}><button tw="font-bold text-sm text-white bg-darkOrange w-40 h-12">SEE PRODUCT</button></Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ProductsLayout>
        </>
    );
}

export async function getStaticPaths() {
    const ids = data.map(product => product.id);

    const paths = ids.map((id) => ({
        params: { id: id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const productInfo = data.find(product => product.id == context.params.id);

    return {
        props: {
            productInfo
        }
    };
}