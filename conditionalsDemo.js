let blaziken = "kelvin"
let gengar = "lukas"

if (blaziken === "lukas"){
    console.log("this is Lukas' Pokemon")
} else {
    console.log("this is Kelvin's Pokemon")
}

let blazikenAtk = 45
let gengarAtk = 30

let blazikenHP = 200
let gengarHP = 260

if(blazikenAtk > gengarAtk){
    gengarHP -= blazikenAtk
    console.log(gengarHP)
} else if (gengarAtk > blazikenAtk){
    blazikenHP -= gengarAtk
    console.log(`Blaziken's new HP is ${blazikenHP}`)}
    else {
        console.log("They both missed!")
    }


    let furySwipes = 35

    for(i = 0; i < 3; i++){
        console.log("Blaziken used fury swipes!")
        gengarHP -= furySwipes
        console.log(`Gengar's HP is now ${gengarHP}`)
    }

    console.log("-------------")


    let lowKick = 60

    for(i = 2; i > 0; i--){
        console.log(`Gengar used low kick!`)
        blazikenHP -= lowKick
        console.log("Blaziken's HP is now " + blazikenHP)
    }

    console.log("---------------")

    let gangarfainted = false


    while(gengarHP > 0){
        console.log("Blaziken used fury swing!")
        gengarHP -= furySwipes
        if( gengarHP < 0) {
            gengarHP = 0
            gengarfainted = true
        }
        
        }
        console.log("Gengar's HP is now "+ gengarHP)
        if(gengarfainted){
            console.log("Ganger has fainted!")
        }

    
 let boolean = false
 let falseNum = 0
 let falseStr = " "

 if(boolean){
    console.log("true")
 } else {
    console.log("false")
 }

