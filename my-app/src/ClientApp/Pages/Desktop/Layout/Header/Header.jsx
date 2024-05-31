import Icon from '../../../../Components/Icon';
import Modal from '../../../../Components/Modal/Modal';
import style from './Header.module.css'
import HeaderButton from './HeaderButtons/HeaderButton';
import HeaderComponents from './HeaderComponents/HeaderComponents';
import React, { useState } from 'react';

const Header=()=>{
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  
    return (
        <>
          <nav className={style.navigation}>
            <ul className={style.headerUl}>
              <Icon/>
              <HeaderComponents name={"About"}/>
              <HeaderComponents name={"For talent"}/>
              <HeaderComponents name={"Find Talent"}/>
              <HeaderComponents name={"Jobs"}/>
              <HeaderButton openModal={openModal} />
             
  
            </ul>
          </nav> 
          
          <Modal isOpen={isModalVisible} closeModal={closeModal} />
        </>
    )
}

export default Header