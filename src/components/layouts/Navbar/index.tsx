import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./navbar.module.css";

const Navbar = () => {
    const { data }: any = useSession();
    return (
        <div className={styles.navbar}>
            <p className="big">Navbar</p>
            <div className="flex gap-2 items-center">
                <p>{data && data.user.fullname}</p>
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
