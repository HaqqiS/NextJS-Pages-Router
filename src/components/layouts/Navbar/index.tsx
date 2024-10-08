import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Script from "next/script";
import Image from "next/image";

const Navbar = () => {
    const { data }: any = useSession();
    return (
        <div className={styles.navbar}>
            <p className="big" id="title">
                Navbar
            </p>
            <Script
                id="script-title"
                strategy="lazyOnload"
            >{`document.getElementById('title').innerHTML = "Navbar"`}</Script>
            <div className="flex gap-2 items-center">
                <p>{data && data.user.fullname}</p>
                <div>
                    {data?.user?.image && (
                        <Image
                            width={40}
                            height={40}
                            className={styles.avatar}
                            src={data.user.image}
                            alt={data.user.fullname}
                        />
                    )}
                </div>
                {data ? (
                    <button
                        className="btn rounded-lg bg-gray-900 py-2 px-4 text-white"
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </button>
                ) : (
                    <button
                        className="btn rounded-lg bg-gray-900 py-2 px-4 text-white"
                        onClick={() => signIn()}
                    >
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
