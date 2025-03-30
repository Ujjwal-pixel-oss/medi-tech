// Get elements
const editButton = document.getElementById("edit-button");
const editForm = document.getElementById("edit-form");
const profileDetails = document.querySelector(".profile-details");
const saveButton = document.getElementById("save-button");
const patientForm = document.getElementById("edit-profile-form");
const profileImgUpload = document.getElementById("profile-img-upload");
const profileImg = document.getElementById("profile-img");


profileImgUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            profileImg.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});


const reportForm = document.getElementById("new-report-form");
const testReportsList = document.getElementById("test-reports");

reportForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const reportType = document.getElementById("report-type").value;
    const reportFile = document.getElementById("report-file").files[0];
    const reportDescription = document.getElementById("report-description").value;

    
    const reportItem = document.createElement("li");
    reportItem.innerHTML = `
        <strong>${reportType}</strong> - 
        <span>Uploaded: ${new Date().toLocaleDateString()}</span><br>
        ${reportDescription ? `<em>${reportDescription}</em><br>` : ''}
        <a href="${URL.createObjectURL(reportFile)}" target="_blank">View Report</a>
    `;


    testReportsList.appendChild(reportItem);

    
    document.getElementById("report-type").value = '';
    document.getElementById("report-file").value = '';
    document.getElementById("report-description").value = '';
});

editButton.addEventListener("click", () => {
    
    editForm.classList.remove("hidden");
    profileDetails.classList.add("hidden");

    
    document.getElementById("name").value = document.getElementById("patient-name").textContent;
    document.getElementById("age").value = document.getElementById("patient-age").textContent;
    document.getElementById("gender").value = document.getElementById("patient-gender").textContent;
    document.getElementById("blood-group").value = document.getElementById("patient-blood-group").textContent;
    document.getElementById("allergies").value = document.getElementById("patient-allergies").textContent;
    document.getElementById("conditions").value = document.getElementById("patient-conditions").textContent;
    document.getElementById("test-reports-text").value = document.getElementById("test-reports").textContent;
});

// Save form functionality
patientForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get new values from the form
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const bloodGroup = document.getElementById("blood-group").value;
    const allergies = document.getElementById("allergies").value;
    const conditions = document.getElementById("conditions").value;
    const testReportsText = document.getElementById("test-reports-text").value;

    // Update the profile with the new data
    document.getElementById("patient-name").textContent = name;
    document.getElementById("patient-age").textContent = age;
    document.getElementById("patient-gender").textContent = gender;
    document.getElementById("patient-blood-group").textContent = bloodGroup;
    document.getElementById("patient-allergies").textContent = allergies;
    document.getElementById("patient-conditions").textContent = conditions;
    document.getElementById("test-reports").textContent = testReportsText;

});
