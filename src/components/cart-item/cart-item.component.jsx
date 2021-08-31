import React from 'react';
import { CartItemContainer, NameContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <span className='price'>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;