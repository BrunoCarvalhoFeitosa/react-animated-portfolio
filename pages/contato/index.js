import React, { useRef } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ToastContainer, toast } from "react-toastify"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
import { phoneFormatMask } from "../../services/formatters"
import Avatar from "../../components/Avatar"
import Circles from "../../components/Circles"

const schema = yup.object({
    user_completeName:
      yup
        .string()
        .matches(/^[A-Za-z ]*$/, "Por favor, insira um nome válido.")
        .min(10, "Por favor, insira seu nome corretamente.")
        .max(75, "Por favor, insira seu nome corretamente.")
        .required("O campo nome é obrigatório."),
    user_email:
      yup
        .string()
        .email('Por favor, insira um e-mail válido.')
        .required("O campo e-mail é obrigatório."),
    user_phone:
      yup
        .string()
        .min(14,'Por favor, insira um número telefônico válido.')
        .max(15, "Por favor, insira um número telefônico válido.")
        .required("O campo número telefônico é obrigatório."),
    user_message:
      yup
        .string()
        .required("O campo mensagem é obrigatório."),
  }).required()

const Contact = (ev) => {
    const formRef = useRef()
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const apiKey = process.env.NEXT_PUBLIC_EMAILJS_API_KEY

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async () => {
        try {
          await emailjs.sendForm(serviceId, templateId, formRef.current, apiKey)
    
          toast.success('Mensagem enviada com sucesso, em breve entraremos em contato.', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
    
          reset()
        } catch (error) {
          toast.error('Houve um erro ao enviar sua mensagem, tente novamente.', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        }
      }

    return (
        <div className="h-full py-32 lg:py-0 bg-primary/30   lg:text-left">
            <ToastContainer />
            <Circles />
            <div className="opacity-100 lg:opacity-80">
                <motion.div
                    className="hidden xl:flex absolute bottom-0 -left-[320px]"
                    variants={fadeIn("right", 1.3)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <Avatar />
                </motion.div>
            </div>
            <div className="w-[85%] mx-auto h-full flex flex-col items-center xl:flex-row gap-x-16">
                <div className="flex flex-col lg:flex-row items-center gap-x-24">
                    <div className="relative flex-1 flex flex-col justify-center lg:h-[100vh] z-10">
                        <div className="flex justify-center lg:justify-normal items-baseline gap-x-4">
                            <motion.h2
                                className="h2 text-center lg:text-left"
                                variants={fadeIn('down', 0.8)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                            >
                                Contato
                            </motion.h2>
                            <motion.div
                                variants={fadeIn('down', 1)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="w-4 h-4 rounded-full bg-accent animate-[bounce_0.5s_ease-in-out_infinite]"
                            />
                        </div>
                        <motion.p
                            variants={fadeIn('down', 1)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="text-center lg:text-left"
                        >
                            Entre e contato comigo através deste formulário,
                            me diga qual a sua principal necessidade ou ideia.
                            Vamos tirar isso do papel e passar para as telas.
                        </motion.p>
                    </div>
                    <motion.div
                        className="flex-1 flex flex-col w-full mt-12"
                        variants={fadeIn('down', 1)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <div className="relative lg:right-10">
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex flex-col gap-y-4 w-full"
                            >
                                <div className="w-full">
                                    <input
                                        type="text"
                                        className="input w-full"
                                        placeholder="Nome completo"
                                        {...register("user_completeName")}
                                    />
                                </div>
                                {errors.user_completeName && (
                                    <p className="error-message">{errors.user_completeName.message}</p>
                                )}
                                <div className="w-full flex">
                                    <input
                                        type="email"
                                        className="input w-full"
                                        placeholder="E-mail para contato"
                                        {...register("user_email")}
                                    />
                                </div>
                                {errors.user_email && (
                                    <p className="error-message">{errors.user_email.message}</p>
                                )}
                                <div className="w-full flex">
                                    <input
                                        type="text"
                                        className="input w-full"
                                        placeholder="Número telefônico"
                                        {...register("user_phone")}
                                        onKeyUp={(ev) => phoneFormatMask(ev)}
                                    />
                                </div>
                                {errors.user_phone && (
                                    <p className="error-message">{errors.user_phone.message}</p>
                                )}
                                <div className="w-full flex">
                                    <textarea
                                        className="textarea py-5 h-[140px] lg:h-[110px] resize-none"
                                        placeholder="Deixe sua mensagem ou uma possível dúvida"
                                        {...register("user_message")}
                                    />
                                </div>
                                {errors.user_message && (
                                    <p className="error-message">{errors.user_message.message}</p>
                                )}
                                <div className="w-full">
                                    <button className=" bg-red-600 px-6 py-4 rounded-lg">
                                        Enviar mensagem
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
  
export default Contact
  