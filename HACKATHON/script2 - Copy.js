document.getElementById("send-button").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    addMessage("You: " + userInput);
    document.getElementById("user-input").value = "";

    // Simulate chatbot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        addMessage("Bot: " + botResponse);
    }, 1000);
});

        
function addMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(input) {
    if (input.includes("hello")) return "Hi there! How can I help you today?";
    if (input.includes("what is your name")) return "I am MHA bot";
}



