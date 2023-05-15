import { Error } from "@newcodedevelopment/ui";

export default function ErrorPage() {
  return <Error title="Pagina niet gevonden" statusCode={404} />;
}
