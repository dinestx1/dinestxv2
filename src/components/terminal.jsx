import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Terminal = () => {
    const navigate = useNavigate();
    const [inputUser, setInputUser] = useState('');
    const [output, setOutput] = useState([]);
    const [loading, setLoading] = useState(false);
    const [awaitingConfirmation, setAwaitingConfirmation] = useState(false);
    const [loginStep, setLoginStep] = useState(null);
    const [loginCredentials, setLoginCredentials] = useState({ username: '', password: '' });

    const scrollRef = useRef(null);

    const InputItem = [
        {
            input: "--h",
            description: "Usage: --cu to Contact Us. Don't use [] bracket",
            output: [
                {
                    "[--s]": "Services",
                    "[--w]": "Works",
                    "[--cu]": "Contact Us",
                    "[--ul]": "User Login",
                    "[cls]": "Clear All",
                }
            ]
        },
        { input: "--ca", description: "", route: "/" },
        { input: "--s", description: "Service", route: "/services" },
        { input: "--w", description: "Works", route: "/works" },
        { input: "--cu", description: '(Phone: +918409031739, +918936860540)(Email: dinestx@gmail.com)', route: "" },
        { input: "--ul", description: "Login user account using terminal feature" },
        { input: "cls", description: "" }
    ];

    const handleUserInput = () => {
        if (awaitingConfirmation) {
            if (inputUser.toLowerCase() === "y") {
                setOutput(prev => [...prev, `$ ${inputUser}`, "Wait for a while... We are creating your account"]);
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    navigate(InputItem.find(item => item.input === "--ca").route);
                }, 1500);
            } else if (inputUser.toLowerCase() === "n") {
                setOutput(prev => [...prev, `$ ${inputUser}`, "Account creation canceled."]);
            } else {
                setOutput(prev => [...prev, `$ ${inputUser}`, "Invalid input. Please type 'Y' or 'N'."]);
                setInputUser("");
                return;
            }
            setAwaitingConfirmation(false);
            setInputUser("");
            return;
        }

        if (loginStep === "username") {
            setLoginCredentials(prev => ({ ...prev, username: inputUser }));
            setLoginStep("password");
            setOutput(prev => [...prev, `$ ${inputUser}`, "Enter your password:"]);
            setInputUser("");
            return;
        }

        if (loginStep === "password") {
            const credentials = {
                username: loginCredentials.username,
                password: inputUser
            };
            setLoginStep(null);
            setOutput(prev => [...prev, `$ ${inputUser}`, "Logging in..."]);
            setLoading(true);
            setInputUser("");

            setTimeout(() => {
                setLoading(false);
                if (
                    credentials.username === "admin@dinestx.com" &&
                    credentials.password === "admin123"
                ) {
                    setOutput(prev => [...prev, "Login successful! Redirecting to dashboard..."]);
                    navigate("/dashboard");
                } else {
                    setOutput(prev => [...prev, "Login failed. Invalid username or password."]);
                }
                setLoginCredentials({ username: "", password: "" });
            }, 1500);
            return;
        }

        const matchedItem = InputItem.find(item => item.input.toLowerCase() === inputUser.toLowerCase());

        if (matchedItem) {
            if (matchedItem.input === "--h") {
                const helpOutput = matchedItem.output
                    .map(item => Object.entries(item).map(([cmd, desc]) => `${cmd}: ${desc}`))
                    .flat();
                setOutput(prev => [...prev, `$ ${inputUser}`, matchedItem.description, ...helpOutput]);
            } else if (matchedItem.input === "--ca") {
                setOutput(prev => [...prev, `$ ${inputUser}`, "Do you want to use Terminal (Y/N):"]);
                setAwaitingConfirmation(true);
            } else if (matchedItem.input === "--cls" || matchedItem.input === "cls") {
                setOutput([]);
            } else if (matchedItem.input === "--cu") {
                setOutput(prev => [...prev, `$ ${inputUser}`, matchedItem.description]);
            } else if (matchedItem.input === "--ul") {
                setLoginStep("username");
                setOutput(prev => [...prev, `$ ${inputUser}`, "Enter your username or email:"]);
            } else {
                setLoading(true);
                setOutput(prev => [...prev, `$ ${inputUser}`, `Navigating to ${matchedItem.description}`]);
                setTimeout(() => {
                    setLoading(false);
                    navigate(matchedItem.route);
                }, 1500);
            }
        } else {
            setOutput(prev => [...prev, `$ ${inputUser}`, "Command not found. Please try again."]);
        }

        setInputUser(""); // Clear input field
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleUserInput();
        }
    };

    useEffect(() => {
        setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }, 100);
    }, [output]);

    return (
        <div className='justify-items-center '>
            <div className="text-white font-mono w-full">
                <div className='bg-gray-700 p-2 rounded-t-3xl'>
                    <div className="flex justify-between items-center mx-3">
                        <div className='flex items-center gap-3'>
                            <div className="flex space-x-2 text-red-500">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            </div>
                            <p className="text-green-400 flex gap-3">Dinestx</p>
                        </div>
                        <p className="text-sm">bash</p>
                    </div>
                </div>
                <div
                    className="bg-gray-900 p-6 rounded-b-3xl space-y-1 h-[400px] overflow-y-scroll scrollbar-thin hide-scrollbar"
                    ref={scrollRef}
                >
                    <p className="text-green-400 flex gap-3">@Dinestx<span className='text-gray-300'>--h for help</span></p>
                    {output.map((line, index) => (
                        <p key={index} className="text-white">{line}</p>
                    ))}
                    {loading && (
                        <div className='animate-spin text-white flex items-center w-2 h-2'>/</div>
                    )}
                    <div className='flex items-center gap-1.5'>
                        <p className="text-green-400">
                            {loginStep ? ">" : "$ Dinestx ~"}
                        </p>
                        <input
                            className='bg-transparent border-none outline-none text-blue-500 focus:outline-none'
                            value={inputUser}
                            onChange={(e) => setInputUser(e.target.value)}
                            onKeyPress={handleKeyPress}
                            autoFocus
                            type={loginStep === "password" ? "password" : "text"}
                            placeholder={awaitingConfirmation ? "Y / N" : ""}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
