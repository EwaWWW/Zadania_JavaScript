const users = [
    {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
    {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
    {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
    {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

const $table = $('<table class="table table-dark">').appendTo('body');

const getRowsWithUsers = () => {
    return users.map(user => {
        return $(`
        <tr class="table-row">
            <td class="table-cell"><input class='terms-cbx' type='checkbox' data-user='${user.id}'></td>
            <td class="table-cell">${user.id}</td>
            <td class="table-cell">${user.firstName}</td>
            <td class="table-cell">${user.lastName}</td>
            <td class="table-cell">${user.age}</td>
            <td class="table-cell">${user.city}</td>
            <td><i class="fa fa-minus-square remove-icon" aria-hidden="true"></i></td>
        </tr>
        `)
    })
};

$table.append(getRowsWithUsers());

/*A.
- Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa
  ma wyświetlić w konsoli ID danego użytkownika*/

const $checkbox = $('.check-box');

function getCheckbox() {
    $(this).prop('checked');
    console.log($(this).data('user'));
}

$table.on('click', '.check-box', getCheckbox);

/*- Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd*/

const $trashIcon = $('.remove-icon');

function removeRow() {
    $(this).closest('tr').remove();
}

$table.on('click', '.remove-icon', removeRow);

/*- najechanie na rząd ma go podświetlić*/

const $tableRow = $('.table-row');

$tableRow.on({
    'mouseover' : function addHighLight() {
        $(this).addClass('active');
    },
    'mouseout' : function removeHighLight() {
        $(this).removeClass('active');
    }
});


/*B
- przycisk do dodania użytkownika ma być odblokowany jeśli wiek age > 18 a firstName ma więcej niż 3 litery*/



function addUser() {
    const $minRequiredAge = 18;
    const $minRequiredFirstNameLength = 4;
    return $userAge.val() < $minRequiredAge ||
        $userFirstName.val().length < $minRequiredFirstNameLength;
}

function validateRequrements() {
    $submitButton.prop('disabled', requirementsToActivate)
};

$userAge.add($userFirstName).on('keyup', validateRequrements);