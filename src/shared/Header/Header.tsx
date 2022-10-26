import React from 'react'
import { GlobalSvgSelector } from '../../assets/images/icons/global/GlobalSvgSelector'
import Select from 'react-select'
import s from './Header.module.scss'

interface Props {}

export const Header = (props: Props) => {
  const options = [
    {value: 'city-1', label: 'Rostov-on-Don' },
    {value: 'city-2', label: 'Bataysk' },
    {value: 'city-3', label: 'Aksai' },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '200px',
      height: '45px',
      border: 'none',
      borderRadius: '8px',
      zIndex: 100,
    })
  }
  return (
    <header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}><GlobalSvgSelector id="header-logo"/></div>
            <div className={s.title}>Weather Today</div>
        </div>
        <div className={s.wrapper}>
            <div className={s.change_theme}>
            <GlobalSvgSelector id="change-theme"/>
            
            </div>
            <Select defaultValue={options[0]} styles={colorStyles} options={options} />
        </div>
    </header>
  )
}