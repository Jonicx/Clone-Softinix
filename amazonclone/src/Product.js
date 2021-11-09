import React from 'react'
import "./Product.css"
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        /* {this function is going to help dispatch or 
        push some actions(item) into the dataLayer} */
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>

                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><StarRateIcon/></p>
                    ))}
                </div>
            </div>

            <img 
                src={image}
                alt=""
            />

            <button onClick={addToBasket}>
                Add To Basket
            </button>
        </div>
    )
}

export default Product
