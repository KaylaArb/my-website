import { useRef, useEffect, useState } from "react";
import styles from '../styles/SectionTitle.module.css';

export default function Title({ title }) {
    // const [show, setShow] = useState(false)

    // useEffect(() => {
    //     setTimeout(function () {
    //         setShow(true)
    //     }, 5000)
    // })

    return (
        <div className={styles.about}>
            <div className={styles.about__header}>
                <div className={styles.container}>
                    <h2 className={styles.title}>{title}</h2>
                    <video className={styles.decorativeIcon} autoPlay muted>
                        <source src="/decAnimation.mp4" type="video/mp4" />
                        <img src="/decorativeIcon.svg" />
                    </video>
                </div>

                <hr className={styles.solid} />
            </div>
        </div>
    )
}



