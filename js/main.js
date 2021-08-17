function getInnerText(elementId) {
    const value = parseFloat(document.getElementById(elementId).innerText);
    return value;
}

function setTicket(ticketId) {
    let number = getInnerText(ticketId);
    number++;
    document.getElementById(ticketId).innerText = number;
    return number;
}

function deleteTicket(ticketId) {
    let number = getInnerText(ticketId);
    if (number > 0) {
        number--;
        document.getElementById(ticketId).innerText = number;
        return number;
    } else {
        alert('You Have No ticket');
        return 0;
    }

}

function costOfOneEarth(totalTicket, ticketPrise, elementId) {
    let totalPrice = totalTicket * ticketPrise;
    document.getElementById(elementId).innerText = totalPrice;
}

function updateTotalCost() {
    let moonPrice = getInnerText('all-moon-ticket-price');
    let marsPrice = getInnerText('all-mars-ticket-price');
    document.getElementById('total-cost').innerText = moonPrice + marsPrice;
}


//moon ticket add 
document.getElementById('moon-add').addEventListener('click', function() {
    let totalTicket = setTicket("moon-ticket-count");
    let perTicketPrice = 10;
    costOfOneEarth(totalTicket, perTicketPrice, 'all-moon-ticket-price')
    updateTotalCost();
});
//moon ticket delete
document.getElementById('moon-delete').addEventListener('click', function() {
    let totalTicket = deleteTicket("moon-ticket-count");
    let perTicketPrice = 10;
    costOfOneEarth(totalTicket, perTicketPrice, 'all-moon-ticket-price')
    updateTotalCost();
});
//mars ticket add 
document.getElementById('mars-add').addEventListener('click', function() {
    let totalTicket = setTicket("mars-ticket-count");
    let perTicketPrice = 50;
    costOfOneEarth(totalTicket, perTicketPrice, 'all-mars-ticket-price')
    updateTotalCost();
});

//marse ticket delete
document.getElementById('mars-delete').addEventListener('click', function() {
    let totalTicket = deleteTicket("mars-ticket-count");
    let perTicketPrice = 50;
    costOfOneEarth(totalTicket, perTicketPrice, 'all-mars-ticket-price')
    updateTotalCost();
});