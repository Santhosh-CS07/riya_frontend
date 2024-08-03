import {useState} from 'react';
import RegistrationForm from "./RegistrationForm";
const LoginPage: React.FC = () => {
    const [isRegistering, setIsRegistering] = useState(false);
  
    const handleCreateAccountClick = () => {
      setIsRegistering(true);
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {isRegistering ? (
          <RegistrationForm />
        ) : (
          <form className="bg-white p-6 sm:p-8 rounded shadow-md w-full max-w-xs sm:max-w-md">
            <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center">Login</h1>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none"
            >
              Login
            </button>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account? <button onClick={handleCreateAccountClick} className="text-indigo-600 hover:text-indigo-800">Create account</button>
            </p>
          </form>
        )}
      </div>
    );
  };
  
  export default LoginPage;