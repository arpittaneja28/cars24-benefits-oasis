import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Mail, Phone, Loader2, CheckCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'login' | 'otp' | 'success'>('login');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setStep('otp');
  };

  const handleSubmitOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) return;

    setIsLoading(true);
    // Simulate OTP verification
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setStep('success');
    
    // Auto-close after success
    setTimeout(() => {
      login(email);
      onClose();
      resetForm();
    }, 2000);
  };

  const resetForm = () => {
    setStep('login');
    setEmail('');
    setPhone('');
    setOtp('');
    setIsLoading(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 300); // Reset after modal closes
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop">
      <div className="glass-card w-full max-w-md mx-4 p-8 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            {step === 'success' ? (
              <CheckCircle className="w-8 h-8 text-white" />
            ) : (
              <Mail className="w-8 h-8 text-white" />
            )}
          </div>
          <h2 className="font-playfair text-2xl font-bold text-foreground mb-2">
            {step === 'login' && 'Access Your Benefits'}
            {step === 'otp' && 'Verify Your Account'}
            {step === 'success' && 'Welcome to CARS24!'}
          </h2>
          <p className="text-muted-foreground">
            {step === 'login' && 'Enter your CARS24 work details to unlock exclusive benefits'}
            {step === 'otp' && 'Enter the 6-digit code sent to your phone'}
            {step === 'success' && 'Successfully verified! Redirecting to your dashboard...'}
          </p>
        </div>

        {/* Login Form */}
        {step === 'login' && (
          <form onSubmit={handleSubmitLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Work Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@cars24.com"
                  className="luxury-input w-full pl-12"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="luxury-input w-full pl-12"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading || !email || !phone}
              className="neuro-button w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  Sending OTP...
                </>
              ) : (
                'Send Verification Code'
              )}
            </Button>
          </form>
        )}

        {/* OTP Form */}
        {step === 'otp' && (
          <form onSubmit={handleSubmitOtp} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Verification Code
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="123456"
                className="luxury-input w-full text-center text-2xl tracking-widest"
                maxLength={6}
                required
              />
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Sent to {phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep('login')}
                className="flex-1"
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={isLoading || otp.length !== 6}
                className="neuro-button flex-1"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  'Verify & Continue'
                )}
              </Button>
            </div>

            <button
              type="button"
              className="text-sm text-primary hover:text-primary-hover transition-colors w-full text-center"
              onClick={() => setStep('login')}
            >
              Didn't receive code? Resend
            </button>
          </form>
        )}

        {/* Success State */}
        {step === 'success' && (
          <div className="text-center space-y-4">
            <div className="success-glow rounded-2xl p-6">
              <p className="text-foreground mb-4">
                🎉 Your account has been verified successfully!
              </p>
              <p className="text-sm text-muted-foreground">
                You'll be redirected to your personalized dashboard in a moment...
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;