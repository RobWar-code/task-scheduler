document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    let selection = document.querySelectorAll('select');
    M.FormSelect.init(selection);

    let collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);

});
