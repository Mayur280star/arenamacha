"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const items = [
  {
    text: "🚀 Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=64&h=64&fit=crop&crop=faces"
  },
  {
    text: "🎨 UI/UX Design",
    image: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?w=64&h=64&fit=crop&crop=faces"
  },
  {
    text: "📱 Mobile Apps",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=64&h=64&fit=crop&crop=faces"
  },
  {
    text: "🤖 AI & ML",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=64&h=64&fit=crop&crop=faces"
  },
  {
    text: "🔒 Cybersecurity",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=64&h=64&fit=crop&crop=faces"
  },
  {
    text: "☁️ Cloud Computing",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=64&h=64&fit=crop&crop=faces"
  },
  {
    text: "📊 Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=64&h=64&fit=crop&crop=faces"
  }
];

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] md:h-[30rem] lg:h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={items}
        direction="right"
        speed="fast"
      />
    </div>
  );
}