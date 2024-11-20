import { authGet } from "@/lib/dal";

export default async function Page() {
  let data;
  try {
    data = await authGet();
  } catch (error) {
    return <p>Unauthorized. Please authenticate.</p>
  }
  return <>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </>
}
