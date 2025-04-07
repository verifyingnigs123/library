document.getElementById("borrowForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let book = document.getElementById("book").value;
    let days = document.querySelector('input[name="days"]:checked').value;
    
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Book:</strong> ${book}</p>
    <p><strong>Borrow Duration:</strong> ${days}</p>
    `;
    });