import {FC} from "react";
import './errors_handler.scss';
import {FieldErrors} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import {Inputs} from "../order-form/OrderForm";

interface IErrorHandler {
    errors: FieldErrors<Inputs>
}

const ErrorMessageHandler: FC<IErrorHandler> = ({errors}) => {

    return (
        <>
            {errors.phone?.message && <ErrorMessage name={'phone'} errors={errors} render={({message}) => <p style={{color: "red"}}>{message}</p>}/>}
            {errors.firstName?.message && <ErrorMessage name={'firstName'} errors={errors} render={({message}) => <p style={{color: "red"}}>{message}</p>}/>}
            {errors.address?.street?.message && <ErrorMessage name={'address.street'} errors={errors} render={({message}) => <p style={{color: "red"}}>{message}</p>}/>}
            {errors.address?.building?.message && <ErrorMessage name={'address.building'} errors={errors} render={({message}) => <p style={{color: "red"}}>{message}</p>}/>}
            {errors.address?.apartment?.message && <ErrorMessage name={'address.apartment'} errors={errors} render={({message}) => <p style={{color: "red"}}>{message}</p>}/>}
            {errors.address?.floor?.message && <ErrorMessage name={'address.floor'} errors={errors} render={({message}) => <p style={{color: "red"}}>{message}</p>}/>}
        </>
    );
}

export default ErrorMessageHandler;