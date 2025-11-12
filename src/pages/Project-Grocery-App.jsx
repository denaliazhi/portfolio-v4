import PageTemplate from "../components/Page-Template";
import ProjectHeader from "../components/Project-Header";
import Carousel from "../components/Carousel";
import { projects } from "../data/projects-data";

export default function GroceryApp() {
  return (
    <PageTemplate className="project-page">
      <article>
        <ProjectHeader
          {...projects.groceryShop}
        />
        <Carousel
          images={
            projects.groceryShop.images_featured
          }
        ></Carousel>
      </article>
    </PageTemplate>
  );
}
