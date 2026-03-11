"use client";

import { useState, useCallback } from "react";
import { SERVICE_CATEGORIES, INITIAL_CART } from "@/data/services";
import type { CartItem, PanelState } from "@/times, cart/types";

// Components
import { Navbar } from "./components/navbar";
import { CategoryTabs } from "./components/category-tabs";
import { ServiceSection } from "./components/service-section";
import { CartPanel } from "./components/cart-panel";
import { BookingPanel } from "./components/booking-panel";
import { SuccessModal } from "./components/success-modal";
import { SidePanel } from "./components/side-panel";
import { HeroBanner } from "./components/hero-banner";
import { ReviewsSection } from "./components/reviews-section";
import { BookingCTA } from "./components/booking-cta";
import { Footer } from "./components/footer";
export default function ServicesPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART);
  const [panelState, setPanelState] = useState<PanelState>("closed");
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("combo");

  const cartCount = cartItems.reduce((s, i) => s + (i.quantity || 0), 0);

  const handleAddToCart = useCallback((serviceId: string) => {
    const allServices = SERVICE_CATEGORIES.flatMap((c) => c.services);
    const service = allServices.find((s) => s.id === serviceId);
    if (!service) return;
    setCartItems((prev) => {
      const ex = prev.find((i) => i.service.id === serviceId);
      if (ex)
        return prev.map((i) =>
          i.service.id === serviceId
            ? { ...i, quantity: (i.quantity || 0) + 1 }
            : i,
        );
      return [...prev, { service, quantity: 1 }];
    });
    setPanelState("cart");
  }, []);

  const handleRemove = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((i) => i.service.id !== id));
  }, []);

  const handleQuantity = useCallback((id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.service.id === id
          ? { ...i, quantity: Math.max(1, (i.quantity || 0) + delta) }
          : i,
      ),
    );
  }, []);

  const handleClose = () => setPanelState("closed");
  const handleProceed = () => setPanelState("booking");
  const handleConfirm = () => {
    setPanelState("closed");
    setShowSuccess(true);
  };

  return (
    <>
      <Navbar cartCount={cartCount} onCartOpen={() => setPanelState("cart")} />

      <main className="pt-16 bg-[#654A1B]  ">
        <HeroBanner />
        <CategoryTabs activeTab={activeTab} onTab={setActiveTab} />
        {/* Services */}
        <div
          className="relative overflow-hidden"
          style={{ backgroundColor: "#523C14" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/banner/bannersection.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.08,
            }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(164,120,40,0.20) 0%, rgba(97,79,56,1) 100%)",
            }}
          />

          <div className="divide-y divide-om-brown/5 relative z-10">
            {SERVICE_CATEGORIES.map((cat) => (
              <ServiceSection
                key={cat.id}
                category={cat}
                onAdd={handleAddToCart}
              />
            ))}
          </div>
        </div>

        <ReviewsSection />
        <BookingCTA onBook={() => setPanelState("cart")} />
      </main>

      <Footer />

      {/* Side Panel */}
      <SidePanel open={panelState !== "closed"} onClose={handleClose}>
        {panelState === "cart" && (
          <CartPanel
            items={cartItems}
            onClose={handleClose}
            onRemove={handleRemove}
            onQuantity={handleQuantity}
            onProceed={handleProceed}
          />
        )}
        {panelState === "booking" && (
          <BookingPanel onClose={handleClose} onConfirm={handleConfirm} />
        )}
      </SidePanel>

      {/* Success Modal */}
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </>
  );
}
