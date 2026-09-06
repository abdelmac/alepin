import LocalizedHome from "./localized-home";

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";

export default function Home() {
  return <LocalizedHome assetBasePath={pagesBasePath} />;
}
