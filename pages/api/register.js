export default async function handler({ method, body }, res) {
  await res.status(200).json({ user: "Ada Lovelace" });

  if (method === "POST") {
    const obj = await JSON.parse(body);
  }
}
