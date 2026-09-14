import fs from "fs";

async function run() {
  try {
    const res = await fetch("http://localhost:9222/json");
    const targets = await res.json();
    const target = targets.find((t) => t.type === "page");
    if (!target) {
      console.log("No page target found");
      process.exit(1);
    }

    const wsUrl = target.webSocketDebuggerUrl;
    const WebSocket = (await import("ws")).default;
    const ws = new WebSocket(wsUrl);

    ws.on("open", () => {
      let id = 1;
      const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));

      setTimeout(() => {
        send("Input.dispatchMouseEvent", { type: "mousePressed", x: 640, y: 450, button: "left", clickCount: 1 });
        send("Input.dispatchMouseEvent", { type: "mouseReleased", x: 640, y: 450, button: "left", clickCount: 1 });
      }, 500);

      setTimeout(() => {
        send("Page.captureScreenshot", { format: "png" });
      }, 2500);
    });

    ws.on("message", (data) => {
      const msg = JSON.parse(data.toString());
      if (msg.result && msg.result.data) {
        fs.writeFileSync("d:/100X_Devs/PROJECTS/minimal-design/precious-union-site/card_revealed.png", Buffer.from(msg.result.data, "base64"));
        console.log("Screenshot saved successfully to card_revealed.png!");
        ws.close();
        process.exit(0);
      }
    });
  } catch (err) {
    console.error("Error in capture script:", err);
    process.exit(1);
  }
}

run();
