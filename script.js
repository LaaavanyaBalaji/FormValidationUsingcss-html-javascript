
    function Valida(){
        var fname=document.forms.fname.value;
        var lname=document.forms.lname.value;
        var city=document.forms.City.value;
        var phno=document.forms.phno.value;
        var addr=document.forms.addr.value;

        if(fname==null||fname=="")
    {
        alert("Enter first name");
        return false;
    }
    
   else if(lname==null||lname=="")
    {
        alert("Enter last name");
        return false;
    }
    
    else if(city==null||city=="")
    {
        alert("Enter City");
        return false;
    }
    
   else if(phno==null||phno=="")
    {
        alert("Enter name");
        return false;
    }
  else if(addr==null||addr=="")
    {
        alert("Enter address");
        return false;
    }


        

    }

