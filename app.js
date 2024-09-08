
function openModal(museumName) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("museum-title").innerText = museumName;
    document.getElementById("location").value = museumName; // Autofill the location in the form
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') {
        return; // Ignore empty messages
    }

    // Display user message
    var chatlog = document.getElementById('chatlog');
    var userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = userInput;
    chatlog.appendChild(userMessage);

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Simulate bot response
    setTimeout(function() {
        var botMessage = document.createElement('div');
        botMessage.className = 'message bot';
        botMessage.textContent = getBotResponse(userInput);
        chatlog.appendChild(botMessage);
        chatlog.scrollTop = chatlog.scrollHeight; // Scroll to the bottom
    }, 500);
}
// Chatbot logic
const intents = [
    {
        tag: "greeting",
        patterns: ["Hi", "Hey", "How are you", "Is anyone there?", "Hello", "Good day"],
        responses: ["Hey :-)", "Hello, thanks for visiting", "Hi there, what can I do for you?", "Hi there, how can I help?"]
    },
    {
        tag: "goodbye",
        patterns: ["Bye", "See you later", "Goodbye"],
        responses: ["See you later, thanks for visiting", "Have a nice day", "Bye! Come back again soon."]
    },
    {
        tag: "thanks",
        patterns: ["Thanks", "Thank you", "That's helpful", "Thank's a lot!"],
        responses: ["Happy to help!", "Any time!", "My pleasure"]
    },
    {
        tag: "museum",
        patterns: ["Which museums are there?", "What museums are available?", "What museums are present now?"],
        responses: ["Indian Museum, Victoria Memorial, Birla Industrial & Technological Museum, Marble Palace, Rabindra Bharati Museum, Salar Jung Museum, Telangana State Archaeology Museum and Nizam’s Museum"]
    },
    {
        tag: "payment",
        patterns: ["Do you take credit cards?", "Do you accept Mastercard?", "Can I pay with Paypal?", "Are you cash only?"],
        responses: ["We accept VISA, Mastercard and Paypal", "We accept most major credit cards, and Paypal"]
    },
    {
        tag: "ticket",
        patterns: ["how many tickets are left?", "What tickets are there?", "Do you have tickets?"],
        responses: ["All tickets are available"]
    }
];

function getResponse(userInput) {
    const lowercaseInput = userInput.toLowerCase();
    for (let intent of intents) {
        for (let pattern of intent.patterns) {
            if (lowercaseInput.includes(pattern.toLowerCase())) {
                return intent.responses[Math.floor(Math.random() * intent.responses.length)];
            }
        }
    }
    return "Sorry, I didn't understand that.";
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // Display user's message
    const chatlog = document.getElementById("chatlog");
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = userInput;
    chatlog.appendChild(userMessage);

    // Get and display bot's response
    const botResponse = getResponse(userInput);
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.textContent = botResponse;
    chatlog.appendChild(botMessage);

    // Clear user input
    document.getElementById("user-input").value = "";

    // Scroll to the bottom of the chatlog
    chatlog.scrollTop = chatlog.scrollHeight;
}


// function getBotResponse(userInput) {
//     // Simple bot responses based on user input
//     var responses = {
//         "hello": "Hi there! How can I assist you today?",
//         "how are you": "I'm just a bot, but I'm doing great! How can I help you?",
//         "what is your name": "I'm a chatbot. I don't have a name, but I'm here to help you!",
//         "": "Please type something to start the conversation."
//     };

//     // Return the response or a default message
//     return responses[userInput.toLowerCase()] || "Sorry, I didn't understand that.";
// }
