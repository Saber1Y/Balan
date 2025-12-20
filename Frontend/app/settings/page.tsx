import { UserSettings } from "@/components/settings/user-settings";
import { WalletSettings } from "@/components/settings/wallet-settings";

export default function Settings() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Settings
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UserSettings />
          <WalletSettings />
        </div>
      </div>
    </div>
  );
}