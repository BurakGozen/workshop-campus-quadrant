import { Error } from "@newcodedevelopment/ui";

export default function ErrorPage() {
  return <Error title="Er is een fout opgetreden" statusCode={500} />;
}
