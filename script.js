function addRecommendation(){

    let recommendationInput =
        document.getElementById("new-recommendation");

    let recommendationText =
        recommendationInput.value;

    if(recommendationText.trim() === ""){

        alert("Please enter a recommendation.");

        return;
    }

    let newCard = document.createElement("div");

    newCard.classList.add("recommendation-card");

    newCard.innerText =
        "“" + recommendationText + "”";

    document.getElementById("recommendation-list")
        .appendChild(newCard);

    recommendationInput.value = "";

    document.getElementById("popup").style.display = "flex";
}

function closePopup(){

    document.getElementById("popup").style.display = "none";

}