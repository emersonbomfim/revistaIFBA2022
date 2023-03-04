function testa_form()
{
    var n=document.forms["footer"]["nome"].value;
    var e=document.forms["footer"]["email"].value;
    var arrobapos=e.indexOf("@");
    var c=document.forms["footer"]["comentaio"].value;

    if (n==null || n=="")
{
    alert("Insira seu nome");
    return false;
}

if(arrobapos<1)
{
    alert("E-mail invalido.");
    return false;
}

if (c==null || c=="")
{
    alert("Faça um comentário");
    return false;
}
}