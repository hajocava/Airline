import Swal from "sweetalert2";

export function confirm(
    title = "Confirma para continuar",
    text = "Estas seguro de realizar esta accion?",
    icon = "warning"
) {
    return Swal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonColor: "#5E79FF",
        cancelButtonColor: "#919191",
        confirmButtonText: "Continuar",
        cancelButtonText: "Cancelar",
    }).then((result) => (result.value ? true : false));
}

export function alert(
    title = "Listo!",
    text = "Accion realizada con exito.",
    icon = "success"
) {
    return Swal.fire(title, text, icon);
}

export function toast(text = "Realizado con exito", icon = "success", html = "") {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    Toast.fire({ icon, title: text, html });
    return Toast;
}