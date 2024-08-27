import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotal = () => {
    const { cartTotal, shipping, tax, orderTotal } = useSelector((state) => state.cartState);

    return (
        <>
            <h1 className="card bg-base-300">
                <div className="card-body">
                    {/* Subtotal */}
                    <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                        <span>Subtotal</span>
                        <span>{formatPrice(cartTotal)}</span>
                    </p>

                    {/* Shipping */}
                    <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                        <span>Shipping</span>
                        <span>{formatPrice(shipping)}</span>
                    </p>

                    {/* Tax */}
                    <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                        <span>Tax</span>
                        <span>{formatPrice(tax)}</span>
                    </p>

                    {/* Order Total */}
                    <p className="flex justify-between text-sm mt-4 pb-2">
                        <span>Order Total</span>
                        <span>{formatPrice(orderTotal)}</span>
                    </p>
                </div>
            </h1>
        </>
    );
};

export default CartTotal;
