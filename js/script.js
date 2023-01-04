// counter

let tambahs = document.querySelectorAll("#button-plus")
let kurangs = document.querySelectorAll("#button-min")

tambahs.forEach((tambah) => {
  tambah.addEventListener('click', () => {
    // console.log(tambah);
    let input = tambah.parentNode.querySelector("input")
    input.value++
  })
})

kurangs.forEach((kurang) => {
  kurang.addEventListener('click', () => {
    // console.log(kurang);
    let input = kurang.parentNode.querySelector("input")
    if (input.value < 1) {
      input.value = 0
    } else {
      input.value--
    }
  })
})

// jenis makan

let select = document.querySelector("#select")
let textarea = document.querySelector("#textarea")

// console.log(textarea);
select.addEventListener("change", () => {
  if (select.value === "Makan ditempat") {
    textarea.disabled = true
    // console.log("h");
  } else if (select.value === "Makanan diantar") {
    // console.log("e");
    textarea.disabled = false
  }
})