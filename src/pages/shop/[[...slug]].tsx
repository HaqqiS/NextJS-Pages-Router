import { useRouter } from "next/router";
function ShopPage() {
    const { query } = useRouter();
    console.log(query);

    return (
        <div>
            <h1>Shop Page</h1>
            <p>
                shop : {query.slug && query.slug[0]} - {query.slug && query.slug[1]}
                <br />
                shop : {`${query.slug ? query.slug[0] + " - " + query.slug[1] : ""} `}
            </p>
        </div>
    );
}

export default ShopPage;
