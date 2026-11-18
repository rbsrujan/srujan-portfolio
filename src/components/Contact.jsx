import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, FileText, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#E5E5E3]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#777777]">
              CONTACT
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717]">
              Let's connect.
            </h2>

            <p className="text-base text-[#555555] leading-relaxed">
              I am open to software engineering opportunities, applied machine learning projects, and collaborative research initiatives. Feel free to reach out directly via email, phone, or GitHub.
            </p>

            <div className="space-y-3.5 pt-4 border-t border-[#EDEDEB]">
              
              {/* Email */}
              <a
                href={PERSONAL_INFO.links.email}
                className="flex items-center gap-3.5 p-3 rounded-md bg-[#FFFFFF] border border-[#E5E5E3] hover:border-[#D1D1CE] transition-all group"
              >
                <div className="p-2 bg-[#F7F7F5] rounded text-[#171717] group-hover:bg-[#171717] group-hover:text-[#FFFFFF] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-[#777777] uppercase">EMAIL</div>
                  <div className="text-sm font-semibold text-[#171717]">{PERSONAL_INFO.links.emailRaw}</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={PERSONAL_INFO.links.phone}
                className="flex items-center gap-3.5 p-3 rounded-md bg-[#FFFFFF] border border-[#E5E5E3] hover:border-[#D1D1CE] transition-all group"
              >
                <div className="p-2 bg-[#F7F7F5] rounded text-[#171717] group-hover:bg-[#171717] group-hover:text-[#FFFFFF] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-[#777777] uppercase">TELEPHONE</div>
                  <div className="text-sm font-semibold text-[#171717]">{PERSONAL_INFO.links.phoneRaw}</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-md bg-[#FFFFFF] border border-[#E5E5E3] hover:border-[#D1D1CE] transition-all group"
              >
                <div className="p-2 bg-[#F7F7F5] rounded text-[#171717] group-hover:bg-[#171717] group-hover:text-[#FFFFFF] transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-[#777777] uppercase">GITHUB</div>
                  <div className="text-sm font-semibold text-[#171717]">github.com/rbsrujan</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-md bg-[#FFFFFF] border border-[#E5E5E3] hover:border-[#D1D1CE] transition-all group"
              >
                <div className="p-2 bg-[#F7F7F5] rounded text-[#171717] group-hover:bg-[#171717] group-hover:text-[#FFFFFF] transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-[#777777] uppercase">LINKEDIN</div>
                  <div className="text-sm font-semibold text-[#171717]">linkedin.com/in/srujan-rb</div>
                </div>
              </a>

              {/* Resume */}
              <a
                href={PERSONAL_INFO.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                download="Srujan_RB_Resume.pdf"
                className="flex items-center gap-3.5 p-3 rounded-md bg-[#FFFFFF] border border-[#E5E5E3] hover:border-[#D1D1CE] transition-all group"
              >
                <div className="p-2 bg-[#F7F7F5] rounded text-[#171717] group-hover:bg-[#171717] group-hover:text-[#FFFFFF] transition-colors">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-[#777777] uppercase">CURRICULUM VITAE</div>
                  <div className="text-sm font-semibold text-[#171717]">Download Official Resume (PDF)</div>
                </div>
              </a>

            </div>

          </div>

          {/* Right Column: Message form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#E5E5E3] rounded-md p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#171717] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-[#666666] mb-6">
                Have an inquiry or discussion topic? Send a message and I will reply to your email address.
              </p>

              {submitted ? (
                <div className="p-6 bg-[#F7F7F5] border border-[#E5E5E3] rounded text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-[#15803D] mx-auto" />
                  <h4 className="text-base font-bold text-[#171717]">Message Received</h4>
                  <p className="text-sm text-[#666666]">
                    Thank you! Your dispatch has been received and I will respond to your email promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-medium text-[#171717] underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#555555] uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Henderson"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E5E5E3] rounded focus:outline-none focus:border-[#171717] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#555555] uppercase tracking-wider mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E5E5E3] rounded focus:outline-none focus:border-[#171717] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#555555] uppercase tracking-wider mb-1.5">
                      Message / Project Scope
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Srujan, I would like to discuss..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E5E5E3] rounded focus:outline-none focus:border-[#171717] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-center"
                  >
                    {loading ? (
                      'Transmitting...'
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
