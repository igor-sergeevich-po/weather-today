import React from 'react'
import { GlobalSvgSelector } from '../../assets/images/icons/global/GlobalSvgSelector'
import Select from 'react-select'
import s from './Header.module.scss'

interface Props {}

export const Header = (props: Props) => {
  const options = [
    {value: 'chocolate', label: 'Chocolate' },
    {value: 'strawberry', label: 'Strawberry' },
    {value: 'vanilla', label: 'Vanilla' },
  ]
  return (
    <header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}><GlobalSvgSelector id="header-logo"/></div>
            <div className={s.title}>Weather Today</div>
        </div>
        <div className={s.wrapper}>
            <div className={s.change_theme}></div>
            <GlobalSvgSelector id="change-theme"/>
            <Select options={options} />
        </div>
    </header>
  )
}