import { object, string, number, date, InferType, ref } from 'yup';

    const Validations = object({
        email: string().email("geçersiz email").required("zorunlu alan"),
        password: string().min(5,"min 5 karakter").required("zorunlu alan"),
        passwordConfirm: string().oneOf([ref("password")],"parolanız uyuşmuyor").required("zorunlu alan")
      });


export default Validations
