import { Modal } from "rsuite"
import { MyButton } from "../../button"
import { useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { MyInput } from "../../input";
import { useAppDispatch } from "../../../store/store";
import { login } from "../../../store/authorization/authorization"
import * as Yup from 'yup';


interface Values {
    email: string,
    password: string
  }


export const Login = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .email('invalid email')
            .required('Required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
                

    })
    return(
        <>
        <MyButton className="w-20 h-12" onClick={handleOpen}>Login</MyButton>
        <Modal open={open} onClose={handleClose}>
            <Formik 
                initialValues={{
                    email: "",
                    password: ""
                }}
                validationSchema={loginSchema}
                onSubmit={(
                    values: Values,
                  ) => {
                    dispatch(login({email: values.email, password: values.password}))
                  }}>
                    <Form>
                        <Modal.Header >
                            <Modal.Title> Login</Modal.Title>
                        </Modal.Header>
                        
                        <Modal.Body>
                            
                                <MyInput label="Email" id="email" name="email" placeholder="John@example.com"/>
                                <MyInput label="Password" id="password" name="password" />
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <MyButton children="submit" onClick={handleClose} type="submit" className="w-20 h-12 mx-2 text-lg"/>
                            <MyButton children="cancel" onClick={handleClose} className="w-20 h-12 mx-2 text-lg"/>
                        </Modal.Footer>
                    </Form>

            </Formik>
        </Modal>
        </>
    )
}