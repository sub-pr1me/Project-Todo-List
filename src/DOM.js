const dom = (function () {
    /// PROJECT RELATED ELEMENTS
    const pAdd = document.getElementById('addProjectBtn');
    const pDialog = document.getElementById('proj_dialog');
    const pForm = document.querySelector('.proj_form');
    const pCancel = document.querySelector('.cancel_proj');
    const pSubmit = document.querySelector('.submit_proj');

    return { pAdd, pDialog, pForm, pCancel, pSubmit }
})();

export { dom }