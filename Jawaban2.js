const input = document.querySelectorAll('input');

const patterns = {
    username: /^[A-z\d]{5.9}$/i,
    password: /^[\w@-]{5.9}$/
};



function validation(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'true';
    } else {
        field.className = 'false'
    }
}

input.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value):
        ValidityState(e.target.patterns[e.target.attributes.name.value])
    });
});
