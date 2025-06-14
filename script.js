document.getElementById("quiz-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
        style: formData.get("style"),
        region: formData.get("region"),
        type: formData.get("type"),
        color: formData.get("color"),
    };

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "AI가 구단을 분석 중입니다... 잠시만 기다려주세요.";

    try {
        const response = await fetch("https://assign2-indol.vercel.app/api/baseballAI", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
    });

    const result = await response.json();
    resultDiv.textContent = result.answer || "결과를 불러오지 못했습니다.";
    } catch (err) {
        console.error(err);
        resultDiv.textContent = "에러가 발생했습니다. 나중에 다시 시도해주세요.";
    }
});