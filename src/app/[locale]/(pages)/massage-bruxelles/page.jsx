import LocalCityPage, { buildCityMetadata } from "@/components/LocalCityPage/LocalCityPage";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  return buildCityMetadata("bruxelles", locale);
}

export default async function Page(props) {
  const { params } = props;
  const { locale } = await params;
  return <LocalCityPage cityKey="bruxelles" locale={locale} />;
}
