import {Container, FormLabel, Input, FormErrorMessage, FormControl, Button} from '@chakra-ui/react'
import { Formik, Form, Field } from "formik";


const validateEmail = (value) => {
    let error
    if (!value) {
      error = 'Email is required'
    }
    return error
}

const Home = () => {

    return(
        <Container>
            <Formik
                initialValues={{username: '', email: ''}}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                  }}
                >
                {(props) => (
                    <Form>
                        <Field name='username' id='username' placeholder='Username'>
                            {({ form }) => (
                            <FormControl>
                                <FormLabel htmlFor='username'>Username</FormLabel>
                                <Input id='username' placeholder='Username' />
                                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>
                        <Field name='email' validate={validateEmail}>
                            {({form}) => (
                                <FormControl >
                                    <FormLabel htmlFor='email'>Email</FormLabel>
                                    <Input  id='email' placeholder='Email'/>
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Button
                            mt={4}
                            colorScheme='teal'
                            // isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Form>
                )}
                </Formik>
        </Container>
    )
}

export default Home