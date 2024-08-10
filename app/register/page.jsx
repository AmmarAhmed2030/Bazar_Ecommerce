import React from 'react';
import RegisterForm from '@/components/frontend/RegisterForm';

export default function Register() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 min-h-screen flex items-center justify-center">
      <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-slate-800 dark:border-slate-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-900 md:text-2xl dark:text-white text-center">
            Create a new account
          </h1>
          <RegisterForm role="USER" />
        </div>
      </div>
    </section>
  );
}
