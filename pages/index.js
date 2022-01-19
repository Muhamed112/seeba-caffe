import DigitalSignages from "../components/DigitalSignages";
import Menu from "../components/Menu";
import SEO from "../components/seo";
import { getMenuData_One, getEvents_One, getEvents_Two,getImages } from "../utils/services";


export default function Home({menus, events, images}) {
  return (
    <div>
      <SEO />
      {/* <DigitalSignages events={events} />  */}
      <Menu menus={menus} />
    </div>
  )
} 

export async function getStaticProps(ctx) {
  const menuOne = await getMenuData_One(ctx);
  const eventsOne = await getEvents_One(ctx);
  const eventsTwo = await getEvents_Two(ctx);
  const imagesArray = await getImages(ctx);

  const menus = {
    menuOne: [...menuOne],
  }

  const images = {
    imagesOne: [...imagesArray],
  }

  const events = {
    eventsOne: [...eventsOne],
    eventsTwo: [...eventsTwo]
  };

  return {
    props: {
      menus,
      events,
      images
    }
  }
};
