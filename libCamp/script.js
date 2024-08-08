let pet = {
    hunger: 0,
    thirst: 0,
    happiness: 0,
    mood: "unhappy"
};

function feedPet() {
    const hungerDisplay = document.getElementById("hunger");
    pet.hunger += 20;
    if (pet.hunger > 100) {
        pet.hunger = 100;
    }
    updatePetMood();
    hungerDisplay.textContent = `Hunger: ${pet.hunger}`;
}

function giveWater() {
    const thirstDisplay = document.getElementById("thirst");
    pet.thirst += 20;
    if (pet.thirst > 100) {
        pet.thirst = 100;
    }
    updatePetMood();
    thirstDisplay.textContent = `Thirst: ${pet.thirst}`;
}

function playWithPet() {
    const happinessDisplay = document.getElementById("happiness");
    pet.happiness += 20;
    if (pet.happiness > 100) {
        pet.happiness = 100;
    }
    updatePetMood();
    happinessDisplay.textContent = `Happiness: ${pet.happiness}`;
}

function updatePetMood() {
    const moodDisplay = document.getElementById("petMood");
    const moodImg = document.getElementById("portrait"); 

    if (pet.happiness < 25 || pet.hunger < 25 || pet.thirst < 25) {
        pet.mood = "unhappy";
        moodImg.src = "img/unhappyPet.png";
    } 
    
    else if (pet.happiness > 75 && pet.hunger > 75 && pet.thirst > 75) {
        pet.mood = "happy";
        moodImg.src = "img/happyPet.jpg";
    } 
    
    else {
        pet.mood = "ok";
        moodImg.src = "img/okPet.jpg";
    }

    moodDisplay.textContent = `Mood: ${pet.mood}`;
}

function pulsePortrait() {
    let pulse = document.getElementById("portrait"); /*getting the element from html by id*/
    if (pulse.style.animationPlayState == "paused") {
        pulse.style.animationPlayState = "running"; /*if the element's animation playstate is paused, set it to running*/
        playWithPet();
    }
    else pulse.style.animationPlayState = "paused"; /*otherwise, if it's running, set it to paused*/
}

// Initial update of pet status
document.addEventListener('DOMContentLoaded', function() {
    updatePetMood();
  });

