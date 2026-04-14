const ZALO_BOT_TOKEN = process.env.ZALO_BOT_TOKEN;
const ZALO_CHAT_IDS = process.env.ZALO_CHAT_IDS;

export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json();

    console.log("request body", { name, phone, message });

    const text = `📩 Liên hệ mới\nHọ tên: ${name}\nSĐT: ${phone}\nNội dung: ${message}`;

    const chatIds = (ZALO_CHAT_IDS ?? "")
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean);

    await Promise.all(
      chatIds.map((chat_id) =>
        fetch(
          `https://bot-api.zaloplatforms.com/bot${ZALO_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id, text }),
          }
        )
      )
    );

    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending message:", error);
    return new Response(JSON.stringify({ message: "Error sending message" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
