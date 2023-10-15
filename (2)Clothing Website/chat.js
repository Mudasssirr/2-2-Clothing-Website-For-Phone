//FOR CHAT PAGE

let messageInput = document.getElementById('message-input');
let rightMessageDiv = document.getElementById('right-message'); // Correctly select the right-message div

const sendText = () => {
    const userInput = messageInput.value;
    const trimmedInput = userInput.trim();

    // Check if the trimmed input is empty
    if (trimmedInput === "") {
        // The input is empty or only contains spaces, don't send the message
        return;
    }

    const currentTime = moment().format('h:mm A'); // Format the time as '2:35 PM'

    const userMessageHTML = `
        <div class="message-box right-message mb-2">
            ${messageInput.value}
            <br />
            <span>${currentTime}</span>
        </div>
    `;
    
    rightMessageDiv.insertAdjacentHTML('beforeend', userMessageHTML); // Use rightMessageDiv here
    
    messageInput.value = '';
}
