import { Suspense } from "react";
import { Product } from "../../components/product";
import { Review } from "../../components/review";

export default function ProductDetailPage() {
    return (
        <div>
            <h1>Product Detail Page</h1>
            <Suspense fallback={<p>Loading product details...</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading reviews...</p>}>
                <Review />
            </Suspense>
        </div>
    )
}