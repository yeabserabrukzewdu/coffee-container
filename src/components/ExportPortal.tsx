import React, { useState, useEffect } from 'react';
import { COFFEE_VARIETIES } from '../data';
import { Send, FileText, CheckCircle, Clock, MapPin, Truck, ChevronRight, Archive, Eye, AlertCircle, X } from 'lucide-react';
import { Inquiry } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ExportPortalProps {
  initialVarietyId?: string;
  onInquirySubmitted?: () => void;
}

export default function ExportPortal({ initialVarietyId, onInquirySubmitted }: ExportPortalProps) {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [varietyId, setVarietyId] = useState(initialVarietyId || 'yirgacheffee');
  const [quantity, setQuantity] = useState<number>(10);
  const [unit, setUnit] = useState<'bags' | 'tons' | 'containers'>('bags');
  const [beanType, setBeanType] = useState<'green' | 'roasted'>('green');
  const [message, setMessage] = useState('');
  const [destination, setDestination] = useState('');

  const [submittedInquiry, setSubmittedInquiry] = useState<Inquiry | null>(null);
  const [inquiryHistory, setInquiryHistory] = useState<Inquiry[]>([]);
  const [activePortalTab, setActivePortalTab] = useState<'form' | 'history'>('form');
  
  // Custom non-blocking message/alert state
  const [notification, setNotification] = useState<{ message: string; type: 'error' | 'info' } | null>(null);

  // Load inquiry history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('coffee_container_inquiries');
    if (saved) {
      try {
        setInquiryHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing inquiry history', e);
      }
    }
  }, []);

  // Update variety selection if prop changes
  useEffect(() => {
    if (initialVarietyId) {
      setVarietyId(initialVarietyId);
      setActivePortalTab('form');
    }
  }, [initialVarietyId]);

  const selectedVarietyObj = COFFEE_VARIETIES.find((v) => v.id === varietyId);

  const showNotification = (msg: string, type: 'error' | 'info' = 'info') => {
    setNotification({ message: msg, type });
    setTimeout(() => {
      setNotification(null);
    }, 6000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!companyName || !contactName || !email || !destination) {
      showNotification('Please fill in all required fields (Company, Name, Email, and Destination).', 'error');
      return;
    }

    const newInquiry: Inquiry = {
      id: `CONT-EXP-${Math.floor(1000 + Math.random() * 9000)}`,
      companyName,
      contactName,
      email,
      phone,
      varietyId,
      quantity,
      unit,
      beanType,
      message: message || `B2B Request for ${selectedVarietyObj?.name || 'Custom Blend'} shipment.`,
      createdAt: new Date().toLocaleString(),
      status: 'Received',
    };

    const updatedHistory = [newInquiry, ...inquiryHistory];
    setInquiryHistory(updatedHistory);
    localStorage.setItem('coffee_container_inquiries', JSON.stringify(updatedHistory));
    setSubmittedInquiry(newInquiry);

    // Reset Form Fields
    setCompanyName('');
    setContactName('');
    setEmail('');
    setPhone('');
    setDestination('');
    setMessage('');

    if (onInquirySubmitted) {
      onInquirySubmitted();
    }
  };

  return (
    <div className="space-y-12 py-4 text-left overflow-hidden">
      {/* Toast Notification Container */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-6 right-6 z-[9999] max-w-md p-4 rounded-sm shadow-xl flex items-start gap-3 border ${
              notification.type === 'error' 
                ? 'bg-red-50 border-red-200 text-red-900' 
                : 'bg-leaf-50 border-leaf-200 text-leaf-900'
            }`}
          >
            {notification.type === 'error' ? (
              <AlertCircle className="w-5 h-5 shrink-0 text-[#c22d2d]" />
            ) : (
              <CheckCircle className="w-5 h-5 shrink-0 text-leaf-600" />
            )}
            <div className="flex-1">
              <p className="text-xs font-serif font-light leading-relaxed">{notification.message}</p>
            </div>
            <button 
              onClick={() => setNotification(null)}
              className="text-coffee-400 hover:text-coffee-950 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portal Header */}
      <div className="max-w-3xl space-y-4">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-leaf-600 font-sans font-extrabold text-xs tracking-widest uppercase block"
        >
          B2B Trade Portal
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-light text-4xl sm:text-5xl text-coffee-950 leading-tight"
        >
          Export Quotation & Sample Request
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-coffee-800 text-lg sm:text-xl font-light leading-relaxed"
        >
          We collaborate with international roasters, specialty café franchises, and distributors. Request custom pricing estimates or order sample packages dispatched directly from Addis Ababa.
        </motion.p>
      </div>

      {/* Tabs to toggle between Submit Form and Submission History */}
      <div className="flex border-b border-coffee-100 gap-2">
        <button
          onClick={() => {
            setActivePortalTab('form');
            setSubmittedInquiry(null);
          }}
          className={`px-5 py-3 rounded-t-sm text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2 focus:outline-none cursor-pointer ${
            activePortalTab === 'form' && !submittedInquiry
              ? 'bg-coffee-900 text-white font-bold'
              : 'text-coffee-700 hover:bg-coffee-100/50 hover:text-coffee-950'
          }`}
          id="portal-tab-form"
        >
          <FileText className="w-4 h-4 text-leaf-400" />
          New Export Inquiry
        </button>

        <button
          onClick={() => {
            setActivePortalTab('history');
            setSubmittedInquiry(null);
          }}
          className={`px-5 py-3 rounded-t-sm text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2 focus:outline-none relative cursor-pointer ${
            activePortalTab === 'history'
              ? 'bg-coffee-900 text-white font-bold'
              : 'text-coffee-700 hover:bg-coffee-100/50 hover:text-coffee-950'
          }`}
          id="portal-tab-history"
        >
          <Archive className="w-4 h-4 text-leaf-400" />
          My Inquiries History
          {inquiryHistory.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-leaf-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {inquiryHistory.length}
            </span>
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {submittedInquiry ? (
          /* SUCCESS SUBMISSION SCREEN */
          <motion.div 
            key="success-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-leaf-50/50 border border-leaf-100 rounded-sm p-8 sm:p-12 text-left space-y-8"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1 bg-leaf-100 text-leaf-800 px-3 py-1 rounded-sm text-xs font-semibold">
                  <CheckCircle className="w-4 h-4 text-leaf-600" />
                  Inquiry Submitted Successfully
                </div>
                <h3 className="font-display font-light text-3xl text-coffee-950">
                  Inquiry Reference: {submittedInquiry.id}
                </h3>
                <p className="text-sm text-coffee-800">
                  Submitted on {submittedInquiry.createdAt} • Our team in Addis Ababa will review this within 1 business day.
                </p>
              </div>
              <button
                onClick={() => {
                  setSubmittedInquiry(null);
                  setActivePortalTab('history');
                }}
                className="px-4 py-2 bg-white hover:bg-coffee-50 border border-coffee-200 text-coffee-800 rounded-sm text-xs font-semibold transition-colors focus:outline-none cursor-pointer"
              >
                View My Submissions
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Summary card */}
              <div className="bg-white border border-coffee-100 rounded-sm p-6 space-y-4 shadow-sm">
                <h4 className="font-display font-normal text-lg text-coffee-950 border-b border-coffee-50 pb-2">
                  Order Configuration
                </h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-coffee-500 block uppercase font-mono tracking-wider">Variety Selected</span>
                    <span className="font-semibold text-coffee-900">{selectedVarietyObj?.name || 'Custom Blend'}</span>
                  </div>
                  <div>
                    <span className="text-coffee-500 block uppercase font-mono tracking-wider">Processing Level</span>
                    <span className="font-semibold text-coffee-900 capitalize">{submittedInquiry.beanType} Beans</span>
                  </div>
                  <div>
                    <span className="text-coffee-500 block uppercase font-mono tracking-wider">Requested Quantity</span>
                    <span className="font-semibold text-coffee-900">
                      {submittedInquiry.quantity} {submittedInquiry.unit}
                    </span>
                  </div>
                  <div>
                    <span className="text-coffee-500 block uppercase font-mono tracking-wider">Contact Person</span>
                    <span className="font-semibold text-coffee-900">{submittedInquiry.contactName}</span>
                  </div>
                </div>
              </div>

              {/* Summary workflow list */}
              <div className="space-y-4 text-left">
                <h4 className="font-display font-normal text-lg text-coffee-950">
                  Next Steps for B2B Export
                </h4>
                <div className="space-y-3 font-light text-xs sm:text-sm text-coffee-800">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-sm bg-leaf-100 text-leaf-800 flex items-center justify-center font-bold text-xs shrink-0">
                      1
                    </div>
                    <p>
                      <strong className="font-semibold text-coffee-950 block">Sample Dispatch & Approval:</strong> We prepare a 500g physical sample package of <strong>{selectedVarietyObj?.name || 'Specialty'}</strong> green beans and dispatch via international courier.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-leaf-100 text-leaf-800 flex items-center justify-center font-bold text-xs shrink-0">
                      2
                    </div>
                    <p>
                      <strong className="font-semibold text-coffee-950 block">Quotation & Proforma Contract:</strong> Upon sample approval, we issue a formal FOB Djibouti proforma contract specifying weight, grading, and currency settlement.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-leaf-100 text-leaf-800 flex items-center justify-center font-bold text-xs shrink-0">
                      3
                    </div>
                    <p>
                      <strong className="font-semibold text-coffee-950 block">ECTA Regulatory Verification:</strong> Every cargo bag is sampled and tested by the Coffee and Tea Authority of Ethiopia for sanitary certificates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : activePortalTab === 'form' ? (
          /* INQUIRY SUBMISSION FORM */
          <motion.div 
            key="portal-form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Form (7 columns) */}
            <form
              id="export-inquiry-form"
              onSubmit={handleSubmit}
              className="lg:col-span-7 bg-white border border-coffee-100 rounded-sm p-6 sm:p-8 space-y-6 text-left shadow-sm animate-fade-in"
            >
              <h3 className="font-display font-light text-xl text-coffee-950 border-b border-coffee-50 pb-2">
                Request Commercial Quote
              </h3>

              {/* Company & Contact Name inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="companyName" className="block text-xs font-semibold text-coffee-700">
                    Company / Roastery Name <span className="text-leaf-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Atlas Specialty Roasters"
                    className="w-full p-3 bg-coffee-50/50 border border-coffee-200 focus:border-leaf-400 rounded-sm text-sm placeholder-coffee-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contactName" className="block text-xs font-semibold text-coffee-700">
                    Contact Person Name <span className="text-leaf-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full p-3 bg-coffee-50/50 border border-coffee-200 focus:border-leaf-400 rounded-sm text-sm placeholder-coffee-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs font-semibold text-coffee-700">
                    Business Email Address <span className="text-leaf-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. purchasing@atlasroasters.com"
                    className="w-full p-3 bg-coffee-50/50 border border-coffee-200 focus:border-leaf-400 rounded-sm text-sm placeholder-coffee-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-xs font-semibold text-coffee-700">
                    Contact Telephone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 555-019-2834"
                    className="w-full p-3 bg-coffee-50/50 border border-coffee-200 focus:border-leaf-400 rounded-sm text-sm placeholder-coffee-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Variety & Destination Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="varietyId" className="block text-xs font-semibold text-coffee-700">
                    Select Coffee Variety <span className="text-leaf-600">*</span>
                  </label>
                  <select
                    id="varietyId"
                    value={varietyId}
                    onChange={(e) => setVarietyId(e.target.value)}
                    className="w-full p-3 bg-coffee-50/50 border border-coffee-200 focus:border-leaf-400 rounded-sm text-sm text-coffee-950 focus:outline-none"
                  >
                    {COFFEE_VARIETIES.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} ({v.characteristic})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="destination" className="block text-xs font-semibold text-coffee-700">
                    Target Destination Country <span className="text-leaf-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="destination"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Germany, Japan, USA"
                    className="w-full p-3 bg-coffee-50/50 border border-coffee-200 focus:border-leaf-400 rounded-sm text-sm placeholder-coffee-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Quantity and Bean Type configurations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 bg-coffee-50/60 rounded-sm border border-coffee-100">
                <div className="space-y-2">
                  <label className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-coffee-800">
                    Import Volume
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="1"
                      required
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 p-2.5 bg-white border border-coffee-200 rounded-sm text-sm font-semibold focus:outline-none text-center"
                    />
                    <select
                      value={unit}
                      onChange={(e: any) => setUnit(e.target.value)}
                      className="flex-grow p-2.5 bg-white border border-coffee-200 rounded-sm text-xs font-medium focus:outline-none text-coffee-950"
                    >
                      <option value="bags">Bags (60kg Standard Jute)</option>
                      <option value="tons">Metric Tons (1000kg)</option>
                      <option value="containers">20ft Dry Cargo Containers</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-coffee-800">
                    Bean Processing Level
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setBeanType('green')}
                      className={`p-2.5 rounded-sm text-xs font-medium border transition-colors cursor-pointer ${
                        beanType === 'green'
                          ? 'bg-coffee-900 border-coffee-900 text-white font-semibold'
                          : 'bg-white border-coffee-200 text-coffee-800 hover:bg-coffee-50'
                      }`}
                    >
                      Raw Green Beans
                    </button>
                    <button
                      type="button"
                      onClick={() => setBeanType('roasted')}
                      className={`p-2.5 rounded-sm text-xs font-medium border transition-colors cursor-pointer ${
                        beanType === 'roasted'
                          ? 'bg-coffee-900 border-coffee-900 text-white font-semibold'
                          : 'bg-white border-coffee-200 text-coffee-800 hover:bg-coffee-50'
                      }`}
                    >
                      Custom Roasted
                    </button>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-1">
                <label htmlFor="message" className="block text-xs font-semibold text-coffee-700">
                  Special Processing or Quality Requests (Optional)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Specify preferred preparation methods (e.g. Natural Sun-Dried vs. Wet-Washed), organic certifications, or packing configurations..."
                  rows={3}
                  className="w-full p-3 bg-coffee-50/50 border border-coffee-200 focus:border-leaf-400 rounded-sm text-sm placeholder-coffee-400 focus:outline-none resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-leaf-500 hover:bg-leaf-600 active:bg-leaf-700 text-white font-semibold rounded-sm text-center shadow-md flex items-center justify-center gap-2 group transition-all focus:outline-none cursor-pointer"
              >
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Submit Commercial Inquiry
              </motion.button>
            </form>

            {/* Right Live Estimation Sidebar (5 columns) */}
            <div className="lg:col-span-5 bg-coffee-950 text-white rounded-sm p-6 sm:p-8 space-y-6 text-left shadow-xl sticky top-24">
              <h3 className="font-display font-light text-xl text-leaf-400 border-b border-white/10 pb-2">
                Trade Specs Summary
              </h3>

              {/* Dynamic visual parameters */}
              <div className="space-y-4">
                <div className="space-y-1 bg-white/5 p-4 rounded-sm border border-white/5">
                  <span className="text-[10px] font-mono text-coffee-300 uppercase block tracking-wider">
                    Origin Highlands Altitude
                  </span>
                  <span className="text-sm font-semibold font-display text-white">
                    {varietyId === 'yirgacheffee' ? '1,700 - 2,200m ASL' : varietyId === 'gesha' ? '1,900 - 2,100m ASL' : '1,500 - 2,000m ASL'}
                  </span>
                </div>

                <div className="space-y-1 bg-white/5 p-4 rounded-sm border border-white/5">
                  <span className="text-[10px] font-mono text-coffee-300 uppercase block tracking-wider">
                    Target Grading Criteria
                  </span>
                  <span className="text-sm font-semibold font-display text-white">
                    Specialty Grade 1 (Q-Score 85+)
                  </span>
                </div>

                <div className="space-y-1 bg-white/5 p-4 rounded-sm border border-white/5">
                  <span className="text-[10px] font-mono text-coffee-300 uppercase block tracking-wider">
                    Estimated Shipment Cargo Weight
                  </span>
                  <span className="text-sm font-semibold font-display text-leaf-400">
                    {unit === 'bags'
                      ? `${(quantity * 60).toLocaleString()} kg net`
                      : unit === 'tons'
                      ? `${(quantity * 1000).toLocaleString()} kg net`
                      : `approx. ${(quantity * 19200).toLocaleString()} kg net`}
                  </span>
                </div>
              </div>

              {/* Freight coordinates */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-coffee-300 font-bold">Shipping Parameters:</h4>
                <div className="text-xs space-y-2 text-coffee-300 font-light font-serif">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-leaf-400 shrink-0" />
                    <span><strong>Inland Transit:</strong> Addis Ababa to Djibouti Port</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 text-leaf-400 shrink-0" />
                    <span><strong>Port of Loading:</strong> Djibouti Dry Port (FOB)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-leaf-400 shrink-0" />
                    <span><strong>Milling Lead Time:</strong> 15-20 days from contract</span>
                  </p>
                </div>
              </div>

              {/* Empowerment Guarantee */}
              <div className="bg-leaf-950/80 border border-leaf-900 rounded-sm p-4 text-xs font-light text-leaf-200">
                <p>
                  <strong className="text-white font-semibold font-sans block mb-1">100% Social Guarantee:</strong> Your purchase directly finances fair premium wages, farming training, and education infrastructure at women-led farms in the selected region.
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          /* SUBMISSION HISTORY PANEL */
          <motion.div 
            key="portal-history"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="bg-white border border-coffee-100 rounded-sm p-6 sm:p-8 text-left space-y-6 shadow-sm"
          >
            <h3 className="font-display font-light text-xl text-coffee-950 border-b border-coffee-50 pb-2">
              My Submissions Ledger ({inquiryHistory.length})
            </h3>

            {inquiryHistory.length === 0 ? (
              <div className="py-12 text-center text-coffee-400 space-y-3">
                <Archive className="w-12 h-12 mx-auto stroke-1 text-coffee-300" />
                <p className="font-medium text-sm text-coffee-800 font-serif">No prior export inquiries submitted from this device.</p>
                <p className="text-xs font-light max-w-sm mx-auto font-serif">
                  Once you submit an inquiry form, it will be listed here with tracking coordinates.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {inquiryHistory.map((item) => {
                  const variety = COFFEE_VARIETIES.find((v) => v.id === item.varietyId);
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border border-coffee-100 rounded-sm p-6 hover:border-coffee-200 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-coffee-50/20"
                    >
                      <div className="space-y-1.5 text-left">
                        <div className="flex flex-wrap gap-2 items-center">
                          <span className="font-mono text-sm font-bold text-coffee-900">{item.id}</span>
                          <span className="text-xs bg-leaf-50 text-leaf-700 px-2.5 py-0.5 rounded-full font-semibold border border-leaf-100/50 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-leaf-500 animate-pulse"></span>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-coffee-950">{item.companyName}</p>
                        <p className="text-xs text-coffee-800">
                          {item.quantity} {item.unit} of {variety?.name || 'Custom blend'} ({item.beanType} beans)
                        </p>
                        <p className="text-[10px] text-coffee-500 font-mono">Destination: {item.phone ? `${item.phone} | ` : ''}{item.createdAt}</p>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            showNotification(`Inquiry tracking detail:\nReference: ${item.id}\nStatus: RECEIVED - Preparing sample package.\nWe will contact you at ${item.email}.`, 'info');
                          }}
                          className="px-4 py-2 bg-white border border-coffee-200 text-coffee-800 hover:bg-coffee-50 hover:border-coffee-300 rounded-sm text-xs font-semibold transition-all focus:outline-none flex items-center gap-1 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-leaf-600" />
                          Track Progress
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
