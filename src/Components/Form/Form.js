import React from "react";
import {useDispatch, useSelector} from "react-redux";
import * as yup from "yup";
import {Formik, Field, Form} from "formik";
import styles from './Form.module.scss';
import {addAddress, addAge, addLastName, addName, addPhone, clearCart} from "../../Redux/actions";

const FormCart = () => {
    const dispatch = useDispatch();
    const itemsCart = useSelector(state => state.items.cartArr);

    const validationSchema = yup.object().shape({
        name: yup.string().typeError('Must be a string').required('Required').matches(/^[a-zA-Z]+$/, "Must be only letters"),
        lastName: yup.string().typeError('Must be a string').required('Required').matches(/^[a-zA-Z]+$/, "Must be only letters"),
        age: yup.number().typeError('Must be a number').required('Required'),
        address: yup.string().typeError('Must be a string').required('Required'),
        phone: yup.number().typeError('Must be a number').required('Required'),
    })

    const INITIAL_VALUES = {
        name: useSelector(state => state.form.name),
        lastName: useSelector(state => state.form.lastName),
        age: useSelector(state => state.form.age),
        address: useSelector(state => state.form.address),
        phone: useSelector(state => state.form.phone),
    }


    return (
        <Formik initialValues={INITIAL_VALUES} onSubmit={(values, {resetForm}) => {
            console.log('Form values', values)
            console.log('Products in Cart', itemsCart)
            dispatch(clearCart());
            resetForm(values = '');
        }} validationSchema={validationSchema}
        >
            {({
                  values,
                  handleChange,
                  handleBlur,
                  isValid,
                  handleSubmit,
                  dirty,
                  touched,
                  errors
              }) => (
                <Form className={styles.form}>
                    <div className={styles.blockForm}>
                        <label className={styles.label} htmlFor="name">First Name</label>
                        <Field className={styles.field} id="name" name="name" placeholder="Jane" type="text"
                               onChange={(e) => {
                                   handleChange(e)
                                   dispatch(addName(e.target.value))
                               }}
                               onBlur={handleBlur}
                               value={values.name}
                        />

                        {touched.name && errors.name && <p className={styles.error}>{errors.name}</p>}
                    </div>
                    <div className={styles.blockForm}>
                        <label className={styles.label} htmlFor="lastName">Last Name</label>
                        <Field className={styles.field} id="lastName" name="lastName" placeholder="Doe" type="text"
                               onChange={(e) => {
                                   handleChange(e)
                                   dispatch(addLastName(e.target.value))
                               }}
                               onBlur={handleBlur}
                               value={values.lastName}
                        />

                        {touched.lastName && errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
                    </div>
                    <div className={styles.blockForm}>
                        <label className={styles.label} htmlFor="age">Age</label>
                        <Field className={styles.field} id="age" name="age" placeholder="Age" type="number"
                               onChange={(e) => {
                                   handleChange(e)
                                   dispatch(addAge(e.target.value))
                               }}
                               onBlur={handleBlur}
                               value={values.age}
                        />

                        {touched.age && errors.age && <p className={styles.error}>{errors.age}</p>}
                    </div>
                    <div className={styles.blockForm}>
                        <label className={styles.label} htmlFor="phone">Phone</label>
                        <Field className={styles.field} id="phone" name="phone" placeholder="+9201434" type="tel"
                               onChange={(e) => {
                                   handleChange(e)
                                   dispatch(addPhone(e.target.value))
                               }}
                               onBlur={handleBlur}
                               value={values.phone}
                        />

                        {touched.phone && errors.phone && <p className={styles.error}>{errors.phone}</p>}
                    </div>
                    <div className={styles.blockForm}>
                        <label className={styles.label} htmlFor="address">Delivery Address</label>
                        <Field
                            className={styles.field}
                            id="address"
                            name="address"
                            placeholder="3828 Piermont Drive"
                            type="text"
                            onChange={(e) => {
                                handleChange(e)
                                dispatch(addAddress(e.target.value))
                            }}
                            onBlur={handleBlur}
                            value={values.address}
                        />

                        {touched.address && errors.address && <p className={styles.error}>{errors.address}</p>}
                    </div>

                    <div className={styles.blockForm}>
                        <button className={styles.btn} type="submit" disabled={!isValid && !dirty}
                                onClick={() => {
                                    localStorage.removeItem('cart')
                                }}>Submit
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}


export default FormCart;