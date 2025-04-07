document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch borrowed books data from the server
    function fetchBorrowedBooks() {
        fetch('/get-borrowed-books')  // Endpoint that returns borrowed books data for the logged-in student
            .then(response => response.json())
            .then(data => {
                const booksTable = document.querySelector("#books-table");
                booksTable.innerHTML = '';  // Clear existing content

                data.books.forEach(book => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.due_date}</td>
                        <td><button onclick="returnBook(${book.id})">Return</button></td>
                    `;
                    booksTable.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Error fetching borrowed books:', error);
            });
    }

    // Call the fetch function to populate the table when the page loads
    fetchBorrowedBooks();

    // Function to handle book return
    window.returnBook = function(bookId) {
        // Sending a request to the server to mark the book as returned
        fetch(`/return-book/${bookId}`, { method: 'POST' })
            .then(response => {
                if (response.ok) {
                    alert('Book returned successfully!');
                    fetchBorrowedBooks();  // Refresh the list after returning the book
                } else {
                    alert('Failed to return the book.');
                }
            })
            .catch(error => {
                console.error('Error returning the book:', error);
            });
    };

    // Logout function (for the button)
    window.logout = function() {
        window.location.href = '/logout';  // Redirect to the logout endpoint
    };
});
