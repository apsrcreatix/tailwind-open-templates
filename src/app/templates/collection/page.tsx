import ProductListInlineQueue from "@/components/(ecommerce)/ProductList/InlineQueue";
import ProductListSimpleGrid from "@/components/(ecommerce)/ProductList/SimpleGrid";
import NavigationWithFeatures from "@/components/(ecommerce)/Navigation/WithFeatures";
import FiltersSidewaysContainer from "@/components/(ecommerce)/Filters/SidewaysContainer";
import { Fragment } from "react";

export default function CollectionPage() {
  return (
    <Fragment>
      <NavigationWithFeatures />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Featured Collection
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Explore curated essentials designed with premium materials.
        </p>
      </div>
      <FiltersSidewaysContainer />
      <ProductListSimpleGrid />
      <ProductListInlineQueue />
    </Fragment>
  );
}
