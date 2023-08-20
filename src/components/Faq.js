import React from 'react'
import { Link } from 'react-router-dom'
import faqForAccount from "../objects/faqs/faqForAccount.json";
import faqForProduct from "../objects/faqs/faqForProduct.json";
import faqForOrder from "../objects/faqs/faqForOrder.json";
import faqForShop from "../objects/faqs/faqForShop.json";

export default function Faq() {
    return (
        <div className='my-2'>
            <nav aria-label="breadcrumb" class="ms-5 mt-5">
                <ol class="breadcrumb ms-3">
                    <li class="breadcrumb-item"><Link to="/home" class="text-decoration-none">Home</Link></li>
                    <li class="breadcrumb-item active" arial-current="page">FAQ'S</li>
                </ol>
            </nav>
            <div class="d-flex">
                <div class="accordion accordion-flush mt-5" id="accordion">
                    <h2 class="ms-3 d-block" style={{ fontSize: "30px" }}>REGISTRATION AND ACCOUNT INFORMATION</h2>
                    <div class="accordion-item w-100 mt-3 ms-3">
                        {
                            faqForAccount.map(faqForAccount => {
                                return (
                                    <>
                                        <div key={faqForAccount.id}>
                                            <h2 className="accordion-header" id={`flush-heading-${faqForAccount.id}-account`}>
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse-${faqForAccount.id}-account`}
                                                    aria-expanded="false"
                                                    aria-controls={`collapse-${faqForAccount.id}-account`}
                                                >
                                                    <h5 className="">{faqForAccount.question}</h5>
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse-${faqForAccount.id}-account`}
                                                className="accordion-collapse collapse"
                                                aria-labelledby={`flush-heading-${faqForAccount.id}-account`}
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">{faqForAccount.ans}</div>
                                            </div>
                                        </div>
                                    </>


                                )
                            })
                        }
                    </div>
                </div>
                <div class="d-block mt-4">

                    <div class="accordion accordion-flush mt-4" id="accordion">
                        <h2 class="ms-5 " style={{ fontSize: "30px" }}>ORDER REPLACEMENT/RETURN</h2>
                        <div class="accordion-item w-100 mt-3 ms-5">
                            {
                                faqForOrder.map(faqForOrder => {
                                    return (
                                        <>
                                            <div key={faqForOrder.id}>
                                                <h2 className="accordion-header" id={`flush-heading-${faqForOrder.id}-order`}>
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse-${faqForOrder.id}-order`}
                                                        aria-expanded="false"
                                                        aria-controls={`collapse-${faqForOrder.id}-order`}
                                                    >
                                                        <h5 className="">{faqForOrder.question}</h5>
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse-${faqForOrder.id}-order`}
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby={`flush-heading-${faqForOrder.id}-order`}
                                                    data-bs-parent="#accordionFlushExample"
                                                >
                                                    <div className="accordion-body">{faqForOrder.ans}</div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div class="accordion accordion-flush mt-2" id="accordion">
                        <h2 class="ms-5 " style={{ fontSize: "30px" }}>PRODUCT INFORMATION</h2>
                        <div class="accordion-item w-100 mt-3 ms-5 ms-3">
                            {
                                faqForProduct.map(faqForProduct => {
                                    return (
                                        <>
                                            <div key={faqForProduct.id}>
                                                <h2 className="accordion-header" id={`flush-heading-${faqForProduct.id}-product`}>
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse-${faqForProduct.id}-product`}
                                                        aria-expanded="false"
                                                        aria-controls={`collapse-${faqForProduct.id}-product`}
                                                    >
                                                        <h5 className="">{faqForProduct.question}</h5>
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse-${faqForProduct.id}-product`}
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby={`flush-heading-${faqForProduct.id}-product`}
                                                    data-bs-parent="#accordionFlushExample"
                                                >
                                                    <div className="accordion-body">{faqForProduct.ans}</div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div class="accordion accordion-flush mt-2" id="accordion">
                        <h2 class="ms-5 " style={{ fontsize: "30px;" }}>SHOPPING</h2>
                        <div class="accordion-item w-100 mt-3 ms-5 ms-3">
                            {
                                faqForShop.map(faqForShop => {
                                    return (
                                        <>
                                            <div key={faqForShop.id}>
                                                <h2 className="accordion-header" id={`flush-heading-${faqForShop.id}-shop`}>
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse-${faqForShop.id}-shop`}
                                                        aria-expanded="false"
                                                        aria-controls={`collapse-${faqForShop.id}-shop`}
                                                    >
                                                        <h5 className="">{faqForShop.question}</h5>
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse-${faqForShop.id}-shop`}
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby={`flush-heading-${faqForShop.id}-shop`}
                                                    data-bs-parent="#accordionFlushExample"
                                                >
                                                    <div className="accordion-body">{faqForShop.ans}</div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
