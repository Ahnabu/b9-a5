let seatTotal = 40;
let selectedSeat = 0;
let seatLeft = document.getElementById('seat-left');
let selectSeat = document.getElementById('Selected-seat')
const seats = document.querySelectorAll(".bus-btn");
let totalPrice = document.getElementById('total-price');
let grandTotal = document.getElementById('Grand-total');
let discount = document.getElementById('discount');
let discounted = document.getElementById('discounted');
let seatArr = [];
let applyBtn = document.getElementById('apply-btn');
let nextBtn = document.getElementById('next-btn');
let inputBtn = document.getElementById('input-btn');
let coupon = document.getElementById('coupon');
let dis = 0;
let phon = document.getElementById('phone');
let phoneValue = phon.value;
let continueBtn = document.getElementById('continue-btn')
function createSeat(seatName) {
    let seatContainer = document.getElementById("select-seat");
    let seat = document.getElementById('seat');
    let classN = document.getElementById('class');
    let price = document.getElementById('price');
    let newSeat = document.createElement('p');
    newSeat.innerText = seatName;
    seat.appendChild(newSeat);
    let newClass = document.createElement('p');
    newClass.innerText = "Economy";
    classN.appendChild(newClass);
    let newPrice = document.createElement('p');
    newPrice.innerText = "BDT-550";
    price.appendChild(newPrice);
}
function couponBtn() {
    applyBtn.addEventListener('click', function () {
   
        if (coupon.value == "NEW15") {
            dis = (selectedSeat * 550 * 15 / 100);
            discounted.innerText = dis;
            inputBtn.classList.add('hidden');
        }
        else if (coupon.value == "Couple 20") {
            dis = (selectedSeat * 550 * 20 / 100);
            discounted.innerText = dis;
            inputBtn.classList.add('hidden');
        }
        discount.classList.remove('hidden');
        
        grandTotal.innerText = (selectedSeat * 550) - dis;
        
    
    })
}
function nextHandler() {
   
    nextBtn.addEventListener('click', function () {
        document.getElementById('fullContent').classList.add('hidden');
        document.getElementById('success').classList.remove('hidden');

    })
    
}
function continueHandler() {
    continueBtn.addEventListener('click', function () {
        document.getElementById('fullContent').classList.remove('hidden');
        document.getElementById('success').classList.add('hidden');

    })
}
for (const seat of seats) {

    seat.addEventListener('click', function () {
        if (seatArr.length <= 3) {
            seat.style.backgroundColor = "#1DD100";
            seatTotal = seatTotal - 1;
            console.log(seatTotal);
            seatLeft.innerText = seatTotal;
            selectedSeat = selectedSeat + 1;
            selectSeat.innerText = selectedSeat;
            createSeat(seat.innerText);
            seatArr.push(seat);
            totalPrice.innerText = selectedSeat * 550;
            seat.disabled = true;
            grandTotal.innerText = (selectedSeat * 550)
            if (seatArr.length === 4) {
                alert('You reached maximum number');
                applyBtn.removeAttribute("disabled");
                couponBtn();
                
            }
            nextHandler();
            continueHandler();
        }
    })
}

