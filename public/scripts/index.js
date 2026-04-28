const messages = document.querySelector(".messages");
messages.addEventListener("click", handleMessageClick);

function handleMessageClick(event) {
  const message = event.target.closest(".message");

  if (message) {
    const id = message.dataset.id;
    window.location.href = `/messages/${id}`;
  }
}
