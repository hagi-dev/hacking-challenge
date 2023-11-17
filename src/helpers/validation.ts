export type ValidationType = 'dni' | 'ruc' | 'plate' | 'phone' | 'text' | 'number';

function getRegex(type: ValidationType): RegExp {
  switch (type) {
    case 'dni':
      return /^\d{8}$/;
    case 'ruc':
      return /^\d{11}$/;
    case 'plate':
      return /^[A-Za-z]{3}-\d{3}$/;
    case 'phone':
      return /^\d{9}$/;
    default:
      return /^$/;
  }
}

export const validateInput = (type: ValidationType, input: string): string | null => {
  const regex = getRegex(type);
  if (!regex.test(input)) {
    switch (type) {
        case 'dni':
            return 'Ingrese un DNI válido';
        case 'ruc':
            return 'Ingrese un RUC válido';
        case 'plate':
            return 'Ingrese una placa válida (XXX-000)';
        case 'phone':
            return 'Ingrese un teléfono válido';
        default:
            return 'campo no valido';
    }
  }
  return null;
}