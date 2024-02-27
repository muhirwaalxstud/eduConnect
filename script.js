// Function to handle attending an event
function attendEvent(eventName) {
    alert(`You are now attending ${eventName}`);
    // Implement logic for attendance tracking or integration with a backend system
}

// Function to handle booking an event
function bookEvent(eventName) {
    alert(`You have successfully booked ${eventName}`);
    // Implement logic for event booking or integration with a booking system
}


document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the contact form
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Display a success message
        alert('Thank you for your message! We will get back to you soon.');

        // Optionally, you can reset the form fields
        this.reset();
    });
});
