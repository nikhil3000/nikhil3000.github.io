function submitQuery()
{
    if(document.querySelector("[name='email-2']").checkValidity() && 
    document.querySelector("[name='name-2']").checkValidity()  && 
    document.querySelector("[name='field-2']").checkValidity()
    )
    {
        var obj = {
            email : document.querySelector("[name='email-2']").value,
            name : document.querySelector("[name='name-2']").value,
            message: document.querySelector("[name='field-2']").value
        }

    $.post('http://votingdapp.blocumen.com/submitBSTQuery',obj,function(data){
        console.log(data);
        document.getElementsByClassName('w-form-done-1')[0].style.display = 'block';
    })
    .fail(function(){
        document.getElementsByClassName('w-form-fail-1')[0].style.display = 'block';

    })
    }
}