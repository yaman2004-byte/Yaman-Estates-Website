import React, { useState } from 'react';
import { ContactFormData, ContactFormErrors } from '../../types';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

interface ContactFormProps {
  initialInterest?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialInterest = '', className = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    interest: (initialInterest as ContactFormData['interest']) || '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  // Validation logic
  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select your area of interest.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details regarding your inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief message of at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Clean API abstraction: In production, this posts to /api/inquiries or webhook
      // We simulate an asynchronous network dispatch
      await new Promise((resolve) => setTimeout(resolve, 1100));

      // Successfully processed
      setIsSubmitted(true);
    } catch {
      setSubmissionError('An unexpected transmission error occurred. Please try again or reach out directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interest: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-[#E8D7C1]/30 p-8 sm:p-12 border border-[#9A571F]/40 rounded-xs text-center ${className}`}>
        <div className="w-14 h-14 rounded-full bg-[#351A0D] text-[#D8B98A] flex items-center justify-center mx-auto mb-6 shadow-md">
          <CheckCircle2 size={30} className="text-[#D8B98A]" />
        </div>
        <span className="text-[10px] tracking-[0.28em] uppercase text-[#7A3F15] font-mono block mb-2">
          Transmission Received
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl text-[#351A0D] mb-4">
          Thank you.<br />Your enquiry has been received.
        </h3>
        <p className="text-sm text-[#351A0D]/80 max-w-md mx-auto leading-relaxed font-light mb-8">
          A member of the Yaman Estates private advisory team will review your brief with strict discretion and respond within one business day.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium border border-[#351A0D] text-[#351A0D] hover:bg-[#351A0D] hover:text-[#F4EBDD] transition-colors rounded-xs"
        >
          <span>Submit Another Enquiry</span>
          <ArrowRight size={14} />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-[#F4EBDD] p-6 sm:p-10 border border-[#E8D7C1] shadow-xs rounded-xs ${className}`}
    >
      <div className="mb-8 pb-4 border-b border-[#E8D7C1]">
        <span className="text-[10px] tracking-[0.24em] uppercase text-[#7A3F15] block mb-1">
          Confidential Communication
        </span>
        <h3 className="font-serif text-2xl text-[#351A0D]">
          Direct Property & Advisory Brief
        </h3>
      </div>

      {submissionError && (
        <div className="mb-6 p-4 bg-red-50 border-l-2 border-red-700 text-red-900 text-xs flex items-start gap-2.5">
          <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-700" />
          <span>{submissionError}</span>
        </div>
      )}

      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs uppercase tracking-[0.16em] font-medium text-[#351A0D] mb-2"
          >
            Full Name <span className="text-[#9A571F]">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            autoComplete="name"
            placeholder="e.g. Eleanor Vance"
            className={`w-full px-4 py-3 bg-[#FAF6F0] border text-sm text-[#351A0D] placeholder-[#351A0D]/40 rounded-xs focus:outline-hidden focus:ring-1 focus:ring-[#9A571F] transition-colors ${
              errors.fullName ? 'border-red-600 bg-red-50/20' : 'border-[#E8D7C1] hover:border-[#D8B98A]'
            }`}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-red-700">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-[0.16em] font-medium text-[#351A0D] mb-2"
            >
              Email Address <span className="text-[#9A571F]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder="e.g. name@domain.com"
              className={`w-full px-4 py-3 bg-[#FAF6F0] border text-sm text-[#351A0D] placeholder-[#351A0D]/40 rounded-xs focus:outline-hidden focus:ring-1 focus:ring-[#9A571F] transition-colors ${
                errors.email ? 'border-red-600 bg-red-50/20' : 'border-[#E8D7C1] hover:border-[#D8B98A]'
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-700">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs uppercase tracking-[0.16em] font-medium text-[#351A0D] mb-2"
            >
              Phone Number <span className="text-xs text-[#351A0D]/50 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              placeholder="e.g. +1 (555) 019-2834"
              className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#E8D7C1] hover:border-[#D8B98A] text-sm text-[#351A0D] placeholder-[#351A0D]/40 rounded-xs focus:outline-hidden focus:ring-1 focus:ring-[#9A571F] transition-colors"
            />
          </div>
        </div>

        {/* I'm Interested In */}
        <div>
          <label
            htmlFor="interest"
            className="block text-xs uppercase tracking-[0.16em] font-medium text-[#351A0D] mb-2"
          >
            I'm Interested In <span className="text-[#9A571F]">*</span>
          </label>
          <div className="relative">
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[#FAF6F0] border text-sm text-[#351A0D] rounded-xs appearance-none focus:outline-hidden focus:ring-1 focus:ring-[#9A571F] transition-colors cursor-pointer ${
                errors.interest ? 'border-red-600 bg-red-50/20' : 'border-[#E8D7C1] hover:border-[#D8B98A]'
              }`}
              aria-invalid={!!errors.interest}
              aria-describedby={errors.interest ? 'interest-error' : undefined}
            >
              <option value="" disabled>
                Select an area of inquiry...
              </option>
              <option value="Buying Property">Buying Property (Residential / Villa / Penthouse)</option>
              <option value="Selling Property">Selling Property (Private Representation)</option>
              <option value="Land">Land (Acquisition / Advisory / Parcel Review)</option>
              <option value="Investment">Investment (Strategic Real Estate Opportunities)</option>
              <option value="Interiors">Interiors (Spatial Planning & Styling)</option>
              <option value="Construction">Construction (Architectural Execution & Oversight)</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
            {/* Custom chevron */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#9A571F]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.interest && (
            <p id="interest-error" className="mt-1.5 text-xs text-red-700">
              {errors.interest}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-[0.16em] font-medium text-[#351A0D] mb-2"
          >
            Message <span className="text-[#9A571F]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share details regarding your preferred timeframe, spatial goals, geographic requirements, or property vision..."
            className={`w-full px-4 py-3 bg-[#FAF6F0] border text-sm text-[#351A0D] placeholder-[#351A0D]/40 rounded-xs focus:outline-hidden focus:ring-1 focus:ring-[#9A571F] transition-colors ${
              errors.message ? 'border-red-600 bg-red-50/20' : 'border-[#E8D7C1] hover:border-[#D8B98A]'
            }`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-red-700">
              {errors.message}
            </p>
          )}
        </div>

        {/* Confidentiality Notice */}
        <p className="text-[11px] text-[#351A0D]/60 leading-relaxed font-light">
          Your information is held in strict confidence and will not be shared with outside parties without your explicit authorization.
        </p>

        {/* CTA Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#351A0D] text-[#F4EBDD] text-xs uppercase tracking-[0.24em] font-medium rounded-xs hover:bg-[#7A3F15] focus:outline-hidden focus:ring-2 focus:ring-[#9A571F] transition-all disabled:opacity-70 disabled:cursor-not-allowed group shadow-xs"
            style={{ letterSpacing: '0.24em' }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin text-[#D8B98A]" />
                <span>Transmitting Brief...</span>
              </>
            ) : (
              <>
                <span>Send Enquiry</span>
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 text-[#D8B98A]"
                />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
