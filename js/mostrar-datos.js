const mostrarDatos = (id,clase)=>{
    document.getElementById(id).classList.add(clase)
    console.log('onclic')
}

const ocultarDatos = (id,clase)=>{
    
    document.getElementById(id).classList.remove(clase)
}