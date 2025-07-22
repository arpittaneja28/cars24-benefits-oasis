import React from 'react';
import { X, Plus, CreditCard, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from '@/components/ui/sidebar';

interface CreditCard {
  name: string;
  bankName: string;
  portalCashback: number;
  joiningFee: string;
  annualFee: string;
  features: string[];
  highlight?: string;
}

interface CardComparisonSidebarProps {
  selectedCards: CreditCard[];
  onRemoveCard: (cardName: string) => void;
  onCompareCards: () => void;
  onAddMoreCards: () => void;
}

const CardComparisonSidebar = ({ 
  selectedCards, 
  onRemoveCard, 
  onCompareCards, 
  onAddMoreCards 
}: CardComparisonSidebarProps) => {
  return (
    <Sidebar className="w-80" side="right">
      <SidebarHeader className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Compare Cards</h3>
          <SidebarTrigger>
            <X className="w-5 h-5" />
          </SidebarTrigger>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {selectedCards.length}/3 cards selected
        </p>
      </SidebarHeader>

      <SidebarContent className="p-6">
        <div className="space-y-4">
          {selectedCards.map((card, index) => (
            <div key={index} className="glass-card p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cars24-blue to-primary rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{card.name}</h4>
                    <p className="text-xs text-muted-foreground">{card.bankName}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveCard(card.name)}
                  className="p-1 hover:bg-red-50 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-red-500" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="p-2 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="text-lg font-bold text-amber-800">₹{card.portalCashback}</div>
                  <div className="text-xs text-amber-600">Cars24 Cashback</div>
                </div>
                <div className="p-2 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-sm font-bold text-blue-800">{card.joiningFee}</div>
                  <div className="text-xs text-blue-600">Joining Fee</div>
                </div>
              </div>

              {card.highlight && (
                <div className="inline-block px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                  {card.highlight}
                </div>
              )}
            </div>
          ))}

          {/* Add More Cards Button */}
          {selectedCards.length < 3 && (
            <Button
              variant="outline"
              className="w-full border-dashed border-2 border-muted-foreground/30 hover:border-primary/50 py-8"
              onClick={onAddMoreCards}
            >
              <Plus className="w-5 h-5 mr-2" />
              Add More Card
            </Button>
          )}
        </div>

        {/* Compare Button */}
        <div className="mt-6 pt-6 border-t">
          <Button 
            onClick={onCompareCards}
            className="w-full bg-gradient-to-r from-cars24-blue to-cars24-green text-white font-semibold py-3 scale-on-hover"
            disabled={selectedCards.length < 2}
          >
            <Gift className="w-4 h-4 mr-2" />
            Compare Cards
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-2">
            {selectedCards.length < 2 ? 'Select at least 2 cards to compare' : 'Ready to compare selected cards'}
          </p>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default CardComparisonSidebar;