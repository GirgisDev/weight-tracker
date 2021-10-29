import React from 'react';
import style from './SlideFromRightLayout.module.scss'
import closeIconSrc from './../../assets/icons/close-in-circle.svg';

const SlideFromRightLayout = props => {
  const cancel = () => {
    props.cancelFN();
  }
  const getDimensions = () => {
    const { width } = props;
    return {
      width: width || 'auto',
    }
  }
  return (
    <div onClick={props?.clickAwayKeep ? () => false : cancel} className={style.popup}>
      <div 
        style={getDimensions()} 
        onClick={ev => ev.stopPropagation()} className={style.popup__box}>
        <img onClick={cancel} className={style['popup__close-icon']} src={closeIconSrc} alt="close"/>
        {props.children}
      </div>
    </div>
  );
}
 
export default SlideFromRightLayout;