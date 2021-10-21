addventlistener(`DOMContentLoaded`, () =>{
    const btn_menu= document.querySelector(`.btn_menu`)
    if(btn_menu){
        btn_menu.addEventlistener(`click`,()=>{
            const btn_menu= document.querySelector(`.btn_menu`)  
            menu_item.classlist.toggle(`show`)

        })

    }
})