// // Chatbot interaction
// const chatBox = document.getElementById('chat-box');
// const userInput = document.getElementById('userInput');
// const sendBtn = document.getElementById('sendBtn');

// function addMessage(message, isUser) {
//     const messageDiv = document.createElement('div');
//     messageDiv.classList.add('message', isUser ? 'user' : 'bot');
//     messageDiv.innerText = message;
//     chatBox.appendChild(messageDiv);
//     chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
// }

// sendBtn.addEventListener('click', () => {
//     const userMessage = userInput.value.trim();
//     if (userMessage) {
//         // Display user message
//         addMessage(userMessage, true);
//         userInput.value = '';

//         // Simulated chatbot response
//         setTimeout(() => {
//             let botResponse;
//             if (userMessage.toLowerCase().includes('ticket')) {
//                 botResponse = "Sure! You can book your tickets below.";
//             } else if (userMessage.toLowerCase().includes('hello')) {
//                 botResponse = "Hello! How can I assist you with the museum today?";
//             } else {
//                 botResponse = "I'm here to help you with museum ticket bookings.";
//             }
//             addMessage(botResponse, false);
//         }, 1000); // Simulated response time
//     }
// });

// // Ticket booking form submission
// const form = document.getElementById('ticket-form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const date = document.getElementById('date').value;
//     const time = document.getElementById('time').value;
//     const tickets = document.getElementById('tickets').value;

//     // Simulate ticket booking
//     addMessage(`Thank you, ${name}. Your tickets for ${date} at ${time} have been booked.`, false);

//     // Clear the form
//     form.reset();
// });

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Function to add a message to the chatbox
function addMessage(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', isUser ? 'user' : 'bot');
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
}

// Simulate chatbot interaction
sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, true); // User message
        userInput.value = '';

        // Simulated bot response
        setTimeout(() => {
            let botMessage = "I'm here to help with museum bookings!";
            if (userMessage.toLowerCase().includes('ticket')) {
                botMessage = "Please book your tickets using the form.";
            } else if (userMessage.toLowerCase().includes('hello')) {
                botMessage = "Hello! How can I assist you today?";
            }
            addMessage(botMessage, false);
        }, 1000); // Simulated response time
    }
});
