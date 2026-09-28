function getSolution() {

    const question = document.getElementById("questionSelect").value;

    const finding = document.getElementById("finding");
    const recommendation = document.getElementById("recommendation");

    if (question === "") {
        finding.innerText = "Please select a question.";
        recommendation.innerText = "Select a question first.";
        return;
    }

    if (question === "subject") {

        finding.innerText =
            "Science is the most difficult subject reported by students.";

        recommendation.innerText =
            "Conduct additional Science practice sessions, concept-based activities and weekly revision tests.";
    }

    else if (question === "study") {

        finding.innerText =
            "Most students study for 2–3 hours outside school per day.";

        recommendation.innerText =
            "Encourage regular study routines, revision schedules and guided practice.";
    }

    else if (question === "attendance") {

        finding.innerText =
            "Many students reported being sometimes or frequently absent.";

        recommendation.innerText =
            "Follow up on irregular attendance and provide revision support for missed lessons.";
    }

    else if (question === "homework") {

        finding.innerText =
            "Most students complete homework only sometimes.";

        recommendation.innerText =
            "Provide regular homework guidance, manageable practice tasks and teacher follow-up.";
    }

    else if (question === "support") {

        finding.innerText =
            "Students require additional learning support based on their reported learning needs.";

        recommendation.innerText =
            "Provide extra classes, individual guidance, practical activities and suitable study materials.";
    }

    else if (question === "understanding") {

        finding.innerText =
            "Some students reported average or difficult understanding of classroom lessons.";

        recommendation.innerText =
            "Use simple explanations, concept-based activities, revision and individual support.";
    }
}
