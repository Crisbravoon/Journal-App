
import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialState = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialState)
    // Nos Dice si hay error o no hay error.
    const [formValidation, setFormValidation] = useState({});

    //Cada vez que el formState cambie se llama al createValidatior()
    useEffect(() => {
        createValidators();
    }, [formState]);

    const isFormValid = useMemo(()=>{
        //Recorrera si tiene valor de NULL
        for (const formValue of Object.keys(formValidation)) {
            
            //Si es diferente de null
            if(formValidation[formValue] !== null) return false;
        };
        return true;

    //Se ejecutara cuando : formValidation cambie
    },[formValidation]);

    //Obtengo los valores de los inputs del form.
    const onInputChange = ({ target }) => {

        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState(initialState);
    };

    const createValidators = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {

            //Obtengo la funcion y el mensaje de error que hicimos
            const [funcion, errorMessage] = formValidations[formField];

            formCheckedValues[`${formField}Valid`] = funcion(formState[formField]) ? null : errorMessage;

            //Guardo los datos.
            setFormValidation(formCheckedValues);
            console.log(formCheckedValues);
        };
    };

    return {
        ...formValidation,
        ...formState,
        onInputChange,
        onResetForm,
        formState,
        isFormValid
    }
};
