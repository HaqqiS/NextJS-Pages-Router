import { fatcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { push } = useRouter();
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, []);

    const { data, error, isLoading } = useSWR("/api/product", fatcher);

    // useEffect(() => {
    //     fetch("/api/product")
    //         .then((res) => res.json())
    //         .then((response) => {
    //             setProducts(response.data);
    //         });
    // }, []);

    console.log(data);

    return (
        <div>
            <ProductView products={isLoading ? [] : data.data} />
        </div>
    );
};

export default ProductPage;
