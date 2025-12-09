import React from "react";

export default function GrannyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-100 text-slate-900">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/assets/granny-coin-icon.svg"
            alt="Granny Coin"
            className="w-12 h-12"
          />
          <div>
            <h1 className="text-xl font-extrabold tracking-tight">
              Granny Coin
            </h1>
            <p className="text-sm text-slate-600">
              The feisty meme coin that slaps weak tokens.
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a className="text-sm font-medium hover:underline" href="#tokenomics">
            Tokenomics
          </a>
          <a className="text-sm font-medium hover:underline" href="#roadmap">
            Roadmap
          </a>
          <a className="text-sm font-medium hover:underline" href="#mint
