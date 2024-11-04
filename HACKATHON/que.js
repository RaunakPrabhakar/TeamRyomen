function calculateMarks() {
    const optionA = parseInt(document.getElementById('optionA').value) || 0;
    const optionB = parseInt(document.getElementById('optionB').value) || 0;
    const optionC = parseInt(document.getElementById('optionC').value) || 0;
    const optionD = parseInt(document.getElementById('optionD').value) || 0;
    const optionE = parseInt(document.getElementById('optionE').value) || 0;

    const totalMarks = (optionA * 5) + (optionB * 10) + (optionC * 15) + 
                       (optionD * 20) + (optionE * 25);

    let condition;

    if (totalMarks >= 50 && totalMarks < 90) {
        condition = "Good condition";
    } else if (totalMarks >= 90 && totalMarks < 140) {
        condition = "Average";
    } else if (totalMarks >= 140 && totalMarks < 180) {
        condition = "Below average condition";
    } else if (totalMarks >= 180 && totalMarks < 220) {
        condition = "Moderately depressed";
    } else if (totalMarks >= 220 && totalMarks <= 250) {
        condition = "Highly depressed";
    } else {
        condition = "Invalid total marks";
    }

    document.getElementById('result').innerText = Total Marks: ${totalMarks}. Condition: ${condition};
}