document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('name-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        setName(getName(form));
        form.reset();
    });

    function getName(form) {
        return form.querySelector('#name').value;
    }

    function setName(name) {
        document.getElementById('name-update').innerHTML = name;
    }
});