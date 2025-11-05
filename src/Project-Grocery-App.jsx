import PageTemplate from "./components/Page-Template";
import ProjectHero from "./components/Project-Hero";
import { projects } from "./data/projects-info";

export default function GroceryApp() {
  return (
    <>
      <PageTemplate>
        <ProjectHero {...projects.groceryShop} />
        {/* Project description */}
      </PageTemplate>
    </>
  );
}
