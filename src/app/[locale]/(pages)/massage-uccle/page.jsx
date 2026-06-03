import LocalCityPage, { buildCityMetadata } from "@/components/LocalCityPage/LocalCityPage";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  return buildCityMetadata("uccle", locale);
}

export default async function Page(props) {
  const { params } = props;
  const { locale } = await params;
  return <LocalCityPage cityKey="uccle" locale={locale} />;
}
