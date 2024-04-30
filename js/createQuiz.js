'use strict';

document.getElementById("addQuestionBtn").addEventListener("click", function() {
    event.preventDefault();
    
    let qContainer = document.getElementById("qContainer");
    let newQuestionDiv = document.createElement("div");
    newQuestionDiv.className = "quizQuestion";

    console.log("add question");

    let questionCount = qContainer.getElementsByClassName("quizQuestion").length + 6;

    newQuestionDiv.innerHTML = `
        <div class="form-group">
            <label for="quizQuestion${questionCount}"><strong>Question ${questionCount}</strong></label>
            <input type="text" class="form-control" id="exampleQuizQ${questionCount}" placeholder="Enter a question">
        </div>
        <div class="mb-3">
            <label for="formFile${questionCount}" class="form-label">Add an image for this question:</label>
            <input class="form-control" type="file" id="formFile${questionCount}">
        </div>
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="option">Option1</span>
            <input type="text" class="form-control" id="option1">
        </div>
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="option">Option2</span>
            <input type="text" class="form-control" id="option2">
        </div>   
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="option">Option3</span>
            <input type="text" class="form-control" id="option3">
        </div>
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="option">Option4</span>
            <input type="text" class="form-control" id="option4">
        </div>
    `;

    qContainer.appendChild(newQuestionDiv);
});
