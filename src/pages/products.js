import React, { Component } from "react"
import Layout from "../components/Layout"
// CSS modules are JS objects, so you can console.log them! Under the hood, it creates hyper-specific classNames for you
import styles from "../components/products.module.css"
console.log(styles)

export default class products extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h1>This is our Product page</h1>
          <p className={styles.text}>
            Lorem Khaled Ipsum is a major key to success. Congratulations, you
            played yourself. In life you have to take the trash out, if you have
            trash in your life, take it out, throw it away, get rid of it, major
            key. Congratulations, you played yourself. Surround yourself with
            angels. The ladies always say Khaled you smell good, I use no
            cologne. Cocoa butter is the key. Celebrate success right, the only
            way, apple. Always remember in the jungle there’s a lot of they in
            there, after you overcome they, you will make it to paradise. We
            don’t see them, we will never see them. I’m up to something. Find
            peace, life is like a water fall, you’ve gotta flow. Bless up. Watch
            your back, but more importantly when you get out the shower, dry
            your back, it’s a cold world out there. Don’t ever play yourself.
            Put it this way, it took me twenty five years to get these plants,
            twenty five years of blood sweat and tears, and I’m never giving up,
            I’m just getting started. I told you all this before, when you have
            a swimming pool, do not use chlorine, use salt water, the healing,
            salt water is the healing. We don’t see them, we will never see
            them.
          </p>
          <p className={styles.text}>
            Don’t ever play yourself. Put it this way, it took me twenty five
            years to get these plants, twenty five years of blood sweat and
            tears, and I’m never giving up, I’m just getting started. I told you
            all this before, when you have a swimming pool, do not use chlorine,
            use salt water, the healing, salt water is the healing. We don’t see
            them, we will never see them.
          </p>
        </div>
      </Layout>
    )
  }
}
