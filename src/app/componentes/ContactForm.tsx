"use client";
import React, { useState } from "react";
import { CheckCircle, Mail, User, MessageCircle, Send } from "lucide-react";
import { requestToBodyStream } from "next/dist/server/body-streams";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = async (e) => {
    setIsLoading(true);

    try {
      // const res = await fetch('/api/send', {
      //   method: 'POST',
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name, email, message }),
      // });

      const res = new Promise<{ ok: boolean }>((resolve) => {
        resolve({ ok: true }); // immediately resolve with { ok: true }
      });
      
      if (res.ok) {
        setStatus(true);
        setName('');
        setEmail('');
        setMessage('');
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (status) {
    return (
      <div className="relative flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-900 to-black">
        <div className="w-full max-w-lg bg-gray-900 rounded-2xl shadow-xl p-8 text-center border border-gray-700">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Message Sent Successfully!
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Thank you for reaching out! I've received your message and will get back to you within 24 hours.
          </p>
          <div className="bg-gray-800 rounded-lg p-4 mb-6 border border-gray-700">
            <p className="text-sm text-blue-400 font-medium">
              💼 Ready to bring your project to life?
            </p>
            <p className="text-sm text-gray-400 mt-1">
              I specialize in delivering high-quality solutions tailored to your needs.
            </p>
          </div>
          <button
            onClick={() => setStatus(false)}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="w-full max-w-lg bg-gray-900 rounded-2xl shadow-xl border border-gray-700">
        {/* Header */}
        <div className="px-8 pt-8 pb-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            Let's Work Together
          </h2>
          <p className="text-gray-400">
            Ready to start your next project? I'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form action="" onSubmit={handleForm}>
        <div className="px-8 pb-8 space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-gray-300">
              <User className="w-4 h-4 mr-2 text-gray-400" />
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your full name"
              type="text"
              required
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-gray-300">
              <Mail className="w-4 h-4 mr-2 text-gray-400" />
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email address"
              type="email"
              required
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-gray-300">
              <MessageCircle className="w-4 h-4 mr-2 text-gray-400" />
              Project Details
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg p-4 h-32 resize-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Tell me about your project, timeline, and requirements..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            onClick={handleForm}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
        {/* Footer */}
        {/* <div className="px-8 pb-8">
          <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
            <p className="text-sm text-gray-300 mb-2">
              <strong className="text-white">Response Time:</strong> Within 24 hours
            </p>
            <p className="text-xs text-gray-400">
              I'm committed to providing exceptional service and clear communication throughout our collaboration.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactForm;