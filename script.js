
document.getElementById("profile-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("age", document.getElementById("age").value);
    formData.append("medical-history", document.getElementById("medical-history").value);

    const files = document.getElementById("file-upload").files;
    for (let i = 0; i < files.length; i++) {
        formData.append("medical-files", files[i]);
    }

    fetch("/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert("Profile submitted successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while submitting the profile.");
    });
});