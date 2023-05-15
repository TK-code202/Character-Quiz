//User Interface Logic
$(document).ready(function() {
    $("#formOne").submit(function(event) {

        const teamInput = $("select#team").val();
        const weaponInput = $("select#weapon").val();
        const flawInput = $("select#flaw").val();
        const ideaInput = $("select#idea").val();
        const likedInput = $("select#liked").val();
        const selfInput = $("select#self").val();

        //Quiz Form
        if (teamInput === "leading" && weaponInput === "me" && flawInput === "ego" && ideaInput === "do-it" && likedInput === "mind" && (selfInput === "extrovert" || selfInput === "social" || selfInput === "calculated" )) {
            $("#formOne").hide();
            $(".information").show();
            $(".profileTwo").show(1000);
        } else if (teamInput === "v-well" && weaponInput === "shield" && flawInput === "stubborn" && ideaInput === "nothing" && likedInput === "moral" && (selfInput === "introvert" || selfInput === "leader"  )) {
            $("#formOne").hide();
            $(".information").show();
            $(".profileOne").show(1000);
        } else if (teamInput === "n-v-well" && weaponInput === "me" && flawInput === "anger" && ideaInput === "only-if" && (likedInput === "mind" || likedInput === "strength" ) && selfInput === "introvert" ){
            $("#formOne").hide();
            $(".information").show();
            $(".profileSix").show(1000);
        } else if (teamInput === "v-well" && weaponInput === "hammer" && (flawInput === "ego" || flawInput === "careless" ) && ideaInput === "nothing" && (likedInput === "efficient" || likedInput === "strength" || likedInput === "leadership" ) && (selfInput === "social" || selfInput === "leader")){
            $("#formOne").hide();
            $(".information").show();
            $(".profileThree").show(1000);
        } else if ((teamInput === "leading" || teamInput === "v-well") && weaponInput === "any" && flawInput === "ego" && ideaInput === "do-it" && (likedInput === "efficient" ||likedInput === "leadership" ) && (selfInput === "calculated" || selfInput === "leader")){
            $("#formOne").hide();
            $(".information").show();
            $(".profileFive").show(1000);
        } else if ((teamInput === "leading" || teamInput === "v-well") && weaponInput === "magic" && flawInput === "ego" && ideaInput === "do-it" && (likedInput === "mind" ||likedInput === "leadership" ) && (selfInput === "calculated" || selfInput === "leader")){
            $("#formOne").hide();
            $(".information").show();
            $(".profileNine").show(1000);
        } else if (teamInput === "v-well"  && weaponInput === "bow" && (flawInput === "careless" ||flawInput === "stubborn")  && ideaInput === "nothing" && (likedInput === "resource" ||likedInput === "efficient" ) && (selfInput === "calculated" || selfInput === "peacemaker")){
            $("#formOne").hide();
            $(".information").show();
            $(".profileSeven").show(1000);
        }  else if (teamInput === "v-well"  && (weaponInput === "me" || weaponInput === "any") && (flawInput === "unserious" ||flawInput === "stubborn")  && ideaInput === "nothing" && (likedInput === "mind" ||likedInput === "resource" ) && (selfInput === "calculated" || selfInput === "peacemaker" || selfInput === "introvert")){
            $("#formOne").hide();
            $(".information").show();
            $(".profileEight").show(1000);
        } else {
            $("#formOne").hide();
            $(".information").show();
            $(".profileFour").show(1000);
        }
      
        event.preventDefault();
    });
});