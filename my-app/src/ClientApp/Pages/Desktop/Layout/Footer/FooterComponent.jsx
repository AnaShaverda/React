import styles from "./Footer.module.css"
const FooterComponent =({name})=>{
    return(
        <div>
           <ul className={styles.footerUl}>
           <li>{name}</li>
           </ul>
        </div>
    )
}

export default FooterComponent