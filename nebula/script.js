function openChatbot() {
    const userMessage = document.getElementById('userMessage').value.trim();

    // Check if the user input is empty
    if (!userMessage) {
        alert('Please enter a message!');
        return;
    }

    // Get the iframe element
    const chatBotIframe = document.getElementById('chatBotIframe');

    // Set the iframe source to load the Botpress chatbot
    if (chatBotIframe.style.display === 'none') {
        chatBotIframe.src = 'https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/14/07/20241214071908-L87X9K16.json';
        chatBotIframe.style.display = 'block';
    }

    // Clear the input box after loading the chatbot
    document.getElementById('userMessage').value = '';

    // Scroll to the chatbot iframe for smooth UX
    chatBotIframe.scrollIntoView({ behavior: 'smooth' });
}
