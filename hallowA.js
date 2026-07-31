var ptr="";
for(i=1;i<=7;i++)
{
    for(j=1;j<=7;j++)
    {
        if(i==1||j==7)
            ptr+="*"
        else
            ptr+=" "
    }
    ptr+="\n"
}
console.log(ptr);
