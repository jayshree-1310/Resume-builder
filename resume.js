function addnewpro()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('proFeild');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder',"Enter here");
    let proOb=document.getElementById("pro");
    let pbtnOb=document.getElementById("pbtn");
    proOb.insertBefore(newNode,pbtnOb);
}  


function addnewskill()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skillFeild');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder',"Enter here");
    let skillOb=document.getElementById("skill");
    let skillbtnOb=document.getElementById("skillbtn");
    skillOb.insertBefore(newNode,skillbtnOb);
}  

 
function addnewaq()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqFeild');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder',"Enter here");
    let aqOb=document.getElementById("aq");
    let aqbtnOb=document.getElementById("aqbtn");
    aqOb.insertBefore(newNode,aqbtnOb);
} 



function addnewwe()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weFeild');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder',"Enter here");
    let weOb=document.getElementById("we");
    let webtnOb=document.getElementById("webtn");
    weOb.insertBefore(newNode,webtnOb);
}  


function generateCV()
{
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    document.getElementById("nameT2").innerHTML=nameField;
    
    let contactFeild=document.getElementById("contactFeild").value;
    document.getElementById("contactT").innerHTML=contactFeild;

    let addressFeild=document.getElementById("addressFeild").value;
    document.getElementById("addressT").innerHTML=addressFeild;

    let gitFeild=document.getElementById("gitFeild").value;
    document.getElementById("gitT").innerHTML=gitFeild;

    let linkFeild=document.getElementById("linkFeild").value;
    document.getElementById("linkT").innerHTML=linkFeild;

    let leetFeild=document.getElementById("leetFeild").value;
    document.getElementById("leetT").innerHTML=leetFeild;

    let objectiveField=document.getElementById("objectiveField").value
    document.getElementById("objectiveT").innerHTML=objectiveField;

    //skills

    let skills=document.getElementsByClassName("skillFeild");
    let strskill="";
    for(let e of skills)
    {
        strskill=strskill+`<li>${e.value}</li>`;
    }
    document.getElementById("skillT").innerHTML=strskill;

    //projects

    let pros=document.getElementsByClassName("proFeild");
    let strpro="";
    for(let e of pros)
    {
        strpro=strpro+`<li>${e.value}</li>`;
    }
    document.getElementById("proT").innerHTML=strpro;

    let aqs=document.getElementsByClassName("aqFeild");
    let straq="";
    for(let e of aqs)
    {
        straq=straq+`<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=straq;

    let wes=document.getElementsByClassName("weFeild");
    let strwe="";
    for(let e of wes)
    {
        strwe=strwe+`<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=strwe;


    //image setting
    let file=document.getElementById("imgField").files[0];
    console.log(file);
    let reader=new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend=function()
    {
        document.getElementById('imgT').src=reader.result;
    };
    

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';
}


function printCV()
{
    window.print();
}