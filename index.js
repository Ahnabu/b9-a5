let seatTotal = 40;
let selectedSeat = 0;
let seatLeft = document.getElementById('seat-left');
let selectSeat = document.getElementById('Selected-seat')
const seats = document.querySelectorAll(".bus-btn");
    
function createSeat(seatName) {
    let seatContainer = document.getElementById("select-seat");
    let seat = document.getElementById('seat').innerText = seatName;
    let classN = document.getElementById('class').innerText = "Business Class";
    let price = document.getElementById('price').innerText = "BDT-550";
    let newSeat = document.createElement('p');
    newSeat.appendChild(seat);
    let newClass = document.createElement('p');
    newClass.appendChild(classN);
    let newPrice = document.createElement('p');
    newSeat.appendChild(price);

    

}
    for (const seat of seats) {
        
        seat.addEventListener('click', function () {
            
            seat.style.backgroundColor = "#1DD100";
            seatTotal = seatTotal - 1;
            console.log(seatTotal);
            seatLeft.innerText = seatTotal;
            selectedSeat = selectedSeat + 1;
            selectSeat.innerText = selectedSeat;
            createSeat(seat);
        })
    }
