import React from 'react';
import style from './SlideFromRightLayout.module.scss'
import closeIconSrc from './../../assets/icons/close-in-circle.svg';

const SlideFromRightLayout = props => {
  const { clickAwayKeep, cancelFN } = props;
  const getDimensions = () => {
    const { width } = props;
    return {
      width: width || 'auto',
    }
  }
  return (
    <div onClick={clickAwayKeep ? () => false : cancelFN} className={style.popup}>
      <div 
        style={getDimensions()} 
        onClick={ev => ev.stopPropagation()} className={style.popup__box}>
        <img onClick={cancelFN} className={style['popup__close-icon']} src={closeIconSrc} alt="close"/>
        {props.children}
      </div>
    </div>
  );
}
 
export default SlideFromRightLayout;