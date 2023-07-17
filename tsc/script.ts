const submitBtn = document.getElementById("submit-button") as HTMLButtonElement

submitBtn.addEventListener("click", function (event) {
  event.preventDefault()
  // Genero un numero casuale
  let randomNum: number = Math.floor(Math.random() * (100 - 1) + 1)
  console.log(randomNum)

  // Memorizzo in una variabile l'input del primo giocatore
  let inputFirstPlayer: number = parseFloat(
    (<HTMLInputElement>document.getElementById("first-player")).value
  )

  // Memorizzo in un'altra variabile l'input del secondo giocatore

  let inputSecondPlayer: number = parseFloat(
    (<HTMLInputElement>document.getElementById("second-player")).value
  )

  // Assegno ad una variabile il numero di tentativi disponibili per giocatore
  if (inputFirstPlayer === randomNum && inputSecondPlayer === randomNum) {
    console.log("Entrambi i giocatori hanno indovinato il numero")
    alert(
      `Il numero estratto è ${randomNum},  perciò entrambi i giocatori hanno indovinato il numero`
    )
  } else if (
    inputFirstPlayer !== randomNum &&
    inputSecondPlayer === randomNum
  ) {
    console.log("Ha indovinato solo il secondo giocatore")
    alert(
      `Il numero estratto è ${randomNum},  perciò ha indovinato solo il secondo giocatore`
    )
  } else if (
    inputFirstPlayer === randomNum &&
    inputSecondPlayer !== randomNum
  ) {
    console.log("Ha indovinato solo il primo giocatore")
    alert(
      `Il numero estratto è ${randomNum},  perciò ha indovinato solo il primo giocatore`
    )
  } else if (
    inputFirstPlayer !== randomNum &&
    inputSecondPlayer !== randomNum
  ) {
    if (
      Math.abs(randomNum - inputFirstPlayer) >
      Math.abs(randomNum - inputSecondPlayer)
    ) {
      console.log(
        "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più"
      )
      alert(
        `Il numero estratto è ${randomNum},  perciò nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più`
      )
    } else if (
      Math.abs(randomNum - inputFirstPlayer) <
      Math.abs(randomNum - inputSecondPlayer)
    ) {
      console.log(
        "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più"
      )
      alert(
        `Il numero estratto è ${randomNum},  perciò nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più`
      )
    } else {
      console.log(
        "Nessuno dei due ha azzeccato il numero casuale ed entrambi sono ugualmente distanti dal numero estratto"
      )
      alert(
        `Il numero estratto è ${randomNum}, perciò nessuno dei due ha azzeccato il numero casuale, ed entrambi sono ugualmente distanti dal numero estratto`
      )
    }
  }
})
