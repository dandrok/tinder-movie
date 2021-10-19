import React from 'react'
import style from './Margins.module.css'

const Margins = (props: any) => {
  return <section className={style.marg}>{props.children}</section>
}

export default Margins
