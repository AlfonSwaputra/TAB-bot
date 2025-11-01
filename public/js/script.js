document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("send-btn");
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  async function sendMessage() {
    const userText = input.value.trim();
    if (!userText) return;

    appendMessage("user", userText);
    input.value = "";

    appendMessage("bot", "TAB lagi mikir...");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      if (data && data.reply) {
        updateLastBotMessage(data.reply);
      } else {
        updateLastBotMessage("TAB tidak bisa memahami respon dari server.");
      }
    } catch (error) {
      console.error(error);
      updateLastBotMessage("TAB lagi loading ya.");
    }
  }

  function appendMessage(sender, text) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function updateLastBotMessage(text) {
    const messages = chatBox.getElementsByClassName("bot");
    const lastBot = messages[messages.length - 1];
    if (lastBot) lastBot.textContent = text;
  }
});
