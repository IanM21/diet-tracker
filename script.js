
try {
    function calculate() {
        var calories = parseInt(document.getElementById("calories").value);
        console.log(calories)

        var protein = parseInt(document.getElementById("protein").value);
        console.log(protein)

        var age = parseInt(document.getElementById("age").value);
        console.log(age)

        // Get the progress bar elements
        var caloriesProgressBar = document.getElementById("calories-bar");
        var proteinProgressBar = document.getElementById("protein-bar");

        // Get the progress bar text elements
        var caloriesProgressBarText = document.getElementById("calories-bar-text");
        var proteinProgressBarText = document.getElementById("protein-bar-text");

        if (age <= 18) {
            document.write("You are too young to use this calculator");
        } else if (age >= 18 && age < 30) {
            const recommendedCaloriesIntake = 2700;
            var userCalculatedIntakeC = calories / recommendedCaloriesIntake;
            var userCalculatedPercentageC = (userCalculatedIntakeC  * 100);
            var PercentageC1 = Math.round(userCalculatedPercentageC);

            const recommendedProteinIntake = 56;
            var userCalculatedIntakeP = protein / recommendedProteinIntake;
            var userCalculatedPercentageP = (userCalculatedIntakeP * 100);
            var PercentageP1 = Math.round(userCalculatedPercentageP);

            caloriesProgressBar.value = PercentageC1;
            proteinProgressBar.value = PercentageP1;

            caloriesProgressBarText.textContent = PercentageC1 + "%";
            proteinProgressBarText.textContent = PercentageP1 + "%";

        } else if (age >= 30 && age < 50) {
            const recommendedCaloriesIntake = 2400;
            var userCalculatedIntakeC = calories / recommendedCaloriesIntake;
            var userCalculatedPercentageC = (userCalculatedIntakeC  * 100);
            var PercentageC2 = Math.round(userCalculatedPercentageC);

            const recommendedProteinIntake = 56;
            var userCalculatedIntakeP = protein / recommendedProteinIntake;
            var userCalculatedPercentageP = (userCalculatedIntakeP * 100);
            var PercentageP2 = Math.round(userCalculatedPercentageP);

            caloriesProgressBar.value = PercentageC2;
            proteinProgressBar.value = PercentageP2;

            caloriesProgressBarText.textContent = PercentageC2 + "%";
            proteinProgressBarText.textContent = PercentageP2 + "%";

        } else if (age >= 50 && age < 70) {
            const recommendedCaloriesIntake = 2200;
            var userCalculatedIntakeC = calories / recommendedCaloriesIntake;
            var userCalculatedPercentageC = (userCalculatedIntakeC  * 100);
            var PercentageC3 = Math.round(userCalculatedPercentageC);

            const recommendedProteinIntake = 56;
            var userCalculatedIntakeP = protein / recommendedProteinIntake;
            var userCalculatedPercentageP = (userCalculatedIntakeP * 100);
            var PercentageP3 = Math.round(userCalculatedPercentageP);

            caloriesProgressBar.value = PercentageC3;
            proteinProgressBar.value = PercentageP3;

            caloriesProgressBarText.textContent = PercentageC3 + "%";
            proteinProgressBarText.textContent = PercentageP3 + "%";

        } else if (age >= 70) {
            document.write("You are too old to use this calculator");
        }
    }
} catch (error) {
    console.log(error);
}
const currentYear = new Date().getFullYear();
document.querySelector('.current-year').textContent = "© " + currentYear;



