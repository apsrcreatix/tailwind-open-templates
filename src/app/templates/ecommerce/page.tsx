import CategoryCatalogueWithPreviewImage from "@/components/(ecommerce)/CategoryCatalogue/WithPreviewImage";
import ProductFeaturesWithImageGrid from "@/components/(ecommerce)/ProductFeatures/WithImageGrid";
import PromoSectionWithImageTitle from "@/components/(ecommerce)/PromoSection/WithImageTitle";
import NavigationWithFeatures from "@/components/(ecommerce)/Navigation/WithFeatures";

export default function EcommercePage() {
  return (
    <div>
      <NavigationWithFeatures />
      <PromoSectionWithImageTitle />
      <ProductFeaturesWithImageGrid />
      <CategoryCatalogueWithPreviewImage />
    </div>
  );
}
