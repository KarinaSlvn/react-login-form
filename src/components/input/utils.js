export const validationsTypes = {
  'email': /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
  'password': /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i
}

export const validate = (value, type) => value.match(validationsTypes[type])
