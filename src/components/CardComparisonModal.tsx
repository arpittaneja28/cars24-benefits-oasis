import React from 'react';
import { X, CreditCard, Award, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface CreditCard {
  name: string;
  bankName: string;
  portalCashback: number;
  joiningFee: string;
  annualFee: string;
  features: string[];
  highlight?: string;
}

interface CardComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCards: CreditCard[];
  onRemoveCard: (cardName: string) => void;
}

const CardComparisonModal = ({ isOpen, onClose, selectedCards, onRemoveCard }: CardComparisonModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Compare Credit Cards</DialogTitle>
        </DialogHeader>
        
        <div className="overflow-x-auto">
          <div className="min-w-max">
            {/* Header Row */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="font-semibold text-muted-foreground">Features</div>
              {selectedCards.map((card, index) => (
                <div key={index} className="relative">
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <button
                      onClick={() => onRemoveCard(card.name)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-sm">{card.name}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">{card.bankName}</p>
                    {card.highlight && (
                      <span className="inline-block mt-2 px-2 py-1 bg-primary text-white text-xs rounded-full">
                        {card.highlight}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Portal Cashback Row */}
            <div className="grid grid-cols-4 gap-4 mb-4 py-3 border-b border-border">
              <div className="flex items-center gap-2 font-medium">
                <Gift className="w-4 h-4 text-primary" />
                Portal Cashback (Amazon Voucher)
              </div>
              {selectedCards.map((card, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-green-600">₹{card.portalCashback}</div>
                  <div className="text-xs text-muted-foreground">Amazon Voucher</div>
                </div>
              ))}
            </div>

            {/* Joining Fee Row */}
            <div className="grid grid-cols-4 gap-4 mb-4 py-3 border-b border-border">
              <div className="font-medium">Joining Fee</div>
              {selectedCards.map((card, index) => (
                <div key={index} className="text-center font-semibold">{card.joiningFee}</div>
              ))}
            </div>

            {/* Annual Fee Row */}
            <div className="grid grid-cols-4 gap-4 mb-4 py-3 border-b border-border">
              <div className="font-medium">Annual Fee</div>
              {selectedCards.map((card, index) => (
                <div key={index} className="text-center font-semibold">{card.annualFee}</div>
              ))}
            </div>

            {/* Features Comparison */}
            <div className="grid grid-cols-4 gap-4 mb-6 py-3">
              <div className="font-medium">Key Features</div>
              {selectedCards.map((card, index) => (
                <div key={index} className="space-y-2">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <Award className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-4 gap-4">
              <div></div>
              {selectedCards.map((card, index) => (
                <div key={index}>
                  <Button className="w-full">
                    Apply for {card.bankName}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CardComparisonModal;