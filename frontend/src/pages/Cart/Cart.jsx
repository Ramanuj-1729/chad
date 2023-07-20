import { useState } from "react";
import { ArrowRightOnRectangleIcon, ArrowSmallLeftIcon, MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import CartItem from "../../components/shared/CartItem/CartItem";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import ProductTable from "../../components/shared/ProductTable/ProductTable";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);

    const handleQty = (type) => {
        if (type === 'increment') {
            setQty(prevQty => prevQty + 1);
        } else {
            if (qty >= 2) {
                setQty(prevQty => prevQty - 1);
            }
        }
    }
    return (
        <>
            <div className='mt-5'>
                <Breadcrumb currPage="Cart" />
            </div>

            <div className="mx-12 mt-12 mb-40">
                <div className="mb-12">
                    <h1 className="font-medium text-5xl text-fadeFont">Shopping Cart</h1>
                </div>

                <div>
                    <ProductTable
                        columnName={
                            <>
                                <th className="ml-4">Quantity</th>
                                <th>Subtotal</th>
                            </>
                        }

                        row={
                            <CartItem>
                                <td className="flex items-center border-[1px] border-gray rounded-full space-x-5 p-2">
                                    <MinusSmallIcon onClick={() => handleQty('decrement')} className="w-6 h-6 cursor-pointer" />
                                    <span className="font-medium text-lg">{qty}</span>
                                    <PlusSmallIcon onClick={() => handleQty('increment')} className="w-6 h-6 cursor-pointer" />
                                </td>
                                <td className="font-medium text-red">$499.99</td>
                            </CartItem>
                        }
                    />

                    <div className="mt-5">
                        <h4 className="font-medium text-xl">Order Summary</h4>

                        <div className="flex items-center justify-between w-full my-10">
                            <div className="space-x-44 border-[1px] border-gray px-5 rounded py-3">
                                <span>Discount</span>
                                <span>$0.00</span>
                            </div>
                            <div className="space-x-44 border-[1px] border-gray px-5 rounded py-3">
                                <span>Delivery</span>
                                <span>$0.00</span>
                            </div>
                            <div className="space-x-44 border-[1px] border-gray px-5 rounded py-3">
                                <span>Subtotal</span>
                                <span>$0.00</span>
                            </div>
                            <div className="space-x-44 border-[1px] border-gray px-5 rounded py-3 font-semibold ">
                                <span>Total</span>
                                <span>$0.00</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <input className="border-2 border-gray px-4 py-3 rounded-l w-72" type="text" placeholder="Please enter coupon code" />
                                <button className="bg-buttonColor px-4 py-3 text-white border-2 border-buttonColor rounded-r">Apply coupon code</button>
                            </div>
                            <div className="flex items-center space-x-5">
                                <button onClick={() => navigate('/')} className="flex items-center justify-center border-2 border-gray w-72 py-3 rounded">
                                    <ArrowSmallLeftIcon className="w-4 h-4 inline mr-2" />
                                    <span>Continue Shopping</span>
                                </button>
                                <button className="flex items-center justify-center border-2 border-buttonColor w-72 py-3 rounded text-white bg-buttonColor">
                                    <span>Checkout</span>
                                    <ArrowRightOnRectangleIcon className="w-4 h-4 inline ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;