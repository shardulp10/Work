// Add event listener to the Verify button
document.getElementById('verify').addEventListener('click', function() {
    // Get the email address from the input field
    let email = document.getElementById('email').value;

    // Validate the email address (you can add more validation logic here)
    if (email.trim() === '') {
        alert('Please enter a valid email address.');
        return;
    }

    // Replace this with your actual verification logic (e.g., sending an email, making an API call)
    console.log('Verifying email:', email);

    // Show the next button
    document.getElementById('next').style.display = 'flex';
});

// Add event listener to the next button (you can handle the next step here)
document.getElementById('next').addEventListener('click', function() {
    alert('This button would take you to the next step.');
    // Your code for the next step (e.g., redirecting to another page)
});