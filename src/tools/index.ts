export default { 
    setTitle:(title:string)=>{
                document.title = title;
               },
               img(val:string):string{
                   return require("../assets/"+val).default
               }
}