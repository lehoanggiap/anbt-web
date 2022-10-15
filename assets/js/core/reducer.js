async function getData(callback){
    let success = true;
    await $.ajax({
        url: "../data/visitors.json",
        type: 'GET',
        dataType: 'json', 
        success: callback,
        error: function(xhr, status, error) {
            success = false;
        }
    })
    return success
}

export {getData}