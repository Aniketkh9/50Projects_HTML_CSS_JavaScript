// bring all the panels in java script
//create panel variable
//querySelector allows us to select anything eg h1,class,paragraph
//document.querySelector('.panel') it will select the 1st panel
/*document.querySelectorAll('.panel') it puts all the panels in node list
  (similar  to array)*/
const panels = document.querySelectorAll('.panel')

//console.log(panels)  //in inspect->Console you can see node list

/*forEach() high order array method
  these method take in function as an argument 
  so we can use function or arrow function*/
panels.forEach((panel) =>{
    //console.log(panel); //loop shows each panel in Inspect->Console

    //click kelay var motha hoil
    panel.addEventListener('click',() =>{
        removeActiveClasses()
        panel.classList.add('active')
    })

})

/* mothe panels chote hotil*/
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}