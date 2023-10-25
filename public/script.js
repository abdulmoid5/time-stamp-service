function getTimestamp() {
  const timestampInput = document.getElementById("timestamp-input").value;
  fetch(`/${timestampInput}`)
    .then((response) => response.json())
    .then((data) => {
      const resultDiv = document.getElementById("result");
      if (data.error) {
        resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
      } else {
        resultDiv.innerHTML = `<p>Unix Timestamp: ${data.unix}</p><p>UTC Time: ${data.utc}</p>`;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
