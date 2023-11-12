$(document).ready(function() {
    $('#select-chain').select2({
        templateResult: formatOption
    });
});

function formatOption(option) {
    if (!option.id) {
        return option.text;
    }

    var optionImage = $(option.element).data('image');
    var $option = $('<span><img src="' + optionImage + '" class="option-image" /> ' + option.text + '</span>');

    return $option;
}
