"use client";
import React, { useState } from "react";
import { AnimatePresence,motion } from "motion/react"
import {  Mail, User,RotateCw, MessageCircle, Send } from "lucide-react";
import { Vortex } from "./ui/vortex";

const ContactForm = () => {
  const [name, setName] = useState("Hello Kitty ");
  const [email, setEmail] = useState("chulbuli@me.com");
  const [message, setMessage] = useState("Hello there");
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForm  = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);

    try {
      e.preventDefault();
      // const {name , email,message} = req.json()

      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      
      if (res.ok) {
        setStatus(true);
        setName('');
        setEmail('');
        setMessage('');
        
        // Reset message
        setTimeout(() => {
          setStatus(false);
        }, 4000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }

  };

  
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-transparent overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <AnimatePresence mode="wait">
          {status ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
              // style={{ minHeight: "100vh" }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -30, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                className="flex justify-center mb-6"
              >
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="w-full max-w-lg backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border-2 border-white/30 bg-black/70"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-2xl font-bold text-white mb-4"
                >
                  Message Sent Successfully!!
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-gray-300 mb-6 leading-relaxed"
                >
                  Thank you for reaching out! I&apos;ve received your message and will get back to you within 24 hours.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="bg-gray-900 rounded-lg p-4 mb-6 border border-gray-700"
                >
                  <p className="text-sm text-white font-medium">
                    Ready to bring your project to life?
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    I specialize in delivering high-quality solutions tailored to your needs.
                  </p>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStatus(false)}
                  className="w-full flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 hover:cursor-pointer to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <RotateCw />
                  Send Another Message
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-lg rounded-2xl shadow-xl border border-gray-700 backdrop-blur-lg  bg-black/20"
              style={{ zIndex: 10 }}
            >
              {/* Header */}
              <div className="px-8 pt-6 pb-3 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Let&apos;s Work Together
                </h2>
                <p className="text-gray-200">
                  Ready to start your next project? I&apos;d love to hear from you.
                </p>
              </div>

              {/* Form */}
              <form action="" onSubmit={handleForm} autoComplete="off">
                <div className="px-8 pb-8 space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-200">
                      <User className="w-4 h-4 mr-2 text-gray-300" />
                      Full Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/10 border border-gray-500 rounded-lg p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur"
                      placeholder="Enter your full name"
                      type="text"
                      required
                      autoComplete="off"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-200">
                      <Mail className="w-4 h-4 mr-2 text-gray-300" />
                      Email Address
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/10 border border-gray-500 rounded-lg p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur"
                      placeholder="Enter your email address"
                      type="email"
                      required
                      autoComplete="off"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-200">
                      <MessageCircle className="w-4 h-4 mr-2 text-gray-300" />
                      Project Details
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white/10 border border-gray-500 rounded-lg p-4 h-32 resize-none text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur"
                      placeholder="Tell me about your project, timeline, and requirements..."
                      required
                      autoComplete="off"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-102  focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </Vortex>
    </div>
  );
};

export default ContactForm;