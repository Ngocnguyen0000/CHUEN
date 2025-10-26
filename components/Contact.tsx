import React, { useState } from 'react'

const SendIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-2"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
  </svg>
)

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Portfolio Contact - From ${formData.name}`,
    )
    const body = encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.name} <${formData.email}>`,
    )
    window.location.href = `mailto:nguyenguyen000001@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold uppercase tracking-widest mb-4">
        Get in Touch
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        Have a project in mind or just want to say hello? Feel free to reach
        out. I'm always open to discussing new opportunities and creative ideas.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6 text-left"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-400 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#2d2d2d] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F9A826] transition-all duration-300"
              placeholder="e.g., Jane Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-400 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#2d2d2d] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F9A826] transition-all duration-300"
              placeholder="e.g., jane.doe@example.com"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-400 mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-[#2d2d2d] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F9A826] transition-all duration-300"
            placeholder="Let's build something amazing together..."
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center bg-[#F9A826] text-black font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105"
          >
            Send Message <SendIcon />
          </button>
        </div>
      </form>
    </section>
  )
}