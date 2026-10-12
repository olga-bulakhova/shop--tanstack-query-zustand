import { Layout } from "@/layout/layout";
import { ProductsList } from "./ui/products-list/products-list";
import { CategoriesList } from "./ui/categories/categories-list";
import { Banner } from "@/shared/ui/banner";

const ProductsListPage = () => {
  return (
    <Layout sidebarContent={<Banner />}>
      <CategoriesList />
      <ProductsList limit={28} />
    </Layout>
  );
};

export const Component = ProductsListPage;
