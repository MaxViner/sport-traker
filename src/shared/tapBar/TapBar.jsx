'use client'
import React from 'react'
import statisiticImg from "../../assets/icons/statistics.svg";
import add from "../../assets/icons/add.png";
import mwk from "../../assets/icons/mwk.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname  } from 'next/navigation'
import styles from './tapBar.module.scss'

export const TapBar=()=> {
    const pathname = usePathname()

  
    return <div className={styles.nav}>
    <ul>
        <li className={`${styles.LinkItem} ${pathname === '/add-workout' ? styles.active : ''}`}>
          <Link href="/add-workout">
            <Image src={add} alt="add" className={styles.icon} />
          </Link>
        </li>

        <li className={`${styles.LinkItem} ${pathname === '/my-workouts' ? styles.active : ''}`}>
          <Link href="/my-workouts"><Image src={mwk} alt="statisiticImg" className={styles.icon}  />
            </Link>
        </li>
        <li className={`${styles.LinkItem} ${pathname === '/my-statistics' ? styles.active : ''}`}>
          <Link href="/my-statistics">
            <Image src={statisiticImg} alt="statisiticImg" className={styles.icon} />
          </Link>
        </li>
      
    </ul>
  </div>
}


