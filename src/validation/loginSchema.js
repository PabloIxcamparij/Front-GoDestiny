
export const loginSchema = {

    phone(value) {
        if (!value) {
          return 'Este campo es obligatorio';
        }

        // Comprueba si el valor coincide con un formato de número de teléfono válido
        const regex = /^[1-9]{4} [1-9]{4}$/;
        if (!regex.test(value)) {
            return 'Teléfono no válido, debe seguir una secuencia de 4 numeros y un espacio';
        }
        return true;
    },
    password(value) {
        if (value) return true
        return 'El Password es Obligatorio'
    }
}
