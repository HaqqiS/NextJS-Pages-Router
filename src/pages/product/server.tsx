import ProductView from "@/views/Product";
import { ProductType } from "@/types/product.type";

const ProductPage = (props: { products: ProductType[] }) => {
    const { products } = props;

    return (
        <div>
            <ProductView products={products} />
        </div>
    );
};

export default ProductPage;

//dipanggil saat melakukan request
export async function getServerSideProps() {
    //fetch data
    const res = await fetch("http://localhost:3000/api/product");
    const reponse = await res.json();
    console.log(reponse);
    return {
        props: {
            products: reponse.data,
        },
    };
}
