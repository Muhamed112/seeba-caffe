import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getMenuData_One, getMenuData_Two, getEvents_One, getEvents_Two } from "../utils/services";

export default function Home(menus, events) {
  console.log(menus);
  console.log(events)

  return (
    <div className={styles.container}>
      
    </div>
  )
}

export async function getStaticProps(ctx) {
  const menuOne = await getMenuData_One(ctx);
  const menuTwo = await getMenuData_Two(ctx);
  const eventsOne = await getEvents_One(ctx);
  const eventsTwo = await getEvents_Two(ctx);

  const menus = {
    menuOne: [...menuOne],
    menuTwo: [...menuTwo]
  }

  const events = {
    eventsOne: [...eventsOne],
    eventsTwo: [...eventsTwo]
  };

  return {
    props: {
      menus,
      events
    }
  }
};
