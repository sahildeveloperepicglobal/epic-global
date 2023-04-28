/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/home.module.scss";

const CaseStudy = () => {
  return (
    <>
      <section>
        <div className="containers">
          <div className={styles.casestudy}>
            <div className={styles.casediv}>
              <h2> Case Study </h2>
              <h1> Trade India</h1>
              <h3>SEO Company & CRO Optimisation</h3>
              <a>FIND OUT MORE</a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                rerum in nulla velit quos dolores cupiditate nesciunt placeat
                similique repellat reprehenderit illo, itaque ut repudiandae
                esse soluta iure sequi quibusdam.
              </p>
            </div>
            <div className={styles.virtual}>
              <img src="/Images/tradeIndia.png" alt="" />
            </div>
          </div>
          <div className={styles.casestudy}>
            <div className={styles.casediv}>
              <h2> Case Study </h2>
              <h1> BEDS DIVAN</h1>
              <h3>SEO Company & CRO Optimisation</h3>
              <a>FIND OUT MORE</a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                rerum in nulla velit quos dolores cupiditate nesciunt placeat
                similique repellat reprehenderit illo, itaque ut repudiandae
                esse soluta iure sequi quibusdam.
              </p>
            </div>
            <div className={styles.virtual}>
              <img src="/Images/bedsdivan.png" alt="" />
            </div>
          </div>
          <div className={styles.casestudy}>
            <div className={styles.casediv}>
              <h2> Case Study </h2>
              <h1> UNITED SHOP FRONT</h1>
              <h3>SEO Company & CRO Optimisation</h3>
              <a>FIND OUT MORE</a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                rerum in nulla velit quos dolores cupiditate nesciunt placeat
                similique repellat reprehenderit illo, itaque ut repudiandae
                esse soluta iure sequi quibusdam.
              </p>
            </div>
            <div className={styles.virtual}>
              <img src="/Images/united shop.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CaseStudy;
