
import { MyButton } from "../../button"
import { useState } from "react";
import { Formik, Form } from "formik";
import { useAppDispatch } from "../../../store/store";
import { MyInput } from "../../input";
import { signup } from "../../../store/authorization/authorization";
import { Modal } from "../../modalWindow";

interface Values{
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    tel: string
}

export const Signup = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const dispatch = useAppDispatch()
    return(
        <>
        <MyButton className="w-20 h-12" onClick={handleOpen}>Signup</MyButton>
        <Modal open={open} onClose={handleClose}>
            <Formik
            initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                tel: ""
            }}
            onSubmit={(
                values: Values,
              ) => {
                    dispatch(signup({
                        firstname: values.firstname,
                        lastname: values.lastname,
                        email: values.email,
                        password: values.password,
                        tel: values.tel
                    }))
              }}>
                <Form className="text-main">
                    <span className="text-lg">Signup</span>
                    <div>
                        <MyInput label="First name" id="firstname" name="firstname" placeholder="John"/>
                        <MyInput label="Last name" id="lastname" name="lastname" placeholder="Smith"/>
                        <MyInput label="Password" id="password" name="password" placeholder="your password"/>
                        <MyInput label="Email" id="email" name="email" placeholder="email"/>
                        <MyInput label="Tel" id="tel" name="tel" placeholder="+YYY XXXX XXX XX"/>
                    </div>
                    <div className="flex items-center justify-end">
                        <MyButton children="submit" type="submit" onClick={handleClose} className="w-20 h-12 mx-2 text-lg "/>
                        <MyButton children="cancel" onClick={handleClose} className="w-20 h-12 mx-2 text-lg "/>
                    </div>
                </Form>
            </Formik>
        </Modal>
        </>
    )
}