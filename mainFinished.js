// ASSIGNMENT:  write the document ready function
// PURPOSE OF CODE:  
 




// ASSIGNMENT:  write the jQ code that shows the dropdown menu for the cart
// PURPOSE OF CODE:  

$(document).ready(() => {
    $('#cart').on('mouseeneter', () => {
        $('#cartMenu').show();
    })



// ASSIGNMENT write the jQ code that shows the dropdown menu for the account
// PURPOSE OF CODE: creates dropdown for the accout
    $('#account').on('click', () => {
        $('#accountMenu').toggle();
    })


// ASSIGNMENT:  write the jQ code that shows the dropdown menu for help
// PURPOSE OF CODE:
    $('#help').on('click', () => {
        $('#helpMenu').toggle();
    })



// ASSIGNMENT:  write the jQ code that causes the menu to disappear
// PURPOSE OF CODE:
    $('#dropdown-menu').on('mouseleave', () => {
        $('#dropdown-menu').hide();
    })


})