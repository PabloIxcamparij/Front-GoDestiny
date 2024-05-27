
export const solicitarSMSSchema = {

    phone(value) {
        if (!value) {
            return 'Este campo es obligatorio';
        }

        // Comprueba si el valor coincide con un formato de número de teléfono válido
        const regex = /^[1-9]{4} [1-9]{4}$/;
        if (!regex.test(value)) {
            return 'Teléfono no válido, debe seguir el formato';
        }
        return true;
    },
}

export const ingresarSchema = {
    sms(value) {
        if (value) return true
        return 'El SMS es Obligatorio'
    }
}

export const registroUsuarioSchema = {
    nombre(value) {
        if (value) return true
        return 'El nombre es Obligatorio'
    },
    apellido(value) {
        if (value) return true
        return 'El apellido es Obligatorio'
    },
    correo(value) {
        if (!value) {
            return 'El correo es obligatorio';
        }

        // Expresión regular para validar el formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(value)) {
            return 'Por favor, ingresa un correo electrónico válido';
        }

        return true;
    },
    phone(value) {
        if (!value) {
            return 'Este campo es obligatorio';
        }

        // Comprueba si el valor coincide con un formato de número de teléfono válido
        const regex = /^[1-9]{4} [1-9]{4}$/;
        if (!regex.test(value)) {
            return 'Teléfono no válido, debe seguir el formato';
        }
        return true;
    }
}

export const registroConductorSchema = {

    cedula(value) {
        if (!value) {
            return 'Este campo es obligatorio';
        }

        // Comprueba si el valor coincide con un formato
        const regex = /^[1-9]{9}$/;
        if (!regex.test(value)) {
            return 'Cedula no válida';
        }
        return true;
    },
    cuentaBancaria(value) {
        if (!value) {
            return 'Este campo es obligatorio';
        }

        // Comprueba si el valor coincide con un formato
        const regex = /^[1-9]{12}$/;
        if (!regex.test(value)) {
            return 'cuenta no válida';
        }
        return true;
    },
    placa(value) {
        if (value) return true
        return 'La placa es Obligatorio'
    },
    modeloVehiculo(value) {
        if (value) return true
        return 'El modelo es Obligatorio'
    },
    licencia(value) {
        if (!value || value.length === 0) {
          return 'Debes seleccionar al menos una licencia';
        }
        return true;
      },
    cantidadPasajeros(value) {
        if (!value) {
            return 'Este campo es obligatorio';
        }

        const cantidad = parseInt(value);

        if (isNaN(cantidad) || cantidad < 2 || cantidad > 12) {
            return 'Debe estar entre 2 y 12';
        }

        return true;
    }


}

