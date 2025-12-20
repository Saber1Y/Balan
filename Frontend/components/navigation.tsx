"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WalletConnector } from "@/components/wallet/wallet-connector";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Pools", href: "/pools" },
  { name: "Swap", href: "/swap" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Liquidity", href: "/liquidity" },
  { name: "Settings", href: "/settings" },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Balancer
            </Link>
            
            <div className="hidden md:flex ml-10 space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    pathname === item.href
                      ? "text-zinc-900 dark:text-zinc-50 border-b-2 border-blue-500"
                      : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <WalletConnector />
          </div>
        </div>
      </div>
    </nav>
  );
};