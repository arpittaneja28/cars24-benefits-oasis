import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Mail, Phone, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'details' | 'otp'>('details');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.includes('@cars24.com')) {
      toast({
        title: "Invalid Email",
        description: "Please use your CARS24 work email address.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
      toast({
        title: "OTP Sent",
        description: `Verification code sent to ${email}`,
      });
    }, 1500);
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp !== '123456') {
      toast({
        title: "Invalid OTP",
        description: "Please enter the correct verification code.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate verification
    setTimeout(() => {
      setIsLoading(false);
      login(email);
      toast({
        title: "Welcome!",
        description: "Successfully logged in to your CARS24 benefits portal.",
      });
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="shadow-xl border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              {step === 'details' ? 'Welcome to CARS24 Benefits' : 'Verify Your Email'}
            </CardTitle>
            <CardDescription>
              {step === 'details' 
                ? 'Enter your work details to access exclusive benefits'
                : `Enter the verification code sent to ${email}`
              }
            </CardDescription>
          </CardHeader>

          <CardContent>
            {step === 'details' ? (
              <form onSubmit={handleSendOTP} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@cars24.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-border"
                  />
                  <p className="text-xs text-muted-foreground">
                    Must be your CARS24 email address
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="border-border"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending OTP...' : 'Send Verification Code'}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOTP} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp" className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Verification Code
                  </Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    maxLength={6}
                    className="border-border text-center text-2xl tracking-widest"
                  />
                  <p className="text-xs text-muted-foreground">
                    Use "123456" for prototype demo
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setStep('details')}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Verifying...' : 'Verify & Login'}
                  </Button>
                </div>

                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  className="w-full text-sm"
                  onClick={() => {
                    toast({
                      title: "OTP Resent",
                      description: "New verification code sent to your email.",
                    });
                  }}
                >
                  Resend Code
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Prototype Toggle */}
        <div className="mt-6 p-4 bg-muted rounded-lg border border-border">
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Prototype Demo</h4>
          <p className="text-xs text-muted-foreground mb-3">
            For demo purposes, use any @cars24.com email and OTP: 123456
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;