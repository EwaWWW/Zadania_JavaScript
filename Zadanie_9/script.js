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
- nad tabela być formularz, który pobiera dane usera i puszuje go do tablicy users i od razu pokazuje na widoku.

- formularz ma mieć select, z 5 miastami do wyboru (Twoja decyzja), pozostałe wartości pobrane z inputów textowych*/

const $userName = $('#user_name');
const $userLastName = $('#user_lastName');
const $userAge = $('#user_age');
const $addUserButton = $('#add_user_btn');
const $userCity = $('#city_select');

$addUserButton.on('click', function () {
    users.push({
        firstName: $userName.val(),
        lastName: $userLastName.val(),
        age: $userAge.val(),
        city: $userCity.val(),
        id: users.length +1
    });
    $table.html(getRowsWithUsers());
});

/*- przycisk do dodania użytkownika ma być odblokowany jeśli wiek age > 18 a firstName ma więcej niż 3 litery*/


function addUser() {
    const $minAge = 18;
    const $minFirstNameLength = 3;
    return $userAge.val() < $minAge ||
           $userName.val().length < $minFirstNameLength;
    }

    function validateRequrements() {
        $addUserButton.prop('disabled', addUser())
    }
    $userAge.add($userName).on('keyup', validateRequrements);