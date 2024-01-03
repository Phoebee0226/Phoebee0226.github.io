// Function to show the model
function showmodel() {
    var model = document.getElementById("portfoliomodel");
    model.style.display = "block";
}

// Function to hide the model
function hidemodel() {
    var model = document.getElementById("portfoliomodel");
    model.style.display = "none";
}

// Function to initialize the model functionality
function initmodels() {
    var containers = document.querySelectorAll('.portfolioContainer'); // Use class instead of id

    containers.forEach(function(container, index) {
        var modelId = 'portfoliomodel' + index;
        var model = document.getElementById(modelId);

        if (model) {
            container.onclick = function() {
                model.style.display = 'block';
            };
        } else {
            console.error('No model found with ID:', modelId);
        }
    });

    var closeButtons = document.querySelectorAll('.model-holder .close');
    closeButtons.forEach(function(btn) {
        btn.onclick = function() {
            btn.closest('.model-holder').style.display = 'none';
        };
    });
}


// Call the initmodel function after the document has loaded
document.addEventListener('DOMContentLoaded', initmodels)