document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    console.log('Name:', name);
    console.log('Email:', email);


    // Here you can also send data to a server or handle it as needed
});