import App from './component/App.js'
import { getData } from './core/reducer.js';
import SearchList from './component/SearchList.js'
import VisitForm from './component/VisitForm.js'

let data = {
    'visitors': []
}

let loadData = {
    'visitors': []
}

const key_data = "visitors";

data['visitors'] = JSON.parse(localStorage.getItem(key_data)) || []

async function Load(callback) {
    await new Promise((resolve, reject) => { setTimeout(() => { resolve() }, 0) })
    await getData((res) => { loadData['visitors'] = [...res['visitors'], ...data['visitors']]})
    callback(loadData)
    return true
}

function updateContent(ajaxData) {
    $('.body-content').remove()
    $('.app-body').append(SearchList(ajaxData)) 
}

$('.app-container').html(App())

$('.btn-search').on('click', async function (e) {
    await Load(updateContent)
    let input = $('.js-search-input').val()
    input = input.trim()
    let { visitors } = loadData
    let searchVisitors = visitors
    if (input) {
        searchVisitors = visitors.filter((visitor) => {
            let { firstName } = visitor
            return firstName.toLowerCase() == input.toLowerCase()
        })

    }

    let newData = {
        'visitors': searchVisitors
    }

    updateContent(newData)
})

$.validator.addMethod("allCharacters", function (value, element) {
    return (/^\D+$/.test(value))
}, "The input must be characters");

$.validator.addMethod("phone", function (value, element) {
    return (/^\d+$/.test(value))
}, "The input must be characters");

$('#form-visit').validate({
    rules: {
        "firstName": {
            required: true,
            allCharacters: true,
            maxlength: 20
        },
        "password": {
            required: true,
            minlength: 8,
        },
        "lastName": {
            required: true,
            allCharacters: true,
            maxlength: 20
        },
        "telephone": {
            digits: true,
            maxlength: 11
        },
        "email": {
            maxlength: 50,
            email: true
        },
        "place": {
            required: true,
        },
        "description": {
            maxlength: 200
        }
    },

    errorPlacement: function (error, element) {
        if ($(element).is(':radio')) {
            $(element).closest('.row').after(error)
            $(error).addClass('error-custom')
        } else {
            element.after(error)
        }
    },

    errorElement: 'div',
})

$('#form-visit').on('submit', function (e) {
    e.preventDefault();
    if ($("#form-visit").valid()) {
        let submitData = {}
        alert('Email or password is not correct')
        // $("form#form-visit :input:not(:button)").each(function (index, element) {
        //     let input = $(this);
        //     switch (input.attr('type')) {
        //         case 'radio':
        //             if (input.is(":checked")) {
        //                 submitData[input.attr('name')] = input.val()
        //             }
        //             break;
        //         case 'checkbox':
        //             if (input.is(":checked")) {
        //                 if(!Array.isArray(submitData[input.attr('name')])){
        //                     submitData[input.attr('name')] = [];
        //                 }

        //                 submitData[input.attr('name')].push(input.val());
        //             }
        //             break;
        //         default:
        //             submitData[input.attr('name')] = input.val()
        //     }

        // });
        // data['visitors'].push(submitData)
        // localStorage.setItem(key_data, JSON.stringify(data['visitors']));
    }
})

$('#homepage').on('click', () => {
    Load(updateContent)
})

$('#login').on('click', () => {
    $('.body-content').remove()
    $('.app-body').append(VisitForm()) 
})


