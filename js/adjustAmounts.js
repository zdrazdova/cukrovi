function adjustAmounts() {
  const factor = parseFloat(document.getElementById("factor").value) || 1;

  document.querySelectorAll("li").forEach((item) => {
    // Store the original value only once
    if (!item.hasAttribute("data-original")) {
      item.setAttribute("data-original", item.innerText.trim());
    }

    const originalText = item.getAttribute("data-original");

    // Match numbers at the beginning followed by optional units and the rest of the line
    const match = originalText.match(/^(\d+(\.\d+)?)(\s*\w*\.?\s*)(.*)/);

    if (match) {
      const originalAmount = parseFloat(match[1]);
      const unit = match[3];
      const ingredientName = match[4];
      
      // Calculate the new amount
      let newAmount = originalAmount * factor;
      
      // Format without trailing decimal if it's an integer
      newAmount = Number.isInteger(newAmount) ? newAmount : newAmount.toFixed(1);

      // Update the list item
      item.innerText = `${newAmount}${unit}${ingredientName}`;
    } else {
      // Keep items without a numeric amount unchanged
      item.innerText = originalText;
    }
  });
}
  