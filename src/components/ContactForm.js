import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (_jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Nome" }), _jsx("input", { type: "text", className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20", value: name, onChange: e => setName(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Email" }), _jsx("input", { type: "email", className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20", value: email, onChange: e => setEmail(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Mensagem" }), _jsx("textarea", { className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20", value: message, onChange: e => setMessage(e.target.value), required: true })] }), _jsx("button", { type: "submit", className: "w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors", children: "Enviar" }), submitted && _jsx("p", { className: "text-green-600 mt-2", children: "Mensagem enviada com sucesso!" })] }));
};
export default ContactForm;
