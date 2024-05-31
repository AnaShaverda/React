import Icon from "../../../../Components/Icon";
import styles from "./Footer.module.css";
import FooterComponent from "./FooterComponent";
const Footer=()=>{
    return(
        <div className={styles.footerStyles}>
              <div className={styles.footer}>
                 <div className={styles.footerHeading}>
                    <Icon/>
                    <span>© TheXPlace 2021</span>
                 </div>
                
                 <div className={styles.footerFlex}> 
                 <div>
                        <FooterComponent name={"For Talent"}/>
                        <FooterComponent name={"For Talent"}/>
                        <FooterComponent name={"For Talent"}/>
                    </div>
                    <div>
                        <FooterComponent name={"For Talent"}/>
                        <FooterComponent name={"For Talent"}/>
                    </div>
                    <div>
                        <FooterComponent name={"For Talent"}/>
                        <FooterComponent name={"For Talent"}/>
                        <FooterComponent name={"For Talent"}/>
                    </div>
                
                 </div>
        </div>
        </div>
      
    )
}

export default Footer