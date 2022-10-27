import React from 'react'
import { Card } from './Card'
import { v1 as uuidv1 } from 'uuid';
import s from './Days.module.scss'
import { Tabs } from './Tabs';
interface Props {}

export interface Item {
        day: string,
        day_info: string,
        icon_id: string,
        temp_day: string,
        temp_night: string,
        info: string,
}

export const Days = (props: Props) => {
    const days: Item[] = [{
        day: 'Сегодня',
        day_info: '28 августа',
        icon_id: 'sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
    },
    {
        day: 'Завтра',
        day_info: '28 августа',
        icon_id: 'small_rain_sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
    },
    {
        day: 'Среда',
        day_info: '28 августа',
        icon_id: 'small_rain',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
    },
    {
        day: 'Четверг',
        day_info: '28 августа',
        icon_id: 'mainly_cloudy',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
    },
    {
        day: 'Пятница',
        day_info: '28 августа',
        icon_id: 'sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
    },
    {
        day: 'Пятница',
        day_info: '28 августа',
        icon_id: 'sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
    },
    {
        day: 'Пятница',
        day_info: '28 августа',
        icon_id: 'sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
    }
]
  return (
    <>
    <Tabs/>
    <div className={s.days}>
        {days.map((item: Item) => <Card key={uuidv1()} item={item}/>)}
    </div>
    </>
  )
}