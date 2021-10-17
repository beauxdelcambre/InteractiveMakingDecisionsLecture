let jonSnowAttack = 25
let jamielannisterAttack = 35

if (jonSnowAttack > jamielannisterAttack){
    console.log("Jon Snow has better attack than Jamie Lannister.")
}else if (jonSnowAttack === jamielannisterAttack){
    console.log("Jon Snow and Jamie Lannister have the same attack.")
}else{
    console.log("Jamie Lannister has better attack thank Jon Snow.")
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamielannisterAttack){
    console.log("Jon Snow has been slain.")
}else {
    jonSnowHealth -= jamielannisterAttack 
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)

}

jonSnowDefense += 25

if (jonSnowHealth <= jamielannisterAttack - jonSnowDefense){
    console.log('Jon Sonw has been slain.') 
}else{
    jonSnowHealth -=(jamielannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

if((jonSnowHealth + 50) >= 100 ){
    jonSnowHealth = 100
}else{
    jonSnowHealth += 50
}

let coinLandsHeads = false

if (coinLandsHeads === true){
    console.log("The fight continues!")
}else{
    console.log("Jon is allowed to run away.")

}
//for-loop:

// for (let i = 0; i < 5; i++){
//     if (jonSnowHealth <= 0){
//         console.log("Jon Snow has been slain.")
//     }else{
//         jonSnowHealth -= (jamielannisterAttack - jonSnowDefense)
//         console.log(`Jon Snow's health is ${jonSnowHealth}`)
//     }
// }

//while loop:

while(jonSnowHealth > 0){
    jonSnowHealth -= (jamielannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is ${jonSnowHealth}`)
    if (jonSnowHealth <= 0){
        console.log('Jon Snow has bee slain.')
    }
}

let backpack = []

backpack.push("sword")
backpack.push("sheild")
backpack.push("food")



backpack.splice(0, 1)

let furCoat = "fur coat"

backpack.push(furCoat)

console.log(backpack)

backpack.pop()

let itemCount = backpack,length

backpack.push("flint" , "blanket" , "knife", "toothbrush")

var backpack2 = backpack.splice(2, 5)

console.log(backpack2[0])

for (let i = 0; i < backpack.length; i++){
    console.log(backpack[i])
}

