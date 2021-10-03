import Swal from 'sweetalert2';
const $btn=document.querySelector('#muestra');
$btn.addEventListener('click', ()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Has hecho todo correctamente',
        showConfirmButton: false,
        timer: 1500
    })
});