import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./hero.module.css";

const Hero = () => {
  const [coinPosition, setCoinPosition] = useState<number>(0);

  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY } = window;
    if (pageYOffset <= 1500) {
      setCoinPosition(scrollY / 9);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll, false);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Image src="/images/title.svg" width={591} height={92} />
        <p className={styles.subtitle}>
          Deep dive into the heart of Hatom Protocol
        </p>
      </div>
      <div className={styles.scene}>
        <Image
          src="/images/bg-light.svg"
          layout="responsive"
          width={1512}
          height={1127}
        />
      </div>
      <div className={styles.doctors}>
        <Image
          src="/images/people-light.svg"
          layout="responsive"
          width={1512}
          height={1127}
        />
      </div>
      <div className={styles.over_light}>
        <Image
          src="/images/over-light.svg"
          layout="responsive"
          width={1512}
          height={1127}
        />
      </div>
      <div
        className={styles.coin_container}
        style={{ top: `${65 + coinPosition}%` }}
      >
        <div className={styles.coin}></div>
      </div>
    </div>
  );
};

export default Hero;
