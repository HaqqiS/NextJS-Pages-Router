import Link from "next/link";

const RegisterPage = () => {
    return (
        <div>
            <h1>RegisterPage</h1>
            <p>z
                Sudah punya akun? Login <Link href={"/auth/login"}>disini</Link>
            </p>
        </div>
    );
};

export default RegisterPage;
