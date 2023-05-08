/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Breadcumb from "../component/Breadcumb";
import React, { useCallback, useState } from "react";
import styles from "@/styles/project.module.scss";

const ProjectManagement = () => {

  const [read,setRead]=React.useState("Readmore");

  const cliked=React.useCallback(()=>{
  if(read==="Readmore"){
    setRead("Readless");
  }
  if(read==="Readless"){
    setRead("Readmore");
  }
},[read]);


  return (
    <>
      <div>
        <Breadcumb
          content={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in consequuntur`}
          heading="Project Management"
        />
      </div>
      <div className="continers">
        <div className={styles.manag}>
          <div className={styles.imag}>
            <img src="/Images/Screenshot 2023-05-04 113747.png" />
          </div>
          <div className={styles.project}>
            <h2>Project Management</h2>
            <p>
              Epic Global is an international consulting and project management
              firm that offers a wide range of services designed to help clients
              achieve their project goals. With offices in the Canada, UAE,
              India and the United Kingdom, <span>{read==="Readless" && <span>Epic Global is a full-service firm
              that specializes in project management, program management, change
              management, and organizational development. Our team of
              experienced professionals provides the industry's most
              comprehensive and effective project management services.</span>} <a onClick={cliked}>{read}</a></span>
              </p>
          </div>
         
        <section>
          <div className={styles.picmain}>
            <div className={styles.photodiv}>
              <img
                src="/bussinessimage/filler2-1-1.jpg"/>
            </div>
            <div className={styles.cont11div}>
              <h2>
                Building Successful Projects Through Effective Communication,
                Collaboration, and Trust.
              </h2>
              <p>
                At Epic Global, we believe that successful project management is
                built on a foundation of effective communication, collaboration,
                and trust.<span>{read==="Readless" && <span> Our project managers are adept at facilitating
                conversations and negotiating agreements that ensure everyone is
                on the same page. We strive to foster a positive working
                environment and a culture of success to ensure projects are
                completed on time and on budget.</span>}<a onClick={cliked}>{read}</a></span>
              </p>
              
            </div>
          </div>
        </section>
        <section>
          <div className={styles.pic1main}>
            <div className={styles.cont12div}>
              <h2>How We Works?</h2>
              <p>
                We understand that every project is unique and requires
                specialized attention. That's why our project managers are
                highly flexible and agile, able to quickly address any potential
                issues and pivot when needed. <span>{read === "Readless" && <span>We also use the latest
                technologies and tools to ensure our clients have access to the
                most up-to-date information and progress.</span>}<a onClick = {cliked}>{read}</a></span>
              </p>
              
            </div>
            <div className={styles.photodiv}>
              <img
                src="/bussinessimage/blog-3-1.jpg"/>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.picmain}>
            <div className={styles.photodiv}>
              <img
                src="/bussinessimage/blog-1-1.jpg"/>
            </div>
            <div className={styles.cont11div}>
              <h2>Commitment Is Everything!</h2>
              <p>
                At Epic Global, we are committed to helping our clients achieve
                success. Our team of experienced professionals is dedicated to
                delivering the highest quality project management services in
                the industry.<span>{read === "Readless" && <span> With our comprehensive approach, we provide the
                best project management services available. Contact us today to
                learn more about how Epic Global can help you reach your project
                goals.</span>}<a onClick = {cliked}>{read}</a></span>
              </p>
              
            </div>
          </div>
        </section>
        <section>
          <div className={styles.pic1main}>
            <div className={styles.cont12div}>
              <h2>Integrated Project Management Approach at Epic Global.</h2>
              <p>
                Epic Global takes an integrated approach to project management
                to ensure our clients get the best results. Our team of
                certified project managers is highly experienced in the full
                range of project management disciplines,<span>{read === "Readless" && <span>  from requirements
                gathering to project planning and execution. We employ a
                comprehensive suite of project management methodologies and
                tools to ensure our clients get maximum value from their
                projects. </span>}<a onClick = {cliked}>{read}</a></span>
              </p>
              
            </div>
            <div className={styles.photodiv}>
              <img
                src="/bussinessimage/gallery-12.jpg"/>
            </div>
          </div>
        </section>
          
        </div>
      </div>
    </>
  );
};

export default ProjectManagement;
