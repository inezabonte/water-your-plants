export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    return res.status(200).json({ message: "success" });
  }
  return res.status(401).json({ message: "Method not allowed" });
}
