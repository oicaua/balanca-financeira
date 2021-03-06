// Alternate simple and advanced buttons
function changeButton(classification) {
    if (classification == "simple" & document.getElementById("simple-button").className == "btn btn-primary button-simple") {
        return
    } if (classification == "advanced" & document.getElementById("advanced-button").className == "btn btn-primary button-advanced") {
        return
    }
    if (document.getElementById("simple-button").className == "btn btn-primary button-simple") {
        // Change the colors of the buttons
        document.getElementById("simple-button").className = "btn btn-outline-primary button-simple"
        document.getElementById("advanced-button").className = "btn btn-primary button-advanced"

        // Change the visibility of the form
        document.getElementById('advanced-form').style.display = 'inline-block'
        document.getElementById('simple-form').style.display = 'none'
        return
    } if (document.getElementById("advanced-button").className == "btn btn-primary button-advanced") {
        // Change the colors of the buttons
        document.getElementById("advanced-button").className = "btn btn-outline-primary button-advanced"
        document.getElementById("simple-button").className = "btn btn-primary button-simple"

        // Change the visibility of the form
        document.getElementById('advanced-form').style.display = 'none'
        document.getElementById('simple-form').style.display = 'inline-block'
        return
    }
}

// Division
function divideIn6Pots(salary) {
    const pot1expense = salary * 0.55
    const pot2leisure = salary * 0.1
    const pot3invest = salary * 0.1
    const pot4education = salary * 0.1
    const pot5materialgoods = salary * 0.1
    const pot6donation = salary * 0.05

    return [salary,
        pot1expense, pot2leisure, pot3invest, pot4education, pot5materialgoods, pot6donation]
}

// Make the messages to the result HTML - only for the Advanced Mode
function evaluateTheNums (arrayFromScheme) {
    let messages = ["Messages:"]
    evaluatePot1(messages, arrayFromScheme)
    return messages
}

function evaluatePot1 (messages, arrayFromScheme) {
    if (arrayFromScheme[1] > (arrayFromScheme[0] * 0.65)) {
        messages[1] = `Suas despesas est??o muito altas, tente reduzir gastos. Para isso, o ideal seria gastar at?? $${(arrayFromScheme[0] * 0.65).toFixed(2)}`
    } if (arrayFromScheme[1] <= (arrayFromScheme[0] * 0.65) && arrayFromScheme[1] >= (arrayFromScheme[0] * 0.55)) {
        messages[1] = `Suas despesas est??o equilibradas, parab??ns! Cuide para n??o gastar mais de $${(arrayFromScheme[0] * 0.65).toFixed(2)}`
    } if (arrayFromScheme[1] < (arrayFromScheme[0] * 0.55)) {
        messages[1] = `Voc?? gasta pouco com despesas e contas em geral. Evite criar novas d??vidas e continue assim!`
    }
    evaluatePot2(messages, arrayFromScheme)
}

function evaluatePot2 (messages, arrayFromScheme) {
    if (arrayFromScheme[2] > (arrayFromScheme[0] * 0.15)) {
        messages[2] = `Voc?? gasta demais com lazer, ?? preciso manerar os gastos. Portanto, o ideal ?? gastar at?? $${(arrayFromScheme[0] * 0.10).toFixed(2)}`
    } if (arrayFromScheme[2] <= (arrayFromScheme[0] * 0.15) && arrayFromScheme[2] >= (arrayFromScheme[0] * 0.10)) {
        messages[2] = `Parab??ns! Voc?? gasta um valor ideal com lazer, mas, tome cuidado para n??o gastar mais de $${(arrayFromScheme[0] * 0.15).toFixed(2)}`
    } if (arrayFromScheme[2] < (arrayFromScheme[0] * 0.10)) {
        messages[2] = `Voc?? gasta menos do que o esperado com lazer. Voc?? pode gastar at?? $${(arrayFromScheme[0] * 0.10).toFixed(2)} sem problemas`
    }
    evaluatePot3(messages, arrayFromScheme)
}

function evaluatePot3 (messages, arrayFromScheme) {
    if (arrayFromScheme[3] >= (arrayFromScheme[0] * 0.10)) {
        messages[3] = `Parab??ns, voc?? junta e/ou investe mais de 10% da sua renda. Continue assim, invista sempre ao menos $${(arrayFromScheme[0] * 0.10)}`
    } if (arrayFromScheme[3] < (arrayFromScheme[0] * 0.10) && arrayFromScheme[3] >= (arrayFromScheme[0] * 0.05)) {
        messages[3] = `Voc?? investe ou guarda menos de 10% da sua renda, tente investir/guardar pelo menos $${(arrayFromScheme[0] * 0.10).toFixed(2)}`
    } if (arrayFromScheme[3] < (arrayFromScheme[0] * 0.05)) {
        messages[3] = `Voc?? investe ou guarda menos de 5% da sua renda. Tente come??ar com pelo menos $${(arrayFromScheme[0] * 0.05).toFixed(2)}`
    }
    evaluatePot4(messages, arrayFromScheme)
}

function evaluatePot4 (messages, arrayFromScheme) {
    if (arrayFromScheme[4] >= (arrayFromScheme[0] * 0.10)) {
        messages[4] = `Parab??ns, voc?? investe mais de 10% da sua renda em sua educa????o pessoal. Continue assim!`
    } if (arrayFromScheme[4] < (arrayFromScheme[0] * 0.10) && arrayFromScheme[4] >= (arrayFromScheme[0] * 0.05)) {
        messages[4] = `Voc?? investe pouco em sua educa????o pessoal, investa pelo menos $${(arrayFromScheme[0] * 0.10).toFixed(2)}, ser?? melhor`
    } if (arrayFromScheme[4] < (arrayFromScheme[0] * 0.05)) {
        messages[4] = `Seu investimento em educa????o pessoal ?? quase nada, tente come??ar investindo ao menos $${(arrayFromScheme[0] * 0.05).toFixed(2)}`
    }
    evaluatePot5(messages, arrayFromScheme)
}

function evaluatePot5 (messages, arrayFromScheme) {
    if (arrayFromScheme[5] > (arrayFromScheme[0] * 0.10)) {
        messages[5] = `Seus gastos com bens materiais s??o mais altos do que o esperado. Tente gastar at?? $${(arrayFromScheme[0] * 0.10).toFixed(2)}`
    } if (arrayFromScheme[5] <= (arrayFromScheme[0] * 0.10)) {
        messages[5] = `Voc?? gasta um valor saud??vel com bens materiais, parab??ns! Tente n??o gastar mais de $${(arrayFromScheme[0] * 0.10).toFixed(2)}`
    }
    evaluatePot6(messages, arrayFromScheme)
}

function evaluatePot6 (messages, arrayFromScheme) {
    if (arrayFromScheme[6] >= (arrayFromScheme[0] * 0.05)) {
        messages[6] = `Parab??ns, voc?? faz caridade/doa mais de 5% da sua renda. Voc?? ajuda quem precisa!`
    } if (arrayFromScheme[6] < (arrayFromScheme[0] * 0.05) && arrayFromScheme[6] > (arrayFromScheme[0] * 0.01)) {
        messages[6] = `Voc?? ajuda as pessoas, isso ?? bom, mas tente ajudar um pouco mais. Tente doar ao menos $${(arrayFromScheme[0] * 0.05).toFixed(2)}`
    } if (arrayFromScheme[6] < (arrayFromScheme[0] * 0.01)) {
        messages[6] = `Voc?? praticamente n??o faz caridade ou doa seu dinheiro. Tente come??ar com ao menos $${(arrayFromScheme[0] * 0.05).toFixed(2)}`
    }
    return (messages)
}

// Add to HTML the result of the *Simple Mode*
const simpleForm = document.getElementById('simple-form')
simpleForm.addEventListener('submit', function (e) {
    const cardDisplay = document.getElementById('cards')
    const finalResultDisplay = document.getElementById('final-result')
    const salary = document.getElementById('salary-simple').value
    const divisionReady = divideIn6Pots(salary)
    if (salary == 0) {
        cardDisplay.style.display = 'none'
        finalResultDisplay.style.display = 'none'
    }
    if (salary != 0) {
        cardDisplay.style.display = 'flex'
        finalResultDisplay.style.display = 'flex'
    }
    let i = 1
    while (i <= 6) {
        document.getElementById(`number-result-card${i}`).innerHTML = divisionReady[i].toFixed(2)
        i+=1
    }
    e.preventDefault()
})

// Add to HTML the result of the *advanced mode*
const advancedForm = document.getElementById('advanced-form')
advancedForm.addEventListener('submit', function(e) {
    const salary = document.getElementById('advanced-salary').value
    const pot1 = document.getElementById('pot1').value
    const pot2 = document.getElementById('pot2').value
    const pot3 = document.getElementById('pot3').value
    const pot4 = document.getElementById('pot4').value
    const pot5 = document.getElementById('pot5').value
    const pot6 = document.getElementById('pot6').value

    // const divisionReady = divideIn6Pots()
    const evaluateReady = evaluateTheNums([salary, pot1, pot2, pot3, pot4, pot5, pot6])
    console.log(evaluateReady)

    // Edit the cards and put the messages
    let i = 1
    while (i <= 6) {
        document.getElementById(`result-card-pot${i}`).innerHTML = evaluateReady[i]
        i += 1
    }

    // Show the cards
    const cardDisplay = document.getElementById('cards')
    const finalResultDisplay = document.getElementById('final-result')
    const warningMessage = document.getElementById('warning-send-button')
    if (salary == 0 || pot1 == 0 || pot2 == 0 || pot3 == 0 || pot4 == 0 || pot5 == 0 || pot6 == 0) {
        cardDisplay.style.display = 'none'
        finalResultDisplay.style.display = 'none'
        warningMessage.style.display = 'inline-block'
    } else {
        cardDisplay.style.display = 'flex'
        finalResultDisplay.style.display = 'flex'
        warningMessage.style.display = 'none'
    }

    // Remove the unnecesary text
    const numberResultCard = document.getElementsByClassName('numberResultCard')
    let j = 0
    while (j < 6) {
        numberResultCard[j].style.display = 'none'
        j += 1
    }

    e.preventDefault()
})
