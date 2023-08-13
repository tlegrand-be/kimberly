var allButton = document.getElementById("all-button");
var stickerButton = document.getElementById("sticker-button");
var designButton = document.getElementById("design-button");
var illustrationButton = document.getElementById("illustration-button");
var shopStickers = document.getElementById("shop-stickers");

// Add event listeners to buttons
allButton.addEventListener("click", function () {
  filterSelection("all");
  updateButtonStyles(allButton);
});

stickerButton.addEventListener("click", function () {
  filterSelection("stick");
  updateButtonStyles(stickerButton);
});

designButton.addEventListener("click", function () {
  filterSelection("design");
  updateButtonStyles(designButton);
});

illustrationButton.addEventListener("click", function () {
  filterSelection("illustration");
  updateButtonStyles(illustrationButton);
});

// Filtering function
function filterSelection(c) {
  var items = shopStickers.children;

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (c === "all" || item.id.includes(c)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

// Update button styles
function updateButtonStyles(activeButton) {
  var buttons = document.querySelectorAll(".shop-buttons button");

  buttons.forEach(function (button) {
    if (button === activeButton) {
      button.classList.add("active-button");
    } else {
      button.classList.remove("active-button");
    }
  });

  // Remove active-button class from ALL button
  if (activeButton !== allButton) {
    allButton.classList.remove("active-button");
  }
}