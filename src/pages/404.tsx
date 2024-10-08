import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
    return (
        <div className={styles.error}>
            {/* <img src="/page_404.png" alt="404" className={styles.error__image} /> */}
            <Image src="/page_404.png" alt="404" width={500} height={500} className={styles.error__image} />
            <h1>Halaman Tidak Ditemukan</h1>
        </div>
    );
};
export default Custom404;
