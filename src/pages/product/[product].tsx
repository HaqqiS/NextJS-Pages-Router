import { useRouter } from "next/router";
const DetailProduct = () => {
    const { query } = useRouter();


    return (
        <div>
            <h1>Detail Product</h1>
            <p>Product : {query.product}</p>
        </div>
    )
}

export default DetailProduct;