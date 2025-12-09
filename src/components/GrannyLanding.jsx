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
          <a className="text-sm font-medium hover:underline" href="#mint">
            Mint
          </a>
          <button className="bg-rose-600 text-white px-4 py-2 rounded-xl text-sm shadow">
            Connect Wallet
          </button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-8 items-center">
        {/* HERO */}
        <section className="order-2 md:order-1">
          <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold mb-4">
            New • Meme Launch
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Meet Granny — the OG memecoin slayer
          </h2>

          <p className="mt-4 text-slate-700">
            She’s small, she’s fierce, and she’s ready to smack weak meme coins
            into the past. Join the pack — utility, staking, and community-first
            tokenomics.
          </p>

          <div className="mt-6 flex gap-3 items-center">
            <a
              href="#mint"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-3 rounded-2xl shadow-lg"
            >
              Buy Granny
            </a>
            <a
              href="#whitepaper"
              className="text-sm text-slate-700 hover:underline"
            >
              Read whitepaper
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-2xl shadow">
              <p className="text-xs text-slate-500">Total Supply</p>
              <p className="font-bold text-lg">1,000,000,000 GCOIN</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow">
              <p className="text-xs text-slate-500">Launch Price</p>
              <p className="font-bold text-lg">0.000001 ETH</p>
            </div>
          </div>
        </section>

        {/* IMAGE */}
        <aside className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-white p-4 shadow-2xl flex items-center justify-center">
            <img
              src="/assets/granny-3d.png"
              alt="Granny 3D Mascot"
              className="w-full h-full object-contain"
            />
          </div>
        </aside>

        {/* TOKENOMICS */}
        <section
          id="tokenomics"
          className="md:col-span-2 bg-white p-6 rounded-2xl shadow mt-4"
        >
          <h3 className="text-2xl font-bold">Tokenomics</h3>

          <div className="mt-4 grid md:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-slate-500">Supply</p>
              <p className="text-lg font-semibold">1,000,000,000</p>
            </div>

            <div className="p-4 border rounded-lg">
              <p className="text-sm text-slate-500">Liquidity</p>
              <p className="text-lg font-semibold">50%</p>
            </div>

            <div className="p-4 border rounded-lg">
              <p className="text-sm text-slate-500">Tax</p>
              <p className="text-lg font-semibold">4% (burn / marketing)</p>
            </div>

            <div className="p-4 border rounded-lg">
              <p className="text-sm text-slate-500">Staking Rewards</p>
              <p className="text-lg font-semibold">8% APY</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-slate-600">Distribution:</p>
            <ul className="list-disc pl-5 mt-2 text-slate-700">
              <li>Liquidity: 50%</li>
              <li>Team & Dev: 10% (vesting)</li>
              <li>Marketing: 20%</li>
              <li>Community & Airdrops: 20%</li>
            </ul>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="md:col-span-2 mt-4">
          <h3 className="text-2xl font-bold">Roadmap</h3>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Phase 1</h4>
              <p className="text-sm text-slate-600 mt-2">
                Token launch, initial liquidity, community airdrop.
              </p>
            </div>

            <div className="p-4 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Phase 2</h4>
              <p className="text-sm text-slate-600 mt-2">
                Staking beta, merch drops, influencer push.
              </p>
            </div>

            <div className="p-4 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Phase 3</h4>
              <p className="text-sm text-slate-600 mt-2">
                Game integration, cross-chain listings, DAO launch.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="mint"
          className="md:col-span-2 mt-6 bg-rose-50 p-6 rounded-2xl shadow flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-xl font-bold">Ready to buy Granny?</h4>
            <p className="text-slate-700 mt-2">
              Connect your wallet and purchase via our liquidity pool. Or join
              the community to earn rewards.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-rose-600 text-white px-6 py-3 rounded-2xl font-semibold shadow">
              Buy on DEX
            </button>
            <button className="bg-white border px-5 py-3 rounded-2xl">
              View on Explorer
            </button>
          </div>
        </section>

        <footer className="md:col-span-2 mt-8 py-8 border-t pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} Granny Coin. Not financial advice.
            </p>

            <div className="flex items-center gap-4">
              <a className="text-sm hover:underline" href="#">
                Twitter
              </a>
              <a className="text-sm hover:underline" href="#">
                Telegram
              </a>
              <a className="text-sm hover:underline" href="#">
                Discord
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
