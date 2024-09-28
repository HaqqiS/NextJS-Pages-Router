import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
    const { push } = useRouter();
    const handleLogin = () => {
        push("/product");
    };
    return (
        <div className={styles.login}>
            <h1 className="text-3xl text-white">LoginViews</h1>
            <button
                onClick={() => {
                    handleLogin();
                }}
            >
                Login
            </button>
            <p
                style={{
                    color: "blue",
                    border: "1px solid blue",
                    padding: "1rem",
                    borderRadius: "5px",
                }}
            >
                Belum punya akun? Registrasi <Link href={"/auth/register"}>disini</Link>
            </p>
        </div>
    );
};
export default LoginViews;
