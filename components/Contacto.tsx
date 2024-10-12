'use client';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ContactoSchema = Yup.object().shape({
  nombre: Yup.string()
    .required('El nombre es requerido')
    .min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: Yup.string()
    .email('Email inválido')
    .required('El email es requerido'),
  mensaje: Yup.string()
    .required('El mensaje es requerido')
    .min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

interface FormValues {
  nombre: string;
  email: string;
  mensaje: string;
}

export default function Contacto() {
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await fetch('https://hook.us1.make.com/y8a4sinpqterncsph25fampfv456noyd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitStatus('success');
        resetForm();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gray-800">Contáctanos</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-naranja p-8 text-white flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-4">Estamos aquí para ayudarte</h3>
              <p className="mb-6 text-center">Envíanos tu consulta y te responderemos a la brevedad.</p>
              <Image
                src="/images/logo.jpeg"
                alt="Caninos & Consultores"
                width={200}
                height={200}
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <Formik
                initialValues={{ nombre: '', email: '', mensaje: '' }}
                validationSchema={ContactoSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form className="space-y-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        Nombre
                      </label>
                      <Field
                        type="text"
                        name="nombre"
                        className={`mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50 ${
                          errors.nombre && touched.nombre ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-naranja focus:ring-naranja'
                        }`}
                        placeholder="Tu nombre"
                      />
                      <ErrorMessage name="nombre" component="div" className="mt-1 text-sm text-red-600" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        className={`mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50 ${
                          errors.email && touched.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-naranja focus:ring-naranja'
                        }`}
                        placeholder="tu@email.com"
                      />
                      <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
                    </div>
                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                        Mensaje
                      </label>
                      <Field
                        as="textarea"
                        name="mensaje"
                        rows="4"
                        className={`mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50 ${
                          errors.mensaje && touched.mensaje ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-naranja focus:ring-naranja'
                        }`}
                        placeholder="Escribe tu mensaje aquí..."
                      />
                      <ErrorMessage name="mensaje" component="div" className="mt-1 text-sm text-red-600" />
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-naranja hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-naranja disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              {submitStatus === 'success' && (
                <div className="mt-4 text-green-600">Mensaje enviado con éxito. ¡Gracias por contactarnos!</div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 text-red-600">Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
