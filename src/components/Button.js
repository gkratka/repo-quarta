var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
const Button = (_a) => {
    var { children, variant = 'primary', size = 'md', href, className = '' } = _a, props = __rest(_a, ["children", "variant", "size", "href", "className"]);
    const base = 'inline-flex items-center justify-center font-semibold rounded transition-colors duration-200 focus:outline-none';
    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-dark',
        secondary: 'bg-accent text-white hover:bg-accent-dark',
        outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    };
    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2 text-base',
        lg: 'px-7 py-3 text-lg',
    };
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
    if (href) {
        return (_jsx("a", Object.assign({ href: href, className: classes }, props, { children: children })));
    }
    return (_jsx("button", Object.assign({ className: classes }, props, { children: children })));
};
export default Button;
