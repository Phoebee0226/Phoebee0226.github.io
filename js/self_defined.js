// Function to show the modal
function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Function to initialize the modal functionality
function initModals() {
    var imgs = document.querySelectorAll('.myImg'); // Use class instead of id

    imgs.forEach(function(img, index) {
        // The line below assumes that the ID of the modal associated with this image is 'myModal' followed by the index number
        var modalId = 'myModal' + index;
        var modal = document.getElementById(modalId);

        if (modal) {
            img.onclick = function() {
                modal.style.display = 'block';
            };
        } else {
            console.error('No modal found with ID:', modalId);
        }
    });

    var closeButtons = document.querySelectorAll('.modal .close');
    closeButtons.forEach(function(btn) {
        btn.onclick = function() {
            btn.closest('.modal').style.display = 'none';
        };
    });
}


// Call the initModal function after the document has loaded
document.addEventListener('DOMContentLoaded', initModals);